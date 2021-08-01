import * as short from 'short-uuid';

import { sendSlackMessage } from '../slack';
import { admin, db } from './client';
import { log } from './config';
import { Teams } from './types';

export const populateTeamDatabase = async (teams: Teams): Promise<void> => {
  try {
    log('info', 'Save team details to db', { teams });
    let message = '';
    for (const team of teams) {
      const { uid, email, name } = team;
      const password = short.generate();
      await admin.auth().createUser({
        uid,
        email,
        password,
      });
      message = `${message}\nTeam Name: *${name}*\nEmail: *${email}*\nPassword: *${password}*\n`;
      await db.collection('teams').doc(uid).set(team);
    }

    await sendSlackMessage('[Incoming Team Structure] :khayunhappy: \n', message);

    log('info', 'Successfully save team details to db');
  } catch (error) {
    log('error', 'Error saving team details to db');
    throw error;
  }
};
