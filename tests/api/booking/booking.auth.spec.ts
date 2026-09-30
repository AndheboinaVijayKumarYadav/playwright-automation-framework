import { test, expect } from '../../../fixtures/testFixtures';

test('should create a booking with authentication', async ({
  authService,
  bookingService,
}) => {
  const authRequest = {
    username: 'admin',
    password: 'password123',
  };

  const token = await authService.getToken(authRequest);

  const bookingData = {
    firstname: 'Jane',
    lastname: 'Doe',
    totalprice: 100,
    depositpaid: true,
    bookingdates: {
      checkin: '2024-01-01',
      checkout: '2024-01-10',
    },
  };

  const createBookingResponse =
    await bookingService.createBooking(bookingData, token);

  expect(createBookingResponse.bookingid).toBeTruthy();

  expect(createBookingResponse.booking.firstname)
    .toBe(bookingData.firstname);

  expect(createBookingResponse.booking.lastname)
    .toBe(bookingData.lastname);

  expect(createBookingResponse.booking.totalprice)
    .toBe(bookingData.totalprice);
});