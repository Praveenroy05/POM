import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  private products: Locator;
  private addToCartSuccessMessage: Locator;
  private viewPageProductName: Locator;

  constructor(page: Page) {
    super(page);
    this.products = page.locator('div.card-body');
    this.addToCartSuccessMessage = page.locator('#toast-container');
    this.viewPageProductName = page.locator('div h2');
  }

  async searchProductAndAddToCart(productName: string): Promise<void> {
    await this.products.first().waitFor();
    const countOfProducts = await this.products.count();
    for (let i = 0; i < countOfProducts; i++) {
      const productText = await this.products.nth(i).locator('b').textContent();
      if (productText?.trim() === productName) {
        await this.products.nth(i).locator('button .fa-shopping-cart').click();
        break;
      }
    }
  }

  async getAddToCartSuccessMessage(): Promise<string> {
    return (await this.addToCartSuccessMessage.textContent())!;
  }
}
