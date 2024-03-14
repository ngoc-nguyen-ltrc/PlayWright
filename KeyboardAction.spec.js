const { test, expect } = require("@playwright/test");

test("Keyboard Actions", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");

  const text1 = await page.locator("//textarea[@name='text1']");
  await text1.fill("welcome to automation testing");
  //await page.type("name='text1'", "welcome automation");

  //Ctrl A
  await page.keyboard.press("Control+A");

  //Ctrl C
  await page.keyboard.press("Control+C");

  //TAB
  //   await page.keyboard.down("Tab");
  //   await page.keyboard.up("Tab");
  await page.keyboard.press("Tab");
  //Ctr V
  await page.keyboard.press("Control+V");

  await page.waitForTimeout(5000);
});
