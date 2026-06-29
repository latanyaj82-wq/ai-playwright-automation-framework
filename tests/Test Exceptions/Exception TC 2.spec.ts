import {test, expect} from '../fixture/testFixture.js';
import {ExceptionPage} from '../../src/pages/ExceptionPage.js';

// test exception handling ElementNotInteractableException
test('Exception TC 2', async ({page}) => {
    const exceptionPage = new ExceptionPage(page);
    // Navigate to the login page of the application.
    await exceptionPage.navigate();
    await exceptionPage.clickAddButton();
    await exceptionPage.waitForRow2();
    await exceptionPage.isRow2Visible;
    await exceptionPage.fillRow2Input('Test Input');
    await exceptionPage.clickSaveButton();
    await expect(page.locator('#confirmation')).toHaveText('Row 2 was saved');
});




/* test('Exception TC 2', async ({page}) => {
    // Navigate to the login page of the application.
    await page.goto('https://practicetestautomation.com/practice-test-exceptions/');
    // Click Add button to add a new element to the page
    await page.click('#add_btn');
    await page.locator('#row2').waitFor();
    await expect(page.locator('#row2')).toBeVisible();
    await page.fill('#row2 input', 'Test Input');
    await page.click('#save_btn button');
    await expect(page.locator('#confirmation')).toHaveText('Row 2 was saved');
}); */