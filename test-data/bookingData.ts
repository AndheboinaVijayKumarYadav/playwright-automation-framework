import { Booking } from '../api/types/booking.types';

export const bookingData: Booking = {
  firstname: 'Jane',
  lastname: 'Doe',
  totalprice: 100,
  depositpaid: true,
  bookingdates: {
    checkin: '2024-01-01',
    checkout: '2024-01-10',
  },
};