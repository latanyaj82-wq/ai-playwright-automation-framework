import {test,expect} from '../fixture/testFixture.js';
import {LoginPage} from '../../src/pages/LoginPage.js';
import { testData } from '../../src/utils/testData.js';

//Test case to verify negative password test
test('Login TC 3', async ({page}) => {
  // Navigate to the login page of the application.
  const loginPage = new LoginPage(page);

await loginPage.navigate();
//enter correct username and incorrect password into the respective fields.
await loginPage.login(testData.validUsername, testData.invalidPassword);
//Verify error message is visible on the page
await expect(page.locator('#error')).toHaveText('Your password is invalid!');
});