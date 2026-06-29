import {test, expect} from '../fixture/testFixture.js';
import { TablePage } from '../../src/pages/TablePage.js';

//Test Case verifies Sort by Course Name (ascending, alphabetic)
test('TC8: Verify Sorting by Course Name (ascending, alphabetic)', async ({page}) => {
    // Navigate to the application
   /*  await page.goto('https://practicetestautomation.com/practice-test-table/'); // Replace with actual URL
await page.getByRole('combobox', { name: 'Sort by:' })
  .selectOption({ label: 'Course Name' });

const visibleRows = page.locator('#courses_table tbody tr:visible');
const courseNames: string[] = [];

for (let i = 0; i < await visibleRows.count(); i++) {
  const courseNameCell = visibleRows.nth(i).locator('td[data-col="course"]');
  const courseName = await courseNameCell.innerText();
  courseNames.push(courseName);

  for (let j = 0; j < i; j++) {
    expect(courseName.localeCompare(courseNames[j])).toBeGreaterThanOrEqual(0);
  }

}
console.log('Course Names:', courseNames); */

const tablePage = new TablePage(page);

await tablePage.navigate();
await tablePage.SortBytFilterCourseName();
const courseNames = await tablePage.getVisibleCourseName();

console.log('Course Names:', courseNames);
for (let i = 0; i < courseNames.length - 1; i++) {
   // Verify each course name is alphabetically before (or equal to) the next one.
expect(
  courseNames[i]!.localeCompare(courseNames[i + 1]!)
).toBeLessThanOrEqual(0);
}

});