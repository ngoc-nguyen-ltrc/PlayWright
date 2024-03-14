const { test, expect } = require("@playwright/test");
const exp = require("constants");

test("Home Page", async ({ page }) => {
  //Login
  await page.goto("https://www.demoblaze.com/index.html");

  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123");
  await page.locator("//button[normalize-space()='Log in']").click();

  //HomePage
  const products = await page.$$(".hrefch");
  expect(products).toHaveLength(9);

  //Logout
  await page.locator("#logout2").click();

  await page.waitForTimeout(5000);
});

test("Add Product to Cart", async ({ page }) => {
  //Login
  await page.goto("https://www.demoblaze.com/index.html");

  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123");
  await page.locator("//button[normalize-space()='Log in']").click();

  //Add Product to Cart

  await page.locator("//a[normalize-space()='Nokia lumia 1520']").click();
  await page.locator("//a[normalize-space()='Add to cart']").click();

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Product added.");
    await dialog.accept();
  });
  //Logout
  await page.waitForTimeout(5000);
});
