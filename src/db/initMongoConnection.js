import mongoose from 'mongoose';
import { env } from '../utils/env.js';

export async function initMongoConnection() {
  try {
    // Önce tek satırlık URI var mı diye bakıyoruz
    const mongoUri = process.env.MONGODB_URI;

    if (mongoUri) {
      await mongoose.connect(mongoUri);
      console.log('Mongo connection successfully established with MONGODB_URI!');
      return;
    }

    // Eğer MONGODB_URI yoksa parçalı env değişkenlerini kullan
    const user = env('MONGODB_USER');
    const pwd = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const db = env('MONGODB_DB');
    const cluster = env('MONGODB_CLUSTER_NAME');

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=${cluster}`,
    );
    console.log('Mongo connection successfully established with parts!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
}
