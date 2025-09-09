import mongoose from 'mongoose';
import { env } from '../utils/env.js'; // Eğer kendi env fonksiyonunu kullanmak istiyorsan

export async function initMongoConnection() {
  try {
    const user = env('MONGODB_USER');
    const pwd = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const db = env('MONGODB_DB');
    const cluster = env('MONGODB_CLUSTER_NAME');

    const uri = `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=${cluster}`;

    console.log('Connecting to URI:', uri);

    await mongoose.connect(uri);
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.error('Error while setting up mongo connection:', e);
    throw e;
  }
}
