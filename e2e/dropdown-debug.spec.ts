import { test, expect } from '@playwright/test';

test.describe('Soluciones dropdown', () => {
  test('Desktop: hover Soluciones opens dropdown and navigates to /software/', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);

    // Find the Soluciones button in the desktop nav
    const desktopNav = page.locator('nav .hidden.md\\:flex');
    const solucionesBtn = desktopNav.locator('button', { hasText: 'Soluciones' });
    await expect(solucionesBtn).toBeVisible();

    // Hover to open dropdown
    await solucionesBtn.hover();
    await page.waitForTimeout(400);

    await page.screenshot({ path: 'e2e/screenshots/dropdown-hover.png', fullPage: false });

    // Click the desktop dropdown link (first match inside the desktop nav)
    const softwareLink = desktopNav.locator('a[href="/software/"]');
    await softwareLink.click({ force: true });
    await page.waitForTimeout(500);
    expect(page.url()).toContain('/software');
  });

  test('Desktop: hover Soluciones and navigate to /pulse/', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);

    const desktopNav = page.locator('nav .hidden.md\\:flex');
    const solucionesBtn = desktopNav.locator('button', { hasText: 'Soluciones' });
    await solucionesBtn.hover();
    await page.waitForTimeout(400);

    const pulseLink = desktopNav.locator('a[href="/pulse/"]');
    await pulseLink.click({ force: true });
    await page.waitForTimeout(500);
    expect(page.url()).toContain('/pulse');
  });

  test('Mobile: tap Soluciones expands children', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);

    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    await menuButton.click();
    await page.waitForTimeout(300);

    const solucionesMobile = page.locator('nav button', { hasText: 'Soluciones' }).last();
    await solucionesMobile.click();
    await page.waitForTimeout(300);

    await page.screenshot({ path: 'e2e/screenshots/dropdown-mobile.png', fullPage: false });

    const softwareLink = page.locator('nav a', { hasText: 'Software & IA' });
    await expect(softwareLink.first()).toBeVisible();
  });

  test('No console errors on /pulse', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));

    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/pulse/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    expect(errors).toHaveLength(0);
  });
});
