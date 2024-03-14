const { test, expect } = require("@playwright/test");

test("Assertions", async ({ page }) => {
  //open Application
  await page.goto("https://demo.nopcommerce.com/register");

  //expect(page).toHaveURL()
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  //expect(page).toHaveTitle()
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  //expect(locator).toBeVisible()
  const logoElement = await page.locator(".header-logo");
  await expect(logoElement).toBeVisible();

  //expect(locator).toBeEnabled()
  const searchElement = await page.locator("#small-searchterms");
  await expect(searchElement).toBeEnabled();
});
