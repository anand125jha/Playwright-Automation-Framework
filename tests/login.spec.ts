import { test } from "../src/fixtures/testFixture";
import { credentials } from "../src/utils/testData";

test.describe("Verify login scenario", () => {
  test.beforeEach("Go to Login page", async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.assertLoginPageIsLoaded();
  });

  test("Verify login with valid credentials", async ({ loginPage, homePage }) => {
    await loginPage.login(credentials.valid.username, credentials.valid.password);
    await homePage.assertHomePage();
  });

  test("Verify error msg when user login with invalid credentails", async ({
    loginPage,
    homePage
  }) => {
    await loginPage.login(credentials.invalid.username, credentials.invalid.password);
    await homePage.assertErroMsg();
  });
});
