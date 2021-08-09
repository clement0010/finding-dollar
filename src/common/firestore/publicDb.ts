import { leaderboard } from '@/composable/store';

import { Leaderboard } from './type';
import { db } from './utils';

export const getLeaderboardFromDb = async (): Promise<() => void> => {
  const collection = await db.leaderboard;
  return collection.onSnapshot((querySnapshot) => {
    const result: Leaderboard = [];
    querySnapshot.forEach((doc) => {
      result.push({
        ...doc.data(),
      });
    });
    leaderboard.value = result;
    console.log('Leaderboard Data Called', { data: leaderboard.value });
  });
};
