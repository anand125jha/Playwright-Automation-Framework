import test from "@playwright/test";

test.describe("Verify purchase workflow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("as", () => {
    console.log("asdf");
  });
});
