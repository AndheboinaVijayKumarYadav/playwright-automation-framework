import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { ApiClient } from '../api/client/apiClient';
import { BookingService } from '../api/services/bookingServices';
import { apiBaseURL } from '../config/apiConfig';
import { AuthService } from '../api/services/authService';

export const test = base.extend<{
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;

  apiClient: ApiClient;
  bookingService: BookingService;
  authService: AuthService;
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

  // API fixtures
  apiClient: async ({ request }, use) => {
    const client = new ApiClient(request, apiBaseURL());
    await use(client);
  },

  bookingService: async ({ apiClient }, use) => {
    const bookingService = new BookingService(apiClient);
    await use(bookingService);
  },
  authService: async ({ apiClient }, use) => {
    const authService = new AuthService(apiClient);
    await use(authService);
  },
});

export { expect };
