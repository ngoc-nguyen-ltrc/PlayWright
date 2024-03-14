const { test, expect } = require("@playwright/test");
const exp = require("constants");

test.skip("Single File", async ({ page }) => {
  await page.goto("https://www.foundit.in/");
  await page.waitForSelector("");
  await page.locator("").click;

  await page.locator("").setInputFiles("tests/uploadFiles/testfile1.pdf");
  await page.goto("");
});

test("Multiple Files", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

  await page.waitForSelector("#filesToUpload");
  // await page.locator("#filesToUpload").click();

  await page
    .locator("#filesToUpload")
    .setInputFiles([
      "tests/uploadFiles/testfile1.pdf",
      "tests/uploadFiles/testfile2.pdf",
    ]);

  await page.waitForTimeout(3000);

  expect(
    await page.locator("//li[normalize-space()='testfile2.pdf']")
  ).toHaveText("testfile2.pdf");

  expect(
    await page.locator("//li[normalize-space()='testfile1.pdf']")
  ).toHaveText("testfile1.pdf");

  await page.waitForTimeout(3000);

  //Remove files
  await page.locator("#filesToUpload").setInputFiles([]);
  await page.waitForTimeout(3000);

  expect(
    await page.locator("//li[normalize-space()='No Files Selected']")
  ).toHaveText("No Files Selected");
});
