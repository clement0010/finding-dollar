import * as dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { quota } from '@/composable/store';
import { CharacterType, Schedule } from './firestore/type';

dayjs.extend(utc);

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

export const findTimeslotQuota = (role: CharacterType): boolean[] => {
  const result =
    quota.value.find((character) => {
      return character.id === role;
    })?.timeslot || [];
  return result;
};

export const parseTimeslot = (slot: number, role?: CharacterType): string => {
  if (slot === 0) return '12:50 p.m. - 1:10 p.m.';
  if (slot === 1) return '1:15 p.m. - 1:35 p.m.';
  return role === 'founder' ? '12:50 p.m. - 1:10 p.m.' : '1:15 p.m. - 1:35 p.m.';
};

export const parseSchedule = (data: boolean[], role: CharacterType): Schedule => {
  return data.map((value, index) => {
    if (index === 2) {
      return {
        id: index,
        timeslot: parseTimeslot(index, role),
        availability: value,
      };
    }
    return {
      id: index,
      timeslot: parseTimeslot(index),
      availability: value,
    };
  });
};

export const parseTimestamp = (timestamp: string, format: string): string => {
  return dayjs.unix(Number(timestamp)).utcOffset(8).format(format);
};
