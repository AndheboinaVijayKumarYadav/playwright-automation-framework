 import {test as base, expect} from '@playwright/test';
 import { LoginPage } from '../pages/LoginPage';
 import { ProductsPage } from '../pages/ProductsPage';
 import { CartPage } from '../pages/CartPage';

export const test = base.extend<{
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});

export { expect };