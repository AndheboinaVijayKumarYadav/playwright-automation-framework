import { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiClient {
  constructor(
    private request: APIRequestContext,
    private baseURL: string,
  ) {}

  async get(endpoint: string, token?: string): Promise<APIResponse> {
    return await this.request.get(`${this.baseURL}${endpoint}`, {
      headers: this.buildHeaders(token),
    });
  }
  async post(
    endpoint: string,
    body: unknown,
    token?: string,
  ): Promise<APIResponse> {
    return await this.request.post(`${this.baseURL}${endpoint}`, {
      headers: this.buildHeaders(token),
      data: body,
    });
  }

  private buildHeaders(token?: string): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return headers;
  }
}
