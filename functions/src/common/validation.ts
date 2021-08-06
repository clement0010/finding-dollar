import { log } from './config';

export const validateApiKey = (storedKey: string, incomingKey: string): boolean => {
  log('info', 'Checking api keys', { storedKey, incomingKey });
  return storedKey === incomingKey;
};
