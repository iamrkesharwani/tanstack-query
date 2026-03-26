import { ObjectId } from 'mongodb';

export interface Post {
  _id?: ObjectId;
  title: string;
  body: string;
  author: string;
  createdAt: Date;
}

export interface PaginatedPosts {
  posts: Post[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}
