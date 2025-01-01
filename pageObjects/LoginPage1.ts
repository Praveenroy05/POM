import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private errorMessage: Locator;
  private homePageIdentifier: Locator;

  constructor(page: Page) {
    super(page);
        this.usernameInput = page.getByPlaceholder('email@example.com')
        this.passwordInput = page.getByPlaceholder('enter your passsword')
        this.loginButton = page.locator("#login")
        this.homePageIdentifier = page.locator(".fa-sign-out")
        this.errorMessage = page.locator("#toast-container")
  }

  async login(username: string, password: string): Promise<void> {
    await this.fillInput(this.usernameInput, username);
    await this.fillInput(this.passwordInput, password);
    await this.clickElement(this.loginButton);
  }

  async getErrorMessage(): Promise<string> {
    return await this.errorMessage.textContent()??"";
  }

  async isHomePageVisible(): Promise<Locator> {
    await this.homePageIdentifier.waitFor()
    return this.homePageIdentifier;
  }
}
