const { test, expect } = require("@playwright/test");

test("Hidden Options Dropdown", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.locator("[name='username']").fill("Admin");
  await page.locator("[name='password']").fill("admin123");
  await page.locator("[type='submit']").click();

  await page.waitForTimeout(5000);

  //click on PIM
  await page
    .locator(
      "//a[contains(@href,'viewPimModule') and @class='oxd-main-menu-item']"
    )
    .click();

  await page.waitForTimeout(5000);

  //click on dropdown
  await page
    .locator(
      "//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]"
    )
    .click();

  //Get all options in Dropdown
  const options = await page.$$("//div[@role='listbox']//span");

  //For loop

  for (let option of options) {
    const jobTitle = await option.textContent();
    console.log("Job title is ", jobTitle);
    if (jobTitle.includes("QA Engineer")) {
      await option.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});
