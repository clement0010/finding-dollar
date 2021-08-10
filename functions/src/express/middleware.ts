import { Request, Response, NextFunction } from 'express';
import { config } from 'firebase-functions';

import { admin, FirebaseRequest, log, validateApiKey } from '../common';

export const apiValidation = (req: Request, res: Response, next: NextFunction): void => {
  // Grab the text parameter.
  log('info', 'Incoming validate api key request');
  const api = req.headers['x-api-key'] as string;
  const storedKey = config().admin.secret;
  if (!validateApiKey(storedKey, api)) {
    res.status(400).send({ error: 'Invalid api key' });
    return;
  }
  next();
};

export const validateFirebaseIdToken = async (
  req: FirebaseRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  log('info', 'Check if request is authorized with Firebase ID token');

  if (
    (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) &&
    !(req.cookies && req.cookies.__session)
  ) {
    log(
      'info',
      `No Firebase ID token was passed as a Bearer token in the Authorization header.,
      Make sure you authorize your request by providing the following HTTP header:
      Authorization: Bearer <Firebase ID Token>'
      or by passing a "__session" cookie.`,
    );
    res.status(403).send('Unauthorized');
    return;
  }

  let idToken;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    log('info', 'Found "Authorization" header');
    // Read the ID Token from the Authorization header.
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else if (req.cookies) {
    log('info', 'Found "__session" cookie');
    // Read the ID Token from cookie.
    idToken = req.cookies.__session;
  } else {
    // No cookie
    res.status(403).send('Unauthorized');
    return;
  }

  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    log('info', 'ID Token correctly decoded', { decodedIdToken });
    req.user = decodedIdToken;
    next();
    return;
  } catch (error) {
    log('error', 'Error while verifying Firebase ID token:', { error });
    res.status(403).send('Unauthorized');
    return;
  }
};
