import {test, expect} from '@playwright/test';
import {ExceptionPage} from '../../src/pages/ExceptionPage';

//Test case for verificatio of StaleElementReferenceException
test('Exception TC 4', async ({page}) => {
    const exceptionPage = new ExceptionPage(page);
    // Navigate to the login page of the application.
    await exceptionPage.navigate();
    await expect(page.getByText('Push “Add” button to add another row')).toBeVisible();
    await exceptionPage.clickAddButton();
    await expect(page.getByText('Push “Add” button to add another row')).not.toBeVisible();


});
