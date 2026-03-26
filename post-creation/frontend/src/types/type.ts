export interface Post {
  _id: string;
  title: string;
  body: string;
  author: string;
  createdAt: string;
}

export interface PaginatedPosts {
  posts: Post[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}
