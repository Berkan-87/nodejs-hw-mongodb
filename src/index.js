<<<<<<< HEAD
import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

async function bootstrap() {
  await initMongoConnection();
  setupServer();
}
=======
import dotenv from 'dotenv';
dotenv.config();

import initMongoConnection from './db/initMongoConnection.js';
import { setupServer } from './server.js';

const bootstrap = async () => {
  try {
    await initMongoConnection();
    setupServer();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
>>>>>>> be58fe9c217bd25423b7ee3178f64d671e181bf6

bootstrap();
