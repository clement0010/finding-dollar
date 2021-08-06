export type LogType = 'info' | 'error' | 'warn';

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
