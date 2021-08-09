import { IncomingWebhookSendArguments } from '@slack/webhook';
import * as dayjs from 'dayjs';

import { Schedule } from './config';
import { CharacterType, Roles } from './types';

export const parseSlackMessage = (title: string, message: string): IncomingWebhookSendArguments => {
  return {
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: title,
          emoji: true,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: message,
        },
      },
    ],
  };
};

export const parseSchedule = (slot: number, role?: Roles): string => {
  if (slot === 0) return Schedule.First;
  if (slot === 1) return Schedule.Second;
  return role === 'founder' ? Schedule.First : Schedule.Second;
};

export const parseBreakoutRoom = (slot: number, role: Roles): number => {
  switch (role) {
    case CharacterType.Founder:
      return slot === 2 ? 5 : 1;
    case CharacterType.Management:
      return 2;
    case CharacterType.Software:
      return slot === 2 ? 5 : 3;
    case CharacterType.Designer:
      return 4;
  }
  return 0;
};

export const parseTimestamp = (timestamp: number): string => {
  return dayjs.unix(timestamp).format('HH:mm:ss');
};
