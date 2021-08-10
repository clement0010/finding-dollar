import { leaderboard, viewCharacter, viewTemplate } from '@/composable/store';

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
export const getGlobalState = async (): Promise<() => void> => {
  const collection = await db.global.doc('global');
  return collection.onSnapshot((doc) => {
    console.log('Global Data Called', { data: doc.data() });
    viewCharacter.value = doc.data()?.viewCharacter || false;
    viewTemplate.value = doc.data()?.viewTemplate || false;
  });
};
