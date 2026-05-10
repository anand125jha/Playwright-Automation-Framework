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

  test("Verify suggestion and press enter", async ({ automationPracticePage }) => {
    await automationPracticePage.selectCountryFromSuggestion("India");
  });

  test("Verify dropdown value and select", async ({ automationPracticePage }) => {
    await automationPracticePage.assertDropDownMenuAndSelect(
      ["Select", "Option1", "Option2", "Option3"],
      "Option3"
    );
  });
});
