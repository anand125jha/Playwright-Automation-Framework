import { test } from "../src/fixtures/testFixture";

test.describe("Verify switch to new window", () => {
  test.beforeEach("Home page", async ({ automationPracticePage }) => {
    await automationPracticePage.goToPracticePage();
  });
  test("Switch to new window", async ({ automationPracticePage }) => {});
});
