import { Page, expect } from '@playwright/test';

export class ProductsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addProductToCart(productName: string) {
    const product = this.page
      .getByTestId('inventory-item')
      .filter({ hasText: productName });
    const addButton = product.getByRole('button', {
      name: 'Add to cart',
    });
    await addButton.click();
  }
}
