import { test, expect } from '../../../fixtures/testFixtures';
import { bookingData } from '../../../test-data/bookingData';

test('should create a booking with authentication', async ({
  authService,
  bookingService,
}) => {
  const authRequest = {
    username: 'admin',
    password: 'password123',
  };

  const token = await authService.getToken(authRequest);
  const createBookingResponse = await bookingService.createBooking(
    bookingData,
    token,
  );

  expect(createBookingResponse.bookingid).toBeTruthy();

  expect(createBookingResponse.booking.firstname).toBe(bookingData.firstname);

  expect(createBookingResponse.booking.lastname).toBe(bookingData.lastname);

  expect(createBookingResponse.booking.totalprice).toBe(bookingData.totalprice);
});
