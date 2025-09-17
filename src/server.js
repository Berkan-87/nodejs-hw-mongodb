import express from 'express';
import cors from 'cors';
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

  // GET / route'u tarayıcıdan açıldığında cevap verecek
  app.get('/', (req, res) => {
    res.json({
      status: 200,
      message: "API çalışıyor!"
    });
  });

  // Auth route’ları
  app.use('/api/auth', authRouter); // mevcut
  app.use('/', authRouter);         // eklenen, /register için çalışacak

  // Contacts route
  app.use('/api/contacts', contactsRouter);

  // 404 ve error handler
  app.use(notFoundHandler);
  app.use(errorHandler);

  const PORT = Number(env('PORT', 3000));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
