import { Router, type Request, type Response } from 'express';
import { ObjectId } from 'mongodb';
import { getDb } from '../config/db.js';
import type { Comment } from '../types/types.js';

const router = Router();

router.get('/:postId', async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;
    const db = getDb();
    const comments = await db
      .collection<Comment>('comments')
      .find({ postId: new ObjectId(postId as string) })
      .sort({ createdAt: -1 })
      .toArray();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comments' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { postId, body, author } = req.body;
    const db = getDb();
    const newComment: Comment = {
      postId: new ObjectId(postId),
      body,
      author: author || 'Anonymous',
      createdAt: new Date(),
    };
    const result = await db.collection<Comment>('comments').insertOne(newComment);
    res.status(201).json({ ...newComment, _id: result.insertedId });
  } catch (error) {
    res.status(500).json({ message: 'Error adding comment' });
  }
});

export default router;
