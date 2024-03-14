const { test, expect } = require("@playwright/test");

test("Handle Frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  const allframes = await page.frames();
  console.log("Number of frames: ", allframes.length);

  //1. Using Name or URL
  //const var = await page.frame('name'); //if Name is present
  //   const frame1 = await page.frame({
  //     url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  //   });
  //   await frame1.fill("input[name='mytext1']", "Hello");

  //2. Using Frame Locator
  const inputbox = await page
    .frameLocator("frame[src='frame_1.html']")
    .locator("input[name='mytext1']");
  await inputbox.fill("Hello");
  await page.waitForTimeout(5000);
});
