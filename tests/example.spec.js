// @ts-check
const { test, expect } = require('@playwright/test');
test.describe('Home page and Getting Started Link ', () => {
  test('should have Playwright in title and get started link linking to the intro page', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);

    // create a locator
    const getStarted = page.locator('text=Get Started');

    // Expect an attribute "to be strictly equal" to the value.
    await expect(getStarted).toHaveAttribute('href', '/docs/intro');

    // Click the get started link.
    await getStarted.click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intro/);
  });
});

test.describe('Features section divs', () => {
  test('should have multiple divs with a class of col--6', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const blocks = await page.$$('.col--6');
    await expect(blocks.length).toBeGreaterThan(1);
  });
});
