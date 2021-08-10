import * as express from 'express';
import * as cors from 'cors';

import {
  decreaseCharacterQuota,
  FirebaseRequest,
  functions,
  checkSelectionEligibility,
  log,
  selectCharacter,
} from './common';
import { sendSlackMessage } from './slack';
import { validateFirebaseIdToken } from './express/middleware';

const app = express();

app.use(cors({ origin: true }));
app.use(validateFirebaseIdToken);

app.post('/', async (request: FirebaseRequest, response) => {
  try {
    log('info', 'Incoming select character request', { structuredData: true, ...request.body });

    const { role } = request.body;
    const uid = request.user?.uid;

    const eligibility = await checkSelectionEligibility(uid as string, role);

    if (!eligibility) {
      await sendSlackMessage(
        '[User Action]',
        `${uid} has *failed* to select a character - ${role}.`,
      );
      response.send(
        JSON.stringify({
          message: 'Not eligible',
        }),
      );
      return;
    }

    await decreaseCharacterQuota(role);
    await selectCharacter(uid as string, role);

    await sendSlackMessage(
      '[User Action]',
      `${uid} has *successfully* selected a character - ${role}.`,
    );
    response.send(
      JSON.stringify({
        message: 'Completed character selection process',
      }),
    );
  } catch (error) {
    log('error', 'Error message', { error });
    response.status(500).send(
      JSON.stringify({
        message: 'Failed to select character',
        error,
      }),
    );
  }
});

export const characterSelection = functions.https.onRequest(app);
