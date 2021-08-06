import { IncomingWebhook } from '@slack/webhook';

import { log, parseSlackMessage, SLACK_WEBHOOK_URL } from '../common';

// Read a url from the environment variables
const url = SLACK_WEBHOOK_URL;

// Initialize
const webhook = new IncomingWebhook(url, {});

export const sendSlackMessage = async (title: string, message: string): Promise<void> => {
  try {
    log('info', 'Sending message to slack', { title, message });
    await webhook.send(parseSlackMessage(title, message));
  } catch (error) {
    log('error', 'Error sending message to slack', { error });
  }
};
