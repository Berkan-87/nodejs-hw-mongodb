import mongoose from 'mongoose';

<<<<<<< HEAD
import { env } from '../utils/env.js';

export async function initMongoConnection() {
  try {
    const user = env('MONGODB_USER');
    const pwd = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const db = env('MONGODB_DB');
    const cluster = env('MONGODB_CLUSTER_NAME');

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=${cluster}`,
    );
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
}
=======
const initMongoConnection = async () => {
  const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_URL,
    MONGODB_DB,
  } = process.env;

  const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority&appName=Cluster0`;

  console.log('MONGODB_USER:', MONGODB_USER);
  console.log('MONGODB_PASSWORD:', MONGODB_PASSWORD);
  console.log('MONGODB_URL:', MONGODB_URL);
  console.log('MONGODB_DB:', MONGODB_DB);
  console.log('Connecting to URI:', uri);

  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default initMongoConnection;
>>>>>>> be58fe9c217bd25423b7ee3178f64d671e181bf6
