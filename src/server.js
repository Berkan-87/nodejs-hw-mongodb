import express from 'express';
import cors from 'cors';
<<<<<<< HEAD
import cookieParser from 'cookie-parser';

import { env } from './utils/env.js';
import contactsRouter from './routers/contacts.js';
import authRouter from './routers/auth.js';
import { logger } from './middlewares/logger.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

export function setupServer() {
  const app = express();
  app.use(express.json());
  app.use(logger);
  app.use(cors());
  app.use(cookieParser());

  app.use('/auth', authRouter);
  app.use('/contacts', contactsRouter);

  app.use(notFoundHandler);

  app.use(errorHandler);

  const PORT = Number(env('PORT', 3000));

=======
import pino from 'pino-http';
import contactsRouter from './controllers/contacts.js';

export function setupServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(pino());

  app.use('/contacts', contactsRouter);

  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  const PORT = process.env.PORT || 3000;
>>>>>>> be58fe9c217bd25423b7ee3178f64d671e181bf6
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
<<<<<<< HEAD


=======
>>>>>>> be58fe9c217bd25423b7ee3178f64d671e181bf6
