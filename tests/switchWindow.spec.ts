import { expect } from "@playwright/test";
import { test } from "../src/fixtures/testFixture";

test.describe("Verify switch to new window", () => {
  test.beforeEach("Home page", async ({ automationPracticePage }) => {
    await automationPracticePage.goToPracticePage();
  });
  test("Switch to new window", async ({ automationPracticePage }) => {
    const childPage = await automationPracticePage.openNewWindow();
    await childPage.bringToFront();
    await expect(childPage).toHaveTitle("Foundations of Modern Higher Education | .Consulting");
    automationPracticePage.switchToParent();
  });

  test("Verify alert", async ({ automationPracticePage }) => {
    await automationPracticePage.acceptAlert("Anand");
  });
});
