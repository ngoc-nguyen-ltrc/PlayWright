const { expect, test } = require("@playwright/test");

test("Handle Inner Frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  const frame3 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });
  //await frame3.locator("input[name='mytext3']").fill("Welcome");
  const childFrames = await frame3.childFrames();

  //Example: https://codecanyon.net/category/plugins/prestashop

  //Why childFrames[0]??
  //other solution: //label[.//span[contains(text(), 'Hi, I am the UI.Vision IDE')]]
  //span[contains(text(),'Hi, I am the UI.Vision IDE')]
  ////*[@id='i5']/div[3]/div

  await childFrames[0]
    .locator("//span[contains(text(),'Hi, I am the UI.Vision IDE')]")
    .click();
  //await childFrames[1].locator("");
  await page.waitForTimeout(5000);
});
