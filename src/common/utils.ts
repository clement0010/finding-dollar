import { quota } from '@/composable/store';
import { CharacterType } from './firestore/type';

const THOUSANDS_SEPARATORS = /\B(?=(\d{3})+(?!\d))/g;

export const formatThousandSeparator = (amount: string): string => {
  return amount.toString().replace(THOUSANDS_SEPARATORS, ',');
};

export const findQuotaRemaining = (role: CharacterType): number => {
  const result =
    quota.value.find((character) => {
      return character.id === role;
    })?.remaining || 0;
  return result;
};
