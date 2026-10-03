import {test, expect} from '../../../fixtures/testFixtures';

test('should not find a booking with invalid ID', async ({ bookingService }) => {
     const response = await bookingService.getBookingResponse(9999);

     expect(response.status()).toBe(404);
});