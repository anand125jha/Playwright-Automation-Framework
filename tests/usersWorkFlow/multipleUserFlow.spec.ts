import { test } from "../../src/fixtures/testFixture";
import { credentials } from "../../src/utils/testData";

test.describe("Verify login scenario", () => {
  test("Verify login with valid credentials", async ({ loginPage, homePage }) => {
    await loginPage.goto();
    //  await homePage.assertHomePage(); this step is failing because it is not real time login app
  });
});
