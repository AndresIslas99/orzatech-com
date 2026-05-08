import { test, expect, Page } from '@playwright/test';

const pages = [
  { name: 'home', path: '/' },
  { name: 'software', path: '/software/' },
  { name: 'industria', path: '/industria/' },
  { name: 'proyectos', path: '/proyectos/' },
  { name: 'contacto', path: '/contacto/' },
  { name: 'pulse', path: '/pulse/' },
];

const viewports = [
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 812 },
];

async function blockExternalRequests(page: Page) {
  // Block all requests that leave localhost (formspree, Google Fonts, analytics, etc.)
  await page.route('**/*', (route) => {
    const url = route.request().url();
    if (url.startsWith('http://localhost') || url.startsWith('data:')) {
      return route.continue();
    }
    return route.abort();
  });
}

// --- Screenshots (10 tests) ---
test.describe('Screenshots', () => {
  test.beforeEach(async ({ page }) => {
    await blockExternalRequests(page);
  });

  for (const viewport of viewports) {
    for (const pg of pages) {
      test(`${pg.name} - ${viewport.name} screenshot`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto(pg.path, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(1000);
        await page.screenshot({
          path: `e2e/screenshots/${pg.name}-${viewport.name}.png`,
          fullPage: true,
        });
      });
    }
  }
});

// --- Navigation (3 tests) ---
test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await blockExternalRequests(page);
  });

  test('Navbar links work between pages', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const navbar = page.locator('nav');
    await expect(navbar).toBeVisible();

    const links = page.locator('nav a');
    const linkCount = await links.count();
    expect(linkCount).toBeGreaterThan(0);

    const hrefs: string[] = [];
    for (let i = 0; i < linkCount; i++) {
      const href = await links.nth(i).getAttribute('href');
      if (href) hrefs.push(href);
    }

    const expectedRoutes = ['/software', '/industria', '/proyectos', '/contacto'];
    for (const route of expectedRoutes) {
      expect(hrefs.some(h => h.includes(route))).toBeTruthy();
    }
  });

  test('Mobile hamburger menu works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);

    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await page.waitForTimeout(300);

    await page.screenshot({
      path: 'e2e/screenshots/home-mobile-menu-open.png',
      fullPage: false,
    });
  });

  test('Footer links present', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    const footerLinks = footer.locator('a');
    const count = await footerLinks.count();
    expect(count).toBeGreaterThan(0);
  });
});

// --- Global widgets (1 test) ---
test.describe('Global widgets', () => {
  test.beforeEach(async ({ page }) => {
    await blockExternalRequests(page);
  });

  test('WhatsApp button visible on all pages', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    for (const pg of pages) {
      await page.goto(pg.path, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(500);
      const waLink = page.locator('a[href*="wa.me"]');
      const count = await waLink.count();
      expect(count).toBeGreaterThan(0);
    }
  });
});

// --- Contact page (1 test) ---
test.describe('Contact page', () => {
  test.beforeEach(async ({ page }) => {
    await blockExternalRequests(page);
  });

  test('Contact form renders with fields', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/contacto/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);

    const form = page.locator('form');
    await expect(form.first()).toBeVisible();

    await expect(page.locator('input[name="nombre"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('select[name="servicio"]')).toBeVisible();
    await expect(page.locator('textarea[name="mensaje"]')).toBeVisible();
  });
});

// --- Software page (1 test) ---
test.describe('Software page', () => {
  test.beforeEach(async ({ page }) => {
    await blockExternalRequests(page);
  });

  test('Pricing table on /software has 3 tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/software/', { waitUntil: 'domcontentloaded' });

    const priceElements = page.locator('text=/\\$[\\d,]+/');
    const priceCount = await priceElements.count();
    expect(priceCount).toBeGreaterThanOrEqual(3);
  });
});

// --- Image integrity (1 test) ---
test.describe('Image integrity', () => {
  test.beforeEach(async ({ page }) => {
    await blockExternalRequests(page);
  });

  test('No broken images on any page', async ({ page }, testInfo) => {
    testInfo.setTimeout(90_000);
    await page.setViewportSize({ width: 1280, height: 800 });
    const broken: string[] = [];

    // Use a lighter page list to stay within timeout (pulse checked in pulse-responsive.spec.ts)
    const imageCheckPages = pages.filter(p => p.name !== 'pulse');
    for (const pg of imageCheckPages) {
      await page.goto(pg.path, { waitUntil: 'domcontentloaded' });

      // Scroll through the page in chunks to trigger lazy-loaded images
      await page.evaluate(async () => {
        const delay = (ms: number) => new Promise(r => setTimeout(r, ms));
        for (let y = 0; y < document.body.scrollHeight; y += 400) {
          window.scrollTo(0, y);
          await delay(100);
        }
        window.scrollTo(0, 0);
      });

      // Wait for all images to complete loading
      await page.waitForFunction(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        return imgs.every(img => img.complete);
      }, { timeout: 10_000 }).catch(() => {});

      const images = page.locator('img');
      const imgCount = await images.count();

      for (let i = 0; i < imgCount; i++) {
        const img = images.nth(i);
        const src = await img.getAttribute('src');
        const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
        if (naturalWidth === 0) {
          broken.push(`${pg.path}: ${src}`);
        }
      }
    }

    if (broken.length > 0) {
      console.log('Broken images:', broken);
    }
    expect(broken).toHaveLength(0);
  });
});
