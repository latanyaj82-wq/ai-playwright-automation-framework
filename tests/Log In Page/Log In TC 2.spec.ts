import {test, expect} from '@playwright/test';
import {LoginPage} from '../../src/pages/LoginPage';
import { testData} from '../../src/utils/testData';

//Test case for verifying the login functionality of the application.

//Test case to verify negative username test
test('Login TC 2', async ({page}) => {
        const loginPage = new LoginPage(page);

  // Navigate to the login page of the application.
await loginPage.navigate();
    // Assert that the page title is correct.
await expect(page.getByRole('heading', { name: 'Test login' })).toBeVisible();
    // input invalid username and valid password into the respective fields.
    await loginPage.login(
    testData.invalidUsername,
    testData.validPassword
);
//Verify error message is visible on the page
await loginPage.getErrorMessage().then(errorMessage => {
  expect(errorMessage).toBe('Your username is invalid!');
});

});