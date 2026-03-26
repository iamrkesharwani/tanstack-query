import { MongoClient } from 'mongodb';
import { faker } from '@faker-js/faker';
import 'dotenv/config';
import type { Post } from '../types/types.js';

const url = process.env.MONGODB_URI!;
const dbName = 'react';

const seed = async () => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log('Connected for seeding...');
    const db = client.db(dbName);
    const collection = db.collection<Post>('posts');

    await collection.deleteMany({});
    console.log('Cleared existing posts');

    const fakePosts: Post[] = Array.from({ length: 250 }).map(() => ({
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraphs(2),
      author: faker.person.fullName(),
      createdAt: faker.date.recent(),
    }));

    await collection.insertMany(fakePosts);
    console.log(`Successfully seeded ${fakePosts.length} posts!`);
  } catch (error) {
    console.error('Seeding failed:', error);
  } finally {
    await client.close();
    process.exit();
  }
};

seed()