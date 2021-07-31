import { functions, log, populateTeamDatabase, teams } from './common';
import { sendSlackMessage } from './slack';

export const populateTeams = functions.https.onRequest(async (request, response) => {
  try {
    log('info', 'Incoming populate team database request', { structuredData: true });

    await populateTeamDatabase(teams);
    response.send('Completed populate team database');
  } catch (error) {
    log('error', 'Error message', { error });
    await sendSlackMessage('testing');
    response.status(500).send('Failed to populate team database');
  }
});
