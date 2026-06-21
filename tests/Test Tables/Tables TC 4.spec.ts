import {test, expect} from '@playwright/test';
import { TablePage } from '../../src/pages/TablePage';
import { Logger } from '../../src/utils/loggers';

// Test Case to verify Combined Filters ->Language: Python, Unselect Level: Intermediate and Advanced, Min Enrollment: 10,000+

test('TC4: Verify Combined Filters ->Language: Python, Unselect Level: Intermediate and Advanced, Min Enrollment: 10,000+', async ({page}) => {
    // Navigate to the application

    const tablePage = new TablePage(page);

    await tablePage.navigate()
    await tablePage.PythonRadio();
    await tablePage.IntermediateCheckbox();
    await tablePage.AdvancedCheckBox();
    await tablePage.enrollDropdown.click();
    await tablePage.selectEnrollOption10000();

for (const enrollment of await tablePage.getVisibleEnrollments()) {
        expect(enrollment).toBeGreaterThanOrEqual(10000);
        {
                        
                Logger.info('Enrollment', enrollment);

        }
}
for (const languages of await tablePage.getVisibleLanguages()) {
    expect(languages).toBe('Python')
    {
              Logger.info('Languages', languages);

    }

}
for (const levels of await tablePage.getVisibleLevels()){
    expect(levels).toBe('Beginner')
    {
                    console.log(levels);

    }
}
    






   /*  await page.goto('https://practicetestautomation.com/practice-test-table/'); // Replace with actual URL
    await page.getByRole('radio', {name: 'Python'}).click();
    await page.getByRole('checkbox', {name: 'Intermediate'}).click();
    await page.getByRole('checkbox', {name: 'Advanced'}).click();
    await page.locator('#enrollDropdown').click();
    await page.getByRole('option', { name: '10,000+' }).click();

    const visibleRows = page.locator('#courses_table tbody tr:visible');
    const languages: string[] = [];
    const levels: string[] = [];
    const enrollments: number[] = [];

    for (let i = 0; i < await visibleRows.count(); i++) {
        const languageCell = visibleRows.nth(i).locator('td[data-col="language"]');
        await expect(languageCell).toHaveText('Python');
        languages.push(await languageCell.innerText());

        const levelCell = visibleRows.nth(i).locator('td[data-col="level"]');
        await expect(levelCell).toHaveText('Beginner');
        levels.push(await levelCell.innerText());

        const enrollmentCell = visibleRows.nth(i).locator('td[data-col="enrollments"]');
        const enrollment = Number(await enrollmentCell.innerText());
        expect(enrollment).toBeGreaterThanOrEqual(10000);
        enrollments.push(enrollment);
    }
    console.log('Languages:', languages);
    console.log('Levels:', levels);
    console.log('Enrollments:', enrollments); */


});