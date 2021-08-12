import { teamProfile, quota, adminTeams } from '@/composable/store';
import { UpdateData } from '../type';
import { Character, CharacterType, Quotas, Team } from './type';
import { db } from './utils';

export const getTeamProfileFromDb = async (uid: string): Promise<() => void> => {
  const snapshot = await db.teams.doc(uid);
  return snapshot.onSnapshot((doc) => {
    console.log('Live Data Called', { data: doc.data() });
    teamProfile.value = doc.data();
  });
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

export const getCharacterQuotaFromDb = async (): Promise<() => void> => {
  const collection = await db.quota;
  return collection.onSnapshot((querySnapshot) => {
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

export const getProfileFromDb = async (): Promise<() => void> => {
  const collection = await db.teams;
  return collection.onSnapshot((querySnapshot) => {
    const result: Team[] = [];
    querySnapshot.forEach((doc) => {
      result.push({
        ...doc.data(),
      });
    });
    adminTeams.value = result;
    console.log('Team Data Called', { data: adminTeams.value });
  });
};
