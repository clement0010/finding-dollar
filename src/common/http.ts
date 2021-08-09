import axios from 'axios';

import { BASE_URL, SELECTION_ENDPOINT } from './config';
import { CharacterType } from './firestore/type';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export const selectCharacterHttp = async (token: string, role: CharacterType): Promise<string> => {
  try {
    const response = await client.post(SELECTION_ENDPOINT, JSON.stringify({ role }), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data.message;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.status);
  }
};

export default client;
