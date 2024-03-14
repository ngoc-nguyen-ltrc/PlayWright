const { test, expect } = require("@playwright/test");
const exp = require("constants");

test("Screenshot On Config File", async ({ page }) => {
  //Login
  await page.goto("https://www.demoblaze.com/index.html");

  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123");
  await page.locator("//button[normalize-space()='Log in']").click();
});
