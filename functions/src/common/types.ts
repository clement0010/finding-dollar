export type LogType = 'info' | 'error' | 'warn';

export interface Team {
  uid: string;
  email: string;
  name: string;
}
export type Teams = Team[];
