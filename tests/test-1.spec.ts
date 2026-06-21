import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'Annotations' }).click();
  await page.getByRole('link', { name: 'Locators', exact: true }).click();
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.locator('html').click();
  await page.locator('html').click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Learn Playwright');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Learn VS Code');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
});