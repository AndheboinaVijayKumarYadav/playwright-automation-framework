import { test as setup, expect } from '../fixtures/testFixtures';

setup('authenticate', async ({ page, loginPage }) => {
  await page.goto('/');

  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);

  await page.context().storageState({
    path: 'playwright/.auth/user.json',
  });
});