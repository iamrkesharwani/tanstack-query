import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { connectDB } from './config/db.js';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const startServer = async () => {
  try {
    await connectDB();
    app.get('/health', (_, res) => {
      res.json({
        status: 'OK',
        message: 'Server is running and DB is connected',
      });
    });

    app.use('/api/posts', postRoutes);
    app.use('/api/comments', commentRoutes);

    app.listen(PORT, () => {
      console.log(`Server is flying on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();
