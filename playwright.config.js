// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Directory where test files are stored
  timeout: 90000, // Maximum test duration
  use: {
    browserName: 'chromium', // Default browser
    headless: true, // Run tests in headless mode
    screenshot: 'only-on-failure', // Capture screenshots on failure
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]], // Generate HTML reports
});
