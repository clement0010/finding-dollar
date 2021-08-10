export type CharacterType = 'designer' | 'founder' | 'software' | 'management' | 'NA';

export interface Team {
  uid: string;
  email: string;
  name: string;
  character: CharacterType;
  schedule: string;
  selectCharacter: boolean;
}

export type Teams = Team[];

type Category = 'Income' | 'Expense';

export interface Breakdown {
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

export interface Quota {
  id: CharacterType;
  remaining: number;
  timeslot: boolean[];
}

export type Quotas = Quota[];

export interface TeamScore {
  name: string;
  score: number;
}

export type Leaderboard = TeamScore[];

export interface Timeslot {
  id: number;
  timeslot: string;
  availability: boolean;
}

export type Schedule = Timeslot[];

export interface SchedulePayload {
  id: number;
  role: CharacterType;
}

export interface GlobalState {
  viewCharacter: boolean;
  viewTemplate: boolean;
}

export type FinanceCategory = 'Needs' | 'Wants' | 'Savings';
export interface FinanceTableData {
  category: FinanceCategory;
  name: string;
  value: number;
}
