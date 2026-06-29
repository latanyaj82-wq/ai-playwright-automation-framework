import {test, expect} from '../fixture/testFixture.js';
import {ExceptionPage} from '../../src/pages/ExceptionPage.js';

//Exception test case to verify InvalidElementStateException
test('Exception TC 3', async ({page}) => {
    const exceptionPage = new ExceptionPage(page);

    await exceptionPage.navigate();
    await exceptionPage.row1Input.fill('Test Input');
    await exceptionPage.clickSaveButton();
    await expect(page.locator('#confirmation')).toHaveText('Text was saved');

  /*   // Navigate to the login page of the application.
    await page.goto('https://practicetestautomation.com/practice-test-exceptions/');
    await page.locator('#text').clear();
    await page.fill('#text', 'Test Input');
    await page.click('#save_btn button');
    await expect(page.locator('#confirmation')).toHaveText('Text was saved'); */

});