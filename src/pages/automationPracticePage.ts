import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class AutomationPracticePage extends BasePage {
  private readonly radio1;
  private readonly radioLabels;
  constructor(page: Page) {
    super(page);
    this.radioLabels = page.locator("#radio-btn-example label");
    this.radio1 = page.locator('input[value="radio1"]');
  }
  async goToPracticePage() {
    await this.page.goto("https://rahulshettyacademy.com/AutomationPractice/#");
  }
  async selectRadio1() {
    await this.radio1.check();
  }

  async assertRadio1Checked() {
    await expect(this.radio1).toBeChecked();
  }

  async validateRadioLabels(expectedText: string[]) {
    for (let i = 0; i < expectedText.length; i++) {
      await expect(this.radioLabels.nth(i)).toHaveText(expectedText[i]);
    }
  }
}
