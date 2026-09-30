import { test, expect } from '../../../fixtures/testFixtures';


test('user can login successfully', async ({ page, loginPage }) => {
  await page.goto('/');

  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
});