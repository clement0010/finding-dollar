import { teamProfile, quota } from '@/composable/store';
import { UpdateData } from '../type';
import { Character, CharacterType, Quotas, Team } from './type';
import { db } from './utils';

export const getTeamProfileFromDb = async (uid: string): Promise<Team | undefined> => {
  const snapshot = await db.teams.doc(uid);
  snapshot.onSnapshot((doc) => {
    console.log('Live Data Called', { data: doc.data() });
    teamProfile.value = doc.data();
  });
  return (await snapshot.get()).data();
};

export const updateTeamProfileFromDb = async (
  uid: string,
  newData: Record<string, unknown>,
): Promise<void> => {
  const user = await db.teams.doc(uid);
  const updates: UpdateData<Team> = {
    ...newData,
  };

  await user.update(updates);
};

export const getCharacterFromDb = async (character: string): Promise<Character | undefined> => {
  const document = await db.characters.doc(character).get();

  return document.data();
};

export const getCharacterQuotaFromDb = async (): Promise<void> => {
  const collection = await db.quota;
  collection.onSnapshot((querySnapshot) => {
    const result: Quotas = [];
    querySnapshot.forEach((doc) => {
      result.push({
        ...doc.data(),
        id: doc.id as CharacterType,
      });
    });
    quota.value = result;
    console.log('Quota Data Called', { data: quota.value });
  });
};
