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
    