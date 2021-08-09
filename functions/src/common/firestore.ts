import * as short from 'short-uuid';

import { sendSlackMessage } from '../slack';
import { admin, db } from './client';
import { log } from './config';
import { Characters, Leaderboard, Quotas, Roles, Team, Teams } from './types';

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
          selectCharacter: false,
          accessTemplate: false,
          breakoutRoom: 0,
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

export const populateCharacterDatabase = async (
  characters: Characters,
  quotas: Quotas,
): Promise<void> => {
  try {
    log('info', 'Save character details to db', { characters, quotas });
    for (const character of characters) {
      const { id } = character;

      await db.collection('characters').doc(id).set(character);
    }
    for (const quota of quotas) {
      const { id } = quota;

      await db.collection('quota').doc(id).set(quota);
    }

    log('info', 'Successfully save character details to db');
  } catch (error) {
    log('error', 'Error saving character details to db', { error });
    throw error;
  }
};

export const populateLeaderboardDatabase = async (leaderboard: Leaderboard): Promise<void> => {
  try {
    log('info', 'Initalizing leaderboard to db', { leaderboard });
    for (const team of leaderboard) {
      const { name } = team;

      await db.collection('leaderboard').doc(name).set(team);
    }

    log('info', 'Successfully save leaderboard to db');
  } catch (error) {
    log('error', 'Error saving leaderboard to db', { error });
    throw error;
  }
};

export const checkSelectionEligibility = async (teamId: string, role: Roles): Promise<boolean> => {
  try {
    log('info', 'Incoming query quota from db', { role, teamId });
    const snapshot = await db.collection('quota').doc(role).get();
    const snapshot1 = await db.collection('teams').doc(teamId).get();
    log('info', 'Successful query quota from db', { role, teamId });

    const quota = snapshot.data()?.remaining as number;
    const character = snapshot1.data()?.character as Roles;

    return quota > 0 && character === 'NA';
  } catch (error) {
    log('error', 'Error query quota from db', { error });
    throw error;
  }
};

export const checkSchedulingEligibility = async (teamId: string): Promise<boolean> => {
  try {
    log('info', 'Incoming query schedule from db', { teamId });
    const snapshot = await db.collection('teams').doc(teamId).get();
    log('info', 'Successful query schedule from db', { ...snapshot.data() });

    const schedule = snapshot.data()?.schedule as string;
    const character = snapshot.data()?.character as string;
    const selectCharacter = snapshot.data()?.selectCharacter as boolean;
    return schedule === 'NA' && character !== 'NA' && selectCharacter;
  } catch (error) {
    log('error', 'Error query schedule from db', { error });
    throw error;
  }
};

export const decreaseCharacterQuota = async (role: Roles): Promise<void> => {
  try {
    log('info', 'Incoming decrement quota to db', { role });
    await db
      .collection('quota')
      .doc(role)
      .update({
        remaining: admin.firestore.FieldValue.increment(-1),
      });
    log('info', 'Successfully decrement quota to db');
  } catch (error) {
    log('error', 'Error decrement quota to db', { error });
    throw error;
  }
};

export const selectCharacter = async (teamId: string, role: Roles): Promise<void> => {
  try {
    log('info', 'Incoming update team role to db', { role });
    await db.collection('teams').doc(teamId).update({
      character: role,
      selectCharacter: true,
    });
    log('info', 'Successfully update team role to db');
  } catch (error) {
    log('error', 'Error update team role to db', { error });
    throw error;
  }
};

export const getSchedule = async (role: Roles): Promise<boolean[]> => {
  try {
    log('info', 'Incoming get schedule from db', { role });
    const snapshot = await db.collection('quota').doc(role).get();
    log('info', 'Successfully get schedule from db', { ...snapshot.data() });

    return snapshot.data()?.timeslot;
  } catch (error) {
    log('error', 'Error get schedule from db', { error });
    throw error;
  }
};

export const disableSchedule = async (role: Roles, schedule: boolean[]): Promise<void> => {
  try {
    log('info', 'Incoming disable schedule in db', { role });
    await db.collection('quota').doc(role).update({
      timeslot: schedule,
    });
    log('info', 'Successfully disable schedule in  db');
  } catch (error) {
    log('error', 'Error disable schedule in  db', { error });
    throw error;
  }
};

export const selectSchedule = async (
  teamId: string,
  schedule: string,
  breakoutRoom: number,
): Promise<void> => {
  try {
    log('info', 'Incoming update team schedule to db', { teamId, schedule });
    await db.collection('teams').doc(teamId).update({
      schedule,
      breakoutRoom,
    });
    log('info', 'Successfully update team schedule to db');
  } catch (error) {
    log('error', 'Error update team schedule to db', { error });
    throw error;
  }
};
