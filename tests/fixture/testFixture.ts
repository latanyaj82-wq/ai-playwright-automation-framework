import { test as base } from '@playwright/test';
import logger from '../../src/utils/logger.js';

export const test = base.extend({
  page: async ({ page }, use, testInfo) => {

    logger.info(`========================================`);
    logger.info(`Starting Test: ${testInfo.title}`);
    logger.info(`Project: ${testInfo.project.name}`);

    await use(page);

    logger.info(`Finished Test: ${testInfo.title}`);
  logger.info(`Result: ${testInfo.status?.toUpperCase()}`);

if (testInfo.status !== 'passed') {
  logger.error(`Test did not pass.`);
}
    logger.info(`Duration: ${testInfo.duration} ms`);
    logger.info(`========================================`);
  },
});

export { expect } from '@playwright/test';