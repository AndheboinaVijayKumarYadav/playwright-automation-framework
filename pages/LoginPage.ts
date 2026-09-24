import { Locator, Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  private username: Locator;
  private password: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.username = this.page.getByTestId('username');
    this.password = this.page.getByTestId('password');
    this.loginButton = this.page.getByTestId('login-button');
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}