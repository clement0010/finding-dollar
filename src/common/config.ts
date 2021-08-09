export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'https://asia-southeast2-finding-dollar-dev.cloudfunctions.net/'
    : 'https://asia-southeast2-finding-dollar.cloudfunctions.net/';

export const SELECTION_ENDPOINT = '/selectCharacter';
export const SCHEDULING_ENDPOINT = '/selectSchedule';
