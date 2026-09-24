import { Page, expect } from '@playwright/test';

export class CartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.getByTestId('shopping-cart-link').click();
  }

  async expectProductVisible(productName: string) {
    const cartItem = this.page
      .locator('[data-test="inventory-item"]')
      .filter({ hasText: productName });
    await expect(cartItem).toBeVisible();
  }
}
