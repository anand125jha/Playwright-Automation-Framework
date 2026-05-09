import { Locator, Page } from "@playwright/test";

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path = "/") {
    await this.page.goto(path);
  }

  protected async isVisible(locator: Locator) {
    return locator.isVisible();
  }

  protected async isEnabled(locator: Locator) {
    return locator.isEnabled();
  }

  protected async click(locator: Locator) {
    await locator.click();
  }

  protected async fill(locator: Locator, value: string) {
    await locator.fill(value);
  }

  protected async selectOption(locator: Locator, option: string | string[]) {
    await locator.selectOption(option);
  }

  protected async hover(locator: Locator) {
    await locator.hover();
  }

  protected async waitForElement(
    locator: Locator,
    state: "visible" | "hidden" | "attached" | "detached" = "visible"
  ) {
    await locator.waitFor({ state });
  }

  protected async getText(locator: Locator) {
    return locator.textContent();
  }

  protected async getValue(locator: Locator) {
    return locator.inputValue();
  }
}
