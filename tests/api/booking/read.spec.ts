import { Booking } from './../../../api/types/booking.types';
import { test, expect } from '../../../fixtures/testFixtures';
import { bookingData } from '../../../test-data/bookingData';

test('should get all booking IDs', async ({ bookingService }) => {
  const bookingIds = await bookingService.getAllBookingIds();

  expect(Array.isArray(bookingIds)).toBeTruthy();
});

test('should get a specific booking by ID', async ({ bookingService }) => {
  const booking = await bookingService.getBookingById(1);
  expect(booking.firstname).toBeTruthy();
  expect(booking.lastname).toBeTruthy();
});

test('should get a specific booking by ID that not exists', async ({
  bookingService,
}) => {
  const response = await bookingService.getBookingResponse(9999);

  expect(response.status()).toBe(404);
});

// // Test data for creating a booking
// const bookingData = {
//   firstname: 'John',
//   lastname: 'Doe',
//   totalprice: 150,
//   depositpaid: true,
//   bookingdates: {
//     checkin: '2024-01-01',
//     checkout: '2024-01-10',
//   },
// };

test('should create a new booking', async ({ bookingService }) => {
  const bookingResponse = await bookingService.createBooking(bookingData);
  expect(typeof bookingResponse.bookingid).toBe('number');

  // verify booking details
  expect(bookingResponse.booking.firstname).toBe(bookingData.firstname);
  expect(bookingResponse.booking.lastname).toBe(bookingData.lastname);
  expect(bookingResponse.booking.totalprice).toBe(bookingData.totalprice);
});

// // Test for creating a booking, then retrieving it by ID and verifying the details

// const bookingData2 = {
//   firstname: 'Alice',
//   lastname: 'Smith',
//   totalprice: 200,
//   depositpaid: false,
//   bookingdates: {
//     checkin: '2025-02-01',
//     checkout: '2025-02-15',
//   },
// };

test('should create a booking and retrieve it by ID', async ({
  bookingService,
}) => {
  // Create a new booking

  const bookingResponse = await bookingService.createBooking(bookingData);
  const bookingId = bookingResponse.bookingid;

  expect(bookingResponse.bookingid).toBeDefined();

  // Retrieve the booking by ID
  const getResponse = await bookingService.getBookingById(bookingId);
  expect(getResponse.firstname).toBe(bookingData.firstname);
  expect(getResponse.lastname).toBe(bookingData.lastname);
  expect(getResponse.totalprice).toBe(bookingData.totalprice);
});
