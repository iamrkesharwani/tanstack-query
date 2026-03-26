import { MongoClient, Db } from 'mongodb';
import 'dotenv/config';

const url = process.env.MONGODB_URI!;
const dbName = 'react';

let db: Db;

export const connectDB = async (): Promise<void> => {
  try {
    const client = new MongoClient(url);
    await client.connect();
    console.log('MongoDB Connected Successfully!');
    db = client.db(dbName);
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1);
  }
};

export const getDb = (): Db => {
  if (!db) {
    throw new Error('Database not initialized. Call connectDB first.');
  }
  return db;
};
