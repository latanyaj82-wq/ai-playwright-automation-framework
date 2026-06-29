import { test as base } from '@playwright/test';
import logger from '../../src/utils/logger.js';
import path from 'path';

// Extend Playwright's built-in test fixture so every test
// automatically includes logging and evidence collection.
export const test = base.extend({
  page: async ({ page }, use, testInfo) => {

    // Log the start of the test execution.
    logger.info(`========================================`);
    logger.info(`Starting Test: ${testInfo.title}`);
    logger.info(`Project: ${testInfo.project.name}`);

    // Execute the actual Playwright test.
    await use(page);

    // -------------------------------------------------------
    // DEBUG ONLY
    // Display every attachment Playwright created.
    // We'll remove this after video is working.
    // -------------------------------------------------------
    //console.log('Attachments:', testInfo.attachments);

    // If the test did not pass, capture evidence.
    if (testInfo.status !== 'passed') {

      // Create a readable screenshot filename.
      // Example: Login_TC_3_chromium.png
      const fileName =
        `${testInfo.title.replace(/\s+/g, '_')}_${testInfo.project.name}.png`;

      // Save screenshot in screenshots folder.
      const screenshotPath = path.join('screenshots', fileName);

      // Capture a full-page screenshot.
      await page.screenshot({
        path: screenshotPath,
        fullPage: true,
      });

      // Attach the screenshot to the test results.
// The Allure reporter will automatically include
// this attachment in the report.
await testInfo.attach('Failure Screenshot', {
  path: screenshotPath,
  contentType: 'image/png',
});

      logger.error(`Screenshot saved: ${screenshotPath}`);

      /* // -------------------------------------------------------
      // Attempt to attach Playwright's recorded video.
      // -------------------------------------------------------

      // Find the video attachment that Playwright created.
      const videoAttachment = testInfo.attachments.find(
        attachment => attachment.contentType === 'video/webm'
      );

      // If a video exists, attach it to Allure.
      if (videoAttachment?.path) {

        await allure.attachmentPath(
          'Failure Video',
          videoAttachment.path,
          {
            contentType: 'video/webm',
          }
        );

        logger.info(`Video attached: ${videoAttachment.path}`);
      } else {

        // Helpful debug message if no video was found.
        logger.warn('No video attachment found.');

      } */

      logger.error(`Test did not pass.`);
    }

    // Log test completion.
    logger.info(`Finished Test: ${testInfo.title}`);

    // Log final test status.
    logger.info(`Result: ${testInfo.status?.toUpperCase()}`);

    // Log execution time.
    logger.info(`Duration: ${testInfo.duration} ms`);

    logger.info(`========================================`);
  },
});

// Re-export Playwright's expect so tests can import
// both test and expect from this custom fixture.
export { expect } from '@playwright/test';