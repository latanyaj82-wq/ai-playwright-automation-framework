import {test, expect} from '@playwright/test';
import {ExceptionPage} from '../../src/pages/ExceptionPage.js';
import { verifyVisble } from '../../src/utils/helpers.js';

//Test case to verify TimeoutException
test('Exception TC 5', async ({page}) => {
    const exceptionPage = new ExceptionPage(page);
    // Navigate to the login page of the application.
    await exceptionPage.navigate();
    await exceptionPage.clickAddButton();
    await exceptionPage.waitForRow2();
    await verifyVisble(exceptionPage.row2);
});