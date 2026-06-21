import {test, expect} from '@playwright/test';
import { TablePage } from '../../src/pages/TablePage';
import { Logger } from '../../src/utils/loggers';

//Test Case to verify Sorting by Enrollments (ascending, numeric)
test('TC7: Verify Sorting by Enrollments (ascending, numeric)', async ({page}) => {

    // Navigate to the application
    /* await page.goto('https://practicetestautomation.com/practice-test-table/'); // Replace with actual URL
await page.getByRole('combobox', { name: 'Sort by:' })
  .selectOption({ label: 'Enrollments' });

  const visibleRows = page.locator('#courses_table tbody tr:visible');
  const enrollments: number[] = [];

  for (let i = 0; i < await visibleRows.count(); i++) {
    const enrollmentCell = visibleRows.nth(i).locator('td[data-col="enrollments"]');
    const enrollment = Number(await enrollmentCell.innerText());
    enrollments.push(enrollment);
  }

  // Verify that the enrollments are sorted in ascending order
  for (let i = 1; i < enrollments.length; i++) {
    expect(enrollments[i]).toBeGreaterThanOrEqual(enrollments[i - 1]);
  }
  console.log('Enrollments:', enrollments);
 */

  const tablePage = new TablePage(page);

  await tablePage.navigate();
  await tablePage.SortBytFilterEnrollment();

  const enrollments = await tablePage.getVisibleEnrollments();
  //console.log('Enrollments:', enrollments);
  Logger.info('Enrollments:', enrollments);

  for (let i = 0; i < enrollments.length - 1; i++) {
    expect(enrollments[i]).toBeLessThanOrEqual(enrollments[i + 1]);
  }

});
