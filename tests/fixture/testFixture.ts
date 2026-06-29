import { test as base } from '@playwright/test';
import logger from '../../src/utils/logger.js';
import path from 'path';
import * as allure from 'allure-js-commons';

// Extend Playwright's built-in test fixture so every test
// automatically includes logging and screenshot capture.
export const test = base.extend({
  page: async ({ page }, use, testInfo) => {

    // Log the start of the test execution.
    logger.info(`========================================`);
    logger.info(`Starting Test: ${testInfo.title}`);
    logger.info(`Project: ${testInfo.project.name}`);

    // Execute the actual Playwright test.
    await use(page);

    // If the test did not pass, capture a screenshot.
    if (testInfo.status !== 'passed') {
      // Create a readable screenshot filename.
      // Example: Login_TC_1_chromium.png
      const fileName =
        `${testInfo.title.replace(/\s+/g, '_')}_${testInfo.project.name}.png`;

      // Save the screenshot in the screenshots folder.
      const screenshotPath = path.join('screenshots', fileName);

      // Capture a full-page screenshot.
      await page.screenshot({
        path: screenshotPath,
        fullPage: true,
      });

      // Attach screenshot to the Allure report
      await allure.attachmentPath('Failure Screenshot', screenshotPath, {
        contentType: 'image/png',
      });

      // Log where the screenshot was saved.
      logger.error(`Screenshot saved: ${screenshotPath}`);
    }

    // Log the completion of the test.
    logger.info(`Finished Test: ${testInfo.title}`);

    // Log the final test result.
    logger.info(`Result: ${testInfo.status?.toUpperCase()}`);

    // Log an additional error message if the test failed.
    if (testInfo.status !== 'passed') {
      logger.error(`Test did not pass.`);
    }

    // Log how long the test took to execute.
    logger.info(`Duration: ${testInfo.duration} ms`);

    logger.info(`========================================`);
  },
});

// Re-export Playwright's expect so tests can import both
// test and expect from this custom fixture.
export { expect } from '@playwright/test';