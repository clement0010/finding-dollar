import * as express from 'express';
import * as cors from 'cors';

import {
  FirebaseRequest,
  functions,
  checkSchedulingEligibility,
  log,
  selectSchedule,
  getSchedule,
  disableSchedule,
  parseSchedule,
  parseBreakoutRoom,
  parseTimestamp,
} from './common';
import { sendSlackMessage } from './slack';
import { validateFirebaseIdToken } from './express/middleware';

const app = express();

app.use(cors({ origin: true }));
app.use(validateFirebaseIdToken);

app.post('/', async (request: FirebaseRequest, response) => {
  try {
    log('info', 'Incoming select schedule request', { structuredData: true, ...request.body });

    const { id, role } = request.body;
    const uid = request.user?.uid;

    const availability = await getSchedule(role);

    const eligibility = await checkSchedulingEligibility(uid as string);
    if (!eligibility || !availability[id]) {
      await sendSlackMessage(
        `[User Action - ${uid}]`,
        `*${uid}* has *failed* to select a schedule.
        
        Timeslot Id: *${id}*
        Role: *${role}*`,
      );
      response.send(
        JSON.stringify({
          message: 'Not eligible',
        }),
      );
      return;
    }
    availability[id] = false;
    await disableSchedule(role, availability);
    const schedule = parseSchedule(id, role);
    const breakoutRoom = parseBreakoutRoom(id, role);
    await selectSchedule(uid as string, schedule, breakoutRoom);

    await sendSlackMessage(
      `[User Action - ${uid}]`,
      `${uid} has *successfully* selected a timeslot.

      Time: *${parseTimestamp(Number(schedule))}*.
      Role: *${role}*
      Breakout Room: *Room ${breakoutRoom}*`,
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
        message: 'Failed to select schedule',
        error,
      }),
    );
  }
});

export const scheduleSelection = functions.https.onRequest(app);
