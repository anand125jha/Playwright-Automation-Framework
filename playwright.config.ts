import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "https://www.saucedemo.com/",
    headless: true,
    viewport: null,
    actionTimeout: 10 * 1000,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "setup",
      testMatch: "**/auth.setup.ts"
    },
    {
      name: "chromium_standard_user",
      use: { ...devices["Desktop Chrome"], storageState: "playwright/.auth/standarduser.json" },
      dependencies: ["setup"],
      testMatch: "**/usersWorkFlow/*.spec.ts"
    },
    {
      name: "general_tests", // npx palywright test --project=general_tests
      use: { ...devices["Desktop Chrome"] },
      testMatch: "**/*/switchWindow.spec.ts"
    }
  ]
});
