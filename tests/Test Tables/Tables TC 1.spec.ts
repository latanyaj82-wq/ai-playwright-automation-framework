import {test, expect} from '../fixture/testFixture.js';
import {TablePage} from '../../src/pages/TablePage.js';
import Logger from '../../src/utils/logger.js';

// Test case to verify Language Filter -> Java
test('TC1: Verify Language Filter -> Java', async ({page}) => {
    const tablePage = new TablePage(page);

    await tablePage.navigate();
    await tablePage.JavaRadio();
    const visibleLanguages = await tablePage.getVisibleLanguages();
    for (const language of visibleLanguages) {
        expect(language).toBe('Java');
    }

    Logger.info('Languages:', visibleLanguages);
    
    // Navigate to the application
   // await page.goto('https://practicetestautomation.com/practice-test-table/'); // Replace with actual URL
   // await page.getByRole('radio', {name: 'Java'}).click();

   // const visibleRows = page.locator('#courses_table tbody tr:visible');
    //const languages: string[] = [];

    /* for (let i = 0; i < await visibleRows.count(); i++) {
      const languageCell = visibleRows.nth(i).locator('td[data-col="language"]');
      await expect(languageCell).toHaveText('Java');
      languages.push(await languageCell.innerText());
    }
    console.log('Languages:', languages);
 */


});