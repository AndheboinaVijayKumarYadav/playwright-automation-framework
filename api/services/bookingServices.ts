import {APIResponse} from '@playwright/test';
import { ApiClient } from '../client/apiClient';
import {
  Booking,
  BookingId,
  CreateBookingResponse,
} from '../types/booking.types';

export class BookingService {
  constructor(private client: ApiClient) {}
  async getBookingResponse(id: number): Promise<APIResponse> {
    return await this.client.get(`/booking/${id}`);
  }

  async getBookingById(id: number,token?: string): Promise<Booking> {
    const response = await this.getBookingResponse(id);

    if (response.status() !== 200) {
      throw new Error(
        `Get booking failed: expected 200, got ${response.status()}`,
      );
    }

    return (await response.json()) as Booking;
  }

  async createBooking(bookingData: Booking, token?: string): Promise<CreateBookingResponse> {
    const response = await this.client.post('/booking', bookingData, token);

    if (response.status() !== 200) {
      throw new Error(
        `Create booking failed: expected 200, got ${response.status()}`,
      );
    }

    return (await response.json()) as CreateBookingResponse;
  }

  async getAllBookingIds(): Promise<BookingId[]> {
    const response = await this.client.get('/booking');

    if (response.status() !== 200) {
      throw new Error(
        `Get all booking IDs failed: expected 200, got ${response.status()}`,
      );
    }

    return (await response.json()) as BookingId[];
  }
}
