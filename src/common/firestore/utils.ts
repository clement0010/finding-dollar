import firebase from 'firebase/app';

import { firestore } from './client';
import { Character, Team } from './type';

// eslint-disable-next-line
export const converter = <T>() => ({
  toFirestore: (data: T) => data,
  fromFirestore: (snap: firebase.firestore.QueryDocumentSnapshot) => snap.data() as T,
});

// eslint-disable-next-line
export const dataPoint = <T>(collectionPath: string) =>
  firestore.collection(collectionPath).withConverter(converter<T>());

export const db = {
  // list your collections here
  teams: dataPoint<Team>('teams'),
  characters: dataPoint<Character>('characters'),
};
