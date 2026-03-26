import { Router } from 'express';
import { getDb } from '../config/db.js';
import type { Post, PaginatedPosts } from '../types/types.js';
import type { Request, Response } from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const db = getDb();
    const collection = db.collection<Post>('posts');

    const [posts, totalCount] = await Promise.all([
      collection
        .find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .toArray(),
      collection.countDocuments(),
    ]);

    const response: PaginatedPosts = {
      posts,
      totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, body, author } = req.body;
    if (!title || !body || !author) {
      return res.status(400).json({
        message: 'Validation failed: Title, body, author are required.',
      });
    }

    const db = getDb();
    const collection = db.collection<Post>('posts');

    const newPost: Post = {
      title,
      body,
      author,
      createdAt: new Date(),
    };

    const result = await collection.insertOne(newPost);
    res.status(200).json({
      ...newPost,
      _id: result.insertedId,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error });
  }
});

export default router;
