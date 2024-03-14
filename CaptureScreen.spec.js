const { test, expect } = require("@playwright/test");

test("Page ScreenShot", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");
  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "Homepage.png",
  });
});

test("FullPage ScreenShot", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");
  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "Fullpage.png",
    fullPage: true,
  });
});

test.only("Element ScreenShot", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");

  await page.locator("(//div[@class='product-thumb'])[1]").screenshot({
    path: "tests/screenshots/" + Date.now() + "Macbook.png",
  });
});
