

export function apiBaseURL(): string {
  const apiBaseURL = process.env.API_BASE_URL;

  if (!apiBaseURL) {
    throw new Error('API_BASE_URL is not configured');
  }

  return apiBaseURL;
}