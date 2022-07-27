const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/block-busters.html');
});

test('should have a title of "Block Busters"', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe('Block Busters');
});

test('should have 100 divs with a class of "red-block"', async ({ page }) => {
  const blocks = await page.$$('.red-block');
  await expect(blocks.length).toBe(100);
});

test('should have 100 divs with id of "block-i" for i^th div ', async ({ page }) => {
  const blocks = await page.$$('.red-block');
  const passing = blocks.filter(async (id, i) => (await id) === `block-${i + 1}`);
  expect(passing.length).toBe(100);
});

test('should delete blocks on mouseover', async ({ page }) => {
  await page.click('#block-100');
  const blocks = await page.$$('.red-block');
  expect(blocks.length).toBeLessThan(200);
});
