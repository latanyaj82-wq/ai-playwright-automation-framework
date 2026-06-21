import {test, expect} from '@playwright/test';
import { TablePage } from '../../src/pages/TablePage';
import { Logger } from '../../src/utils/loggers';

// Test case to verify Language Filter -> Java
test('TC1: Verify Language Filter -> Java', async ({page}) => {
    const tablePage = new TablePage(page);

    await tablePage.navigate();
    await tablePage.enrollDropdown.click();
    await tablePage.selectEnrollOption10000();
    await tablePage.getVisibleEnrollments(); 
    for (const enrollment of await tablePage.getVisibleEnrollments()) {
        expect(enrollment).toBeGreaterThanOrEqual(10000);
        {
            Logger.info ('Enrollment', enrollment);
        }
    }
  

});
    
     // const visibleRows = page.locator('#courses_table tbody tr:visible');
   // const levels: string[] = [];


   // await page.goto('https://practicetestautomation.com/practice-test-table/'); // Replace with actual URL
   // await page.locator('#enrollDropdown').click();
    //await page.getByRole('option', { name: '10,000+' }).click();

   // const visibleRows = page.locator('#courses_table tbody tr:visible');
    //const enrollments: number[] = [];

    /* for (let i = 0; i < await visibleRows.count(); i++) {
        const enrollmentCell = visibleRows.nth(i).locator('td[data-col="enrollments"]');
        const enrollment = Number(await enrollmentCell.innerText());
        expect(enrollment).toBeGreaterThanOrEqual(10000);
        console.log(enrollment);

    }  */