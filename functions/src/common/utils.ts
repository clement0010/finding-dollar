import { IncomingWebhookSendArguments } from '@slack/webhook';

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
