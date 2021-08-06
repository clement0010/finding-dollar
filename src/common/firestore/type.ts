export interface Team {
  uid: string;
  email: string;
  name: string;
  character: 'designer' | 'NA';
  schedule: string;
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
