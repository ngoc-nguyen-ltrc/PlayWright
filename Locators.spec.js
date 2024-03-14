//const { test, expect } = require("@playwright/test");
//await page.goto("https://www.demoblaze.com/index.html");

import { test, expect } from "@playwright/test";

test("Locators", async ({ page }) => {
  await page.goto("https://datatables.net/");
  await page.getByText("Brenden Wagner").dblclick();
  await page.getByText("206,850").isVisible();
});
