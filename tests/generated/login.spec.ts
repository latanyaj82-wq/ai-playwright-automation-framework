import { test, expect } from '@playwright/test';

test('Successful Login', async ({ page }) => {
    await page.goto('https://example.com/login');
    await page.fill('input[name="username"]', 'your_username');
    await page.fill('input[name="password"]', 'your_password');
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL('https://example.com/dashboard');
});