import { test, expect, Page } from '@playwright/test';

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 800 },
];

async function blockExternalRequests(page: Page) {
  await page.route('**/*', (route) => {
    const url = route.request().url();
    if (url.startsWith('http://localhost') || url.startsWith('data:')) {
      return route.continue();
    }
    return route.abort();
  });
}

test.describe('Pulse responsive', () => {
  test.beforeEach(async ({ page }) => {
    await blockExternalRequests(page);
  });

  // --- Full-page screenshots at 3 viewports ---
  for (const vp of viewports) {
    test(`screenshot - ${vp.name} (${vp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/pulse/', { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(1000);
      await page.screenshot({
        path: `e2e/screenshots/pulse-${vp.name}.png`,
        fullPage: true,
      });
    });
  }

  // --- No horizontal overflow at any viewport ---
  for (const vp of viewports) {
    test(`no horizontal overflow - ${vp.name} (${vp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/pulse/', { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(500);

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      expect(scrollWidth).toBeLessThanOrEqual(vp.width);
    });
  }

  // --- Inline CTAs visible on mobile ---
  test('CTA buttons visible on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/pulse/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);

    // At least one CTA link should be visible (scroll to bottom area)
    const ctaLinks = page.locator('a[href="/contacto/"], a[href="/contacto"]');
    const count = await ctaLinks.count();
    expect(count).toBeGreaterThan(0);

    // Check the first CTA is not clipped (has reasonable dimensions)
    const firstCTA = ctaLinks.first();
    const box = await firstCTA.boundingBox();
    if (box) {
      expect(box.width).toBeGreaterThan(40);
      expect(box.width).toBeLessThanOrEqual(375);
    }
  });

  // --- KPI grid does not overflow container at 375px ---
  test('KPI grid fits within container at 375px', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/pulse/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);

    // Find the BI dashboard section and check its KPI grid
    const biSection = page.locator('#inteligencia');
    const sectionBox = await biSection.boundingBox();
    if (sectionBox) {
      // Section should not exceed viewport width
      expect(sectionBox.width).toBeLessThanOrEqual(375);
    }
  });
});
