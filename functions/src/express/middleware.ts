import { Request, Response, NextFunction } from 'express';
import { config } from 'firebase-functions';

import { log, validateApiKey } from '../common';

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
