import {test, expect} from '../fixture/testFixture.js';
import { TablePage } from '../../src/pages/TablePage.js';
import Logger from '../../src/utils/logger.js';


//Test Case to verify Reset Button Visibility and Behavior
test('TC6: Verify Reset Button Visibility and Behavior', async ({page}) => {
    // Navigate to the application
  /*   await page.goto('https://practicetestautomation.com/practice-test-table/'); // Replace with actual URL
    await page.getByRole('radio', {name: 'Python'}).click();
    await expect(page.getByRole('button', {name: 'Reset filters'})).toBeVisible();
    await page.getByRole('button', {name: 'Reset filters'}).click();
    await expect(page.getByRole('radio', {name: 'Any'})).toBeChecked();
    await expect(page.getByRole('checkbox', {name: 'Beginner'})).toBeChecked();
    await expect(page.getByRole('checkbox', {name: 'Intermediate'})).toBeChecked();
    await expect(page.getByRole('checkbox', {name: 'Advanced'})).toBeChecked();
    //await expect(page.getByRole('option', {name: 'Min Enrollment'})).toHaveText('Any');
    await expect(page.getByRole('button', { name: 'Any' })).toBeVisible();
    await expect(page.getByRole('button', {name: 'Reset filters'})).toBeHidden(); */

    const tablePage = new TablePage(page);

    await tablePage.navigate();
    await tablePage.PythonRadio();
    await expect(page.getByRole('button', {name: 'Reset filters'})).toBeVisible();
    await tablePage.ResetButton();
    await expect(page.getByRole('radio', {name: 'Any'})).toBeChecked();
    await expect(page.getByRole('checkbox', {name: 'Beginner'})).toBeChecked();
    await expect(page.getByRole('checkbox', {name: 'Intermediate'})).toBeChecked();
    await expect(page.getByRole('checkbox', {name: 'Advanced'})).toBeChecked();
    await expect(page.getByRole('button', { name: 'Any' })).toBeVisible();
    await expect(page.getByRole('button', {name: 'Reset filters'})).toBeHidden();


});
   