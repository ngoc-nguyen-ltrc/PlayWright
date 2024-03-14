const { test, expect } = require("@playwright/test");
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";

test("test", async ({ page }) => {
  //Login
  const login = new LoginPage(page);

  await login.gotoLoginPage();
  await login.login("pavanol", "test@123");
  await page.waitForTimeout(5000);

  //HomePage
  const home = new HomePage(page);
  await home.addProductToCart("Samsung galaxy s6");
  await page.waitForTimeout(3000);
  await home.gotoCart();
  await page.waitForTimeout(3000);

  //Cart
  const cart = new CartPage(page);
  await page.waitForTimeout(3000);
  const status = await cart.checkProductInCart("Samsung galaxy s6");
  expect(status).toBe(true);
  //expect(await status).toBe(true);
  await page.waitForTimeout(3000);
});
