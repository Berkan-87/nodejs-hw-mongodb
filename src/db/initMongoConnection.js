import mongoose from 'mongoose';
import { env } from '../utils/env.js';

export async function initMongoConnection() {
  try {
    const uri = env('MONGODB_URI');

    await mongoose.connect(uri);

    console.log('✅ Mongo connection successfully established!');
  } catch (e) {
    console.log('❌ Error while setting up mongo connection', e);
    throw e;
  }
}
