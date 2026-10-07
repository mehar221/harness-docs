import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['junit', { outputFile: 'test-results/e2e-junit-results.xml' }],
  ],
  use: {
    baseURL: process.env.BASE_URL || undefined,
    trace: 'on-first-retry',
  },
});
