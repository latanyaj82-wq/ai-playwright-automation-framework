import {Page, Locator} from '@playwright/test'; 

export class ExceptionPage {
  readonly page: Page;
  readonly addButton: Locator;
  readonly row2: Locator;  
  readonly saveButton: Locator;
  readonly confirmationMessage: Locator;
  readonly row1Input: Locator;


  constructor(page: Page) {
    this.page = page;
    this.addButton = page.locator('#add_btn');
    this.row2 = page.locator('#row2');
    this.saveButton = page.locator('#row2 #save_btn');
    this.confirmationMessage = page.locator('#confirmation');
    this.row1Input = page.locator('#row1 text');
  }

  async navigate() {
    await this.page.goto('https://practicetestautomation.com/practice-test-exceptions/');
  }

  async clickAddButton() {
    await this.addButton.click();
  }

  async waitForRow2() {
    await this.row2.waitFor();
  }

  async isRow2Visible() {
    return await this.row2.isVisible();
  }

  async fillRow2Input(text: string) {
    await this.row2.locator('input').fill(text);
  }

  async clickSaveButton() {
    await this.saveButton.click();
  }

  async getConfirmationMessage() {
    return await this.confirmationMessage.textContent();
  }
async clearRow1Input() {
    await this.row1Input.clear();
}

}
