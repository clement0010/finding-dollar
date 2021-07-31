import { IncomingWebhook } from '@slack/webhook';

import { SLACK_WEBHOOK_URL } from '../common';

// Read a url from the environment variables
const url = SLACK_WEBHOOK_URL;

// Initialize
const webhook = new IncomingWebhook(url);

export const sendSlackMessage = async (message: string): Promise<void> => {
  console.log({ url });
  await webhook.send({
    text: message,
  });
};
