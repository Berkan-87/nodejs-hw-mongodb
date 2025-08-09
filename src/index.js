import dotenv from 'dotenv';
dotenv.config();

import initMongoConnection from './db/initMongoConnection.js';
import startServer from './server.js';

const bootstrap = async () => {
  try {
    await initMongoConnection();
    startServer();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

bootstrap();
