import {test, expect} from '@playwright/test';
import { TablePage} from '../../src/pages/TablePage';
import { Logger } from '../../src/utils/loggers';

//Test case for verifying level filter -> Beginner
test('TC2: Verify Level Filter -> Beginner', async ({page}) => {
    // Navigate to the application
const tablePage = new TablePage(page);
    await tablePage.navigate();

    // Apply Intermediate and Advanced filters
    await tablePage.IntermediateCheckbox();
    await tablePage.AdvancedCheckBox();

    // Verify that only Beginner level courses are visible
   await tablePage.getVisibleLevels();  {
    for (const level of await tablePage.getVisibleLevels()) {
        expect(level).toBe('Beginner');
    }
    Logger.info('Level',await tablePage.getVisibleLevels());
    }  


   // await page.goto('https://practicetestautomation.com/practice-test-table/'); // Replace with actual URL
   // await page.getByRole('checkbox', {name: 'Intermediate'}).click();
    //await page.getByRole('checkbox', {name: 'Advanced'}).click();
    

    //const visibleRows = page.locator('#courses_table tbody tr:visible');
    /* const levels: string[] = [];

    for (let i = 0; i < await visibleRows.count(); i++) {
        const levelCell = visibleRows.nth(i).locator('td[data-col="level"]');
        await expect(levelCell).toHaveText('Beginner');
        levels.push(await levelCell.innerText());
    }
    console.log('Levels:', levels); */


});