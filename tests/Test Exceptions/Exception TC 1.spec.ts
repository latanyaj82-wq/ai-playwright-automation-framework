import {test, expect} from '@playwright/test';
import {ExceptionPage} from '../../src/pages/ExceptionPage';


//Verify NoSuchElementException 
test('Exception TC 1', async ({page}) => {
    const exceptionPage = new ExceptionPage(page);
    // Navigate to the login page of the application.
    await exceptionPage.navigate();


    
    // Click Add button to add a new element to the page
    await exceptionPage.clickAddButton();
    await exceptionPage.waitForRow2();
    await exceptionPage.isRow2Visible;

});
