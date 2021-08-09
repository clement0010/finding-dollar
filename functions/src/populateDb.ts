import * as express from 'express';
import * as cors from 'cors';

import {
  adminUser,
  characters,
  functions,
  initialLeaderboard,
  log,
  populateAdminDatabase,
  populateCharacterDatabase,
  populateLeaderboardDatabase,
  populateTeamDatabase,
  quota,
  teams,
} from './common';
import { apiValidation } from './express/middleware';

const app = express();

app.use(cors({ origin: true }));
app.use(apiValidation);

app.post('/', async (request, response) => {
  try {
    log('info', 'Incoming populate team database request', { structuredData: true });

    await populateTeamDatabase(teams);
    await populateCharacterDatabase(characters, quota);
    await populateAdminDatabase(adminUser);
    await populateLeaderboardDatabase(initialLeaderboard);
    response.send(
      JSON.stringify({
        message: 'Completed populate team database',
      }),
    );
  } catch (error) {
    log('error', 'Error message', { error });
    response.status(500).send(
      JSON.stringify({
        message: 'Failed to populate team database',
        error,
      }),
    );
  }
});

export const populateTeams = functions.https.onRequest(app);
