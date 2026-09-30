import { test, expect } from '../../../fixtures/testFixtures';

test('user can add product to cart', async ({ page, productsPage, cartPage }) => {
  await page.goto('/inventory.html');
  await productsPage.addProductToCart('Sauce Labs Backpack');
  await cartPage.open();
  await expect(page).toHaveURL(/cart/);
  await cartPage.expectProductVisible('Sauce Labs Backpack');
});




