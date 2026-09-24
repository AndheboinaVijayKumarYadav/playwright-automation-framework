import { defineConfig, devices } from '@playwright/test';

import './config/environment';

export default defineConfig({
  testDir: './tests',

  timeout: 60_000,

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [['list'], ['html']],

  expect: {
    timeout: 10_000,
  },

  use: {
    baseURL: process.env.BASE_URL,

    testIdAttribute: 'data-test',

    headless: false,

    screenshot: 'only-on-failure',

    video: 'on-first-retry',

    trace: 'on-first-retry',

    actionTimeout: 15_000,

    navigationTimeout: 30_000,
  },

  projects: [
    {
      name: 'setup',

      testMatch: /auth\.setup\.ts/,
    },

    {
      name: 'authenticated',

      dependencies: ['setup'],

      testMatch: /authenticated\/.*\.spec\.ts/,

      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
    },
  ],
});
