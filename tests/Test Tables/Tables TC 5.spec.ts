import {test, expect} from '../fixture/testFixture.js';
import { TablePage } from '../../src/pages/TablePage.js';
import Logger from '../../src/utils/logger.js';


//Test Case to verify No Results State
test('TC5: Verify No Results State', async ({page}) => {

    const tablePage = new TablePage(page);

    await tablePage.navigate();
    await tablePage.PythonRadio();
    await tablePage.beginnerCheckbox.click();
    await expect(page.locator('#noData')).toHaveText('No matching courses.');
    console.log(await page.locator('#noData').textContent());
});











   /*  // Navigate to the application
    await page.goto('https://practicetestautomation.com/practice-test-table/'); // Replace with actual URL
    await page.getByRole('radio', {name: 'Python'}).click();
    await page.getByRole('checkbox', {name: 'Beginner'}).click();

await expect(page.locator('#noData')).toHaveText('No matching courses.'); */

  