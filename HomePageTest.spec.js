const { test, expect } = require("@playwright/test");

test("Home Page", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  const pageTitle = page.title();
  console.log("Page title is ", pageTitle);

  await expect(
    page
      .locator(
        "xpath=//div[@class='card h-100' and .//text()='Samsung galaxy s7']"
      )
      .getByText("555")
  ).toBeVisible();
});
