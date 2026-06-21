import {Page, Locator} from '@playwright/test';
import { BASE_URL } from '../utils/env';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#submit');
    this.logoutButton = page.locator('a', { hasText: 'Log out' });
  }

  async navigate() {
      await this.page.goto(
        `${BASE_URL}//practice-test-login/`
      );
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

    async logout() {
    await this.logoutButton.click();
    }

    async getErrorMessage() {
    return await this.page.locator('#error').textContent();
  }

};
