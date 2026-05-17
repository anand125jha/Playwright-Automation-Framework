import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class AutomationPracticePage extends BasePage {
  private readonly radio1: Locator;
  private readonly radioLabels: Locator;
  private readonly enterCountry: Locator;
  private readonly suggestion: Locator;
  private readonly dropdownMenu: Locator;
  private readonly dropdown: Locator;
  private readonly openWindow: Locator;
  private readonly entername: Locator;
  private readonly alert: Locator;
  constructor(page: Page) {
    super(page);
    this.radioLabels = page.locator("#radio-btn-example label");
    this.radio1 = page.locator('input[value="radio1"]');
    this.enterCountry = page.locator("#autocomplete");
    this.suggestion = page.locator(".ui-menu-item div");
    this.dropdownMenu = page.locator("#dropdown-class-example option");
    this.dropdown = page.locator("#dropdown-class-example");
    this.openWindow = page.locator("#openwindow");
    this.entername = page.locator("#name");
    this.alert = page.locator("#alertbtn");
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

  async selectCountryFromSuggestion(countryName: string) {
    await this.enterCountry.pressSequentially(countryName, { delay: 100 });
    await this.suggestion.first().waitFor({ state: "visible" });
    const count = await this.suggestion.count();
    for (let i = 0; i < count; i++) {
      const text = await this.suggestion.nth(i).textContent();
      if (text?.trim() === countryName) {
        await this.suggestion.nth(i).click();
        return;
      }
    }
    throw new Error(`Country suggestion not found:${countryName}`);
  }

  async assertDropDownMenuAndSelect(menu: string[], value: string) {
    const count = await this.dropdownMenu.count();
    for (let i = 0; i < count; i++) {
      await expect(this.dropdownMenu.nth(i)).toHaveText(menu[i]);
    }
    await this.dropdown.selectOption(value);
  }

  async openNewWindow() {
    // to do multiple async task together
    const [childPage, notUseFul] = await Promise.all([
      // here we get two promise , using only 1st -> childPage. We can remove notUseFul
      this.page.waitForEvent("popup"), // start listening for an new tab/window event. It returns a promise that will resolve when pop-up opens
      this.openWindow.click()
    ]);
    await childPage.waitForLoadState();
    return childPage;
  }

  async switchToParent() {
    await this.page.bringToFront();
    await expect(this.page).toHaveTitle("Practice Page");
  }

  async acceptAlert(name: string) {
    await this.fill(this.entername, name);
    this.page.once("dialog", async (dialog) => {
      await dialog.accept();
    });

    await this.click(this.alert);
  }
}
