import { Request } from 'express';
import { auth } from 'firebase-admin';

export type LogType = 'info' | 'error' | 'warn';

export type Roles = 'designer' | 'founder' | 'software' | 'management' | 'NA';

export interface Team {
  uid: string;
  email: string;
  name: string;
}

export type Teams = Team[];

type Category = 'Income' | 'Expense';

interface Breakdown {
  name: string;
  value: number;
  category: Category;
}
export interface Character {
  id: string;
  name: string;
  biography: string;
  breakdown: Breakdown[];
  scenario: string;
  photoUrl: string;
}

export type Characters = Character[];

export interface TeamScore {
  name: string;
  score: number;
}

export type Leaderboard = TeamScore[];

export interface FirebaseRequest extends Request {
  user?: auth.DecodedIdToken;
}

export enum CharacterType {
  Designer = 'designer',
  Founder = 'founder',
  Software = 'software',
  Management = 'management',
  NA = 'NA',
}

export interface Quota {
  id: Roles;
  remaining: number;
  timeslot: boolean[];
}

export type Quotas = Quota[];
