/**
 * Import Playwright's test runner and assertion library.
 * The 'test' function is used to define test cases, and 'expect' is used for making assertions about the state of the application.
*/
import {test, expect} from '@playwright/test';
import {LoginPage} from '../../src/pages/LoginPage';
import { testData } from '../../src/utils/testData';
import { verifyNotVisbile, verifyVisble } from '../../src/utils/helpers';


//Test case for verifying the login functionality of the application.
test('Login TC 1', async ({page}) => {
    const loginPage = new LoginPage(page);

  // Navigate to the login page of the application.
await loginPage.navigate();
    // Assert that the page title is correct.
await expect(page.getByRole('heading', { name: 'Test login' })).toBeVisible();
    // input username and password into the respective fields.
await loginPage.login(testData.validUsername, testData.validPassword);
//Verify new page contains correct URL
await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
//Verify new page contains expected text 'Congratulations' and 'successfully logged in'
await
await expect(page.getByText('Congratulations')).toBeVisible();
//Verify Log Out button is visible on the new page
await verifyVisble( page.getByRole('link', { name: 'Log out' }));
});