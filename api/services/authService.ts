 import { ApiClient } from '../client/apiClient';
import { AuthRequest, AuthResponse } from '../types/booking.types';
export class AuthService {
  constructor(private client: ApiClient) {}

  async getToken(credentials: AuthRequest): Promise<string> {
    const response = await this.client.post('/auth', credentials);

    if (response.status() !== 200) {
      throw new Error(
        `Auth failed: expected 200, got ${response.status()}`
      );
    }

    const body: AuthResponse = await response.json();

    if (!body.token) {
      throw new Error('Auth failed: no token in response');
    }

    return body.token;
  }
}