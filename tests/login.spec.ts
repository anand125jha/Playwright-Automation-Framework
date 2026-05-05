import { test } from "../src/fixtures/testFixture";

test.describe("Verify login scenario", () => {
  test.beforeEach("Go to Login page", async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.assertLoginPageIsLoaded();
  });

  test("Should login successfully with valid credentials", async ({
    loginPage,
  }) => {
    await loginPage.login("abcd", "efgh");
  });
});
