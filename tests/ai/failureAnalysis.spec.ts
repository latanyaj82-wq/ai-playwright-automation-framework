import { test, expect } from '@playwright/test';
import { saveFailure } from '../utils/failureCapture.js';

test('Failed Login Analysis Demo', async ({ page }) => {
  await page.goto(
    'https://practicetestautomation.com/practice-test-login/'
  );

  await page.fill('#username', 'student');
  await page.fill('#password', 'wrongpassword');

  await page.click('#submit');

  try {
    await expect(
      page.locator('.logged-in')
    ).toBeVisible();

  } catch (error) {

    saveFailure(
      'Failed Login Analysis Demo',
      String(error)
    );

    throw error;
  }
});