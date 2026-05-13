import { test as setup } from "../../src/fixtures/testFixture";
import { credentials } from "../../src/utils/testData";
const STANDARD_USER_AUTH = "playwright/.auth/standarduser.json";
setup("Authenticate standard user", async ({ page, loginPage, homePage }) => {
  await loginPage.goto();
  await loginPage.assertLoginPageIsLoaded();
  await loginPage.login(credentials.valid.username, credentials.valid.password);
  await homePage.assertHomePage();
  await page.context().storageState({ path: STANDARD_USER_AUTH });
});
