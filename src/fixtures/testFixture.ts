import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { AutomationPracticePage } from "../pages/automationPracticePage";

export const test = base.extend<{
  loginPage: LoginPage;
  homePage: HomePage;
  automationPracticePage: AutomationPracticePage;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  automationPracticePage: async ({ page }, use) => {
    await use(new AutomationPracticePage(page));
  }
});
