import { sendSlackMessage } from '../slack';
import { admin, db } from './client';
import { log } from './config';
import { Teams } from './types';

export const populateTeamDatabase = async (teams: Teams): Promise<void> => {
  try {
    log('info', 'Save team details to db', { teams });
    teams.forEach(async (team) => {
      const { uid, email } = team;
      await admin.auth().createUser({
        uid,
        email,
        password: 'test1234',
      });
      await db.collection('teams').doc(uid).set(team);
    });

    await sendSlackMessage(`I have saved these team ${JSON.stringify(teams)}`);
    log('info', 'Successfully save team details to db');
  } catch (error) {
    log('error', 'Error saving user details to db');
    throw error;
  }
};
