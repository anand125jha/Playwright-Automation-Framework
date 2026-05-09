import { test } from "../src/fixtures/testFixture";
test.describe("Handle different weblement", () => {
  test.beforeEach("Home page", async ({ automationPracticePage }) => {
    await automationPracticePage.goToPracticePage();
  });

  test("Validate Radio button labels and selection", async ({ automationPracticePage }) => {
    await automationPracticePage.validateRadioLabels(["Radio1", "Radio2", "Radio3"]);
    await automationPracticePage.selectRadio1();
    await automationPracticePage.assertRadio1Checked();
  });
});
