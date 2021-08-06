import { teamProfile } from '@/composable/store';
import { UpdateData } from '../type';
import { Character, Team } from './type';
import { db } from './utils';

export const getTeamProfileFromDb = async (uid: string): Promise<Team | undefined> => {
  const snapshot = await db.teams.doc(uid);
  await snapshot.onSnapshot((doc) => {
    console.log('Live Data Called');
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
