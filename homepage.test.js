const { test, expect } = require('@playwright/test');

test('Homepage has correct title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const title = await page.title();
  expect(title).toBe('My Webclass');
});
