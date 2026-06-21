import {test, expect} from '@playwright/test';
test('assertions practice', async ({page}) => {
await page.goto('https://demo.playwright.dev/todomvc');
await page.pause();
await expect(page).toHaveTitle(/TodoMVC/);
await expect(page.getByPlaceholder('What needs to be done?')).toBeVisible();
await page.getByPlaceholder('What needs to be done?').fill('Learn Assertions');
await page.keyboard.press('Enter');
await expect(page.getByText('Learn Assertions')).toBeVisible();
await expect(page.locator('.todo-list li')).toHaveCount(1);

});