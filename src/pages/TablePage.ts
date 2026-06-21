import {Page, Locator} from '@playwright/test';
import { BASE_URL } from '../utils/env';

export class TablePage {
    readonly page: Page;
    readonly javaRadio: Locator;
    readonly anyRadio: Locator;
    readonly pythonRadio: Locator;
    readonly intermediateCheckbox: Locator;
    readonly advancedCheckbox: Locator;
    readonly beginnerCheckbox: Locator;
    readonly visibleRows: Locator;
    readonly enrollDropdown: Locator;
    readonly enrollOption10000: Locator;
    readonly sortbyFilter: Locator;
    readonly restButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.javaRadio = page.getByRole('radio', { name: 'Java' });
        this.anyRadio = page.getByRole('radio', { name: 'Any' });
        this.pythonRadio = page.getByRole('radio', { name: 'Python' });
        this.intermediateCheckbox = page.getByRole('checkbox', { name: 'Intermediate' });
        this.advancedCheckbox = page.getByRole('checkbox', { name: 'Advanced' });
        this.beginnerCheckbox = page.getByRole('checkbox', { name: 'Beginner' });
        this.visibleRows = page.locator('#courses_table tbody tr:visible');
        this.enrollDropdown = page.locator('#enrollDropdown');
        this.enrollOption10000 = page.getByRole('option', { name: '10,000+' });
        this.sortbyFilter = page.getByRole('combobox', { name: 'Sort by:' })
        this.restButton = page.locator('#resetFilters');
    }


    //----- Navigation Methods -----//
    async navigate() {
        //await this.page.goto('https://practicetestautomation.com/practice-test-table/');
    await this.page.goto(
        `${BASE_URL}/practice-test-table/`
     );
    }

    //----- Filter Methods -----//
    async JavaRadio() {
        await this.javaRadio.click();
    }
    async AnyRadio() {
        await this.anyRadio.click();
    }
    async PythonRadio() {
        await this.pythonRadio.click();
    }
    async IntermediateCheckbox() {
        await this.intermediateCheckbox.click();
    }
    async AdvancedCheckBox() {
        await this.advancedCheckbox.click();
    }
    async BeginnerCheckbox(){
        await this.beginnerCheckbox.click();
    }
    async selectVisibleEnrollments() {
       await this.enrollDropdown.click();
    }
      async selectEnrollOption10000() {
        await this.enrollOption10000.click();
    }
    async SortBytFilterEnrollment(){
        await this.sortbyFilter.selectOption({ label: 'Enrollments' });
    }
    async SortBytFilterCourseName(){
        await this.sortbyFilter.selectOption({label: 'Course Name'})
    }

    //Buttons//
    async ResetButton(){
        await this.restButton.click();
    }

    //--- Data Retrieval Methods//
    async getVisibleLanguages() {
        const languages: string[] = [];
        for (let i = 0; i < await this.visibleRows.count(); i++) {
            const languageCell = this.visibleRows.nth(i).locator('td[data-col="language"]');
            languages.push(await languageCell.innerText());
        }
        return languages;
    }
    async getVisibleLevels() {
        const levels: string[] = [];
        for (let i = 0; i < await this.visibleRows.count(); i++) {
            const levelCell = this.visibleRows.nth(i).locator('td[data-col="level"]');
            levels.push(await levelCell.innerText());
        }
        return levels;
    }
   async getVisibleEnrollments(){
        const enrollments: number[] = [];
        for (let i = 0; i < await this.visibleRows.count(); i++) {
            const enrollmentsCell = this.visibleRows.nth(i).locator('td[data-col="enrollments"]');
            enrollments.push(Number(await enrollmentsCell.innerText()));
        }
        return enrollments;
    }
    async getVisibleCourseName() {
        const courseNames: string[] = [];
        for (let i = 0; i < await this.visibleRows.count(); i++) {
            const courseNameCell = this.visibleRows.nth(i).locator('td[data-col="course"]');
            courseNames.push(await courseNameCell.innerText());
        }
        return courseNames;
    }
}
