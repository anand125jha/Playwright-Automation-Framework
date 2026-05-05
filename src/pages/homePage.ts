import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
export class HomePage extends BasePage {
  readonly cartIcon: Locator;
  readonly products: Locator;
  readonly errorMsg: Locator;
  constructor(page: Page) {
    super(page);
    this.cartIcon = page.locator(".shopping_cart_container");
    this.products = page.locator(".title");
    this.errorMsg = page.getByText("Username and password do not match any user in this service");
  }

  async assertHomePage() {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.cartIcon).toBeVisible();
    await expect(this.products).toBeVisible();
  }

  async assertErroMsg() {
    await expect(this.errorMsg).toBeVisible();
  }
}
