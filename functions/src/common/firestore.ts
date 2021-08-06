import * as short from 'short-uuid';

import { sendSlackMessage } from '../slack';
import { admin, db } from './client';
import { log } from './config';
import { Characters, Leaderboard, Team, Teams } from './types';

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
      await db
        .collection('teams')
        .doc(uid)
        .set({
          ...team,
          character: 'NA',
          schedule: 'NA',
        });
    }

    await sendSlackMessage('[Incoming Team Credentials] :khayunhappy: \n', message);

    log('info', 'Successfully save team details to db');
  } catch (error) {
    log('error', 'Error saving team details to db', { error });
    throw error;
  }
};

export const populateAdminDatabase = async (adminUser: Team): Promise<void> => {
  try {
    log('info', 'Save admin details to db', { adminUser });
    const { uid, email, name } = adminUser;
    const password = short.generate();
    await admin.auth().createUser({
      uid,
      email,
      password,
    });
    await db.collection('teams').doc(uid).set(adminUser);

    await sendSlackMessage(
      '[Incoming Admin Credentials] :jiarenhappy: \n',
      `Admin Name: *${name}*\nEmail: *${email}*\nPassword: *${password}*\n`,
    );

    log('info', 'Successfully save admin details to db');
  } catch (error) {
    log('error', 'Error saving admin details to db', { error });
    throw error;
  }
};

export const populateCharacterDatabase = async (characters: Characters): Promise<void> => {
  try {
    log('info', 'Save character details to db', { characters });
    for (const character of characters) {
      const { id } = character;

      await db.collection('characters').doc(id).set(character);
    }

    log('info', 'Successfully save character details to db');
  } catch (error) {
    log('error', 'Error saving character details to db', { error });
    throw error;
  }
};

export const populatePublicDatabase = async (leaderboard: Leaderboard): Promise<void> => {
  try {
    log('info', 'Initalizing leaderboard to db', { leaderboard });
    for (const team of leaderboard) {
      const { name } = team;

      await db.collection('public').doc(name).set(team);
    }

    log('info', 'Successfully save leaderboard to db');
  } catch (error) {
    log('error', 'Error saving leaderboard to db', { error });
    throw error;
  }
};
