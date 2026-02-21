import { BASE_URL } from 'api/constants.ts';
import type { Passenger } from 'features/passengers/types.ts';

export async function fetchPassengers(): Promise<Passenger[]> {
  const response = await fetch(`${BASE_URL}/users`);

  if (!response.ok) {
    throw new Error('Failed to fetch passengers');
  }

  return response.json();
}
