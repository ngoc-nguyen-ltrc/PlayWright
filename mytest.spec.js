import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Tìm kiếm', { exact: true }).click();
  await page.getByLabel('Tìm kiếm', { exact: true }).fill('automation testing');
});