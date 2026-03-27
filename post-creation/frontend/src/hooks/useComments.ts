import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';
import type { Comment } from '../types/type';

const fetchComments = async (postId: string | null) => {
  const { data } = await api.get<Comment[]>(`/comments/${postId}`);
  return data;
};

export const useComments = (postId: string | null) => {
  return useQuery({
    queryKey: ['comments', postId],
    queryFn: () => fetchComments(postId),
    enabled: !!postId,
  });
};
