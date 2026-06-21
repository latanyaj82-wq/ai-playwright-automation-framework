import {test, expect} from '@playwright/test';

test('test 1', async ({page}) => {
await page.goto('https://practicetestautomation.com/');
await expect(page).toHaveTitle('Practice Test Automation | Learn Selenium WebDriver');
await expect(page.getByText('Welcome to Practice Test Automation!')).toContainText('Welcome to Practice Test Automation!');
await page.getByRole('link', { name: 'Practice', exact: true }).click();
await expect(page.getByText('Simple login page where testers can execute positive and negative login test cases')).toBeVisible();


});
