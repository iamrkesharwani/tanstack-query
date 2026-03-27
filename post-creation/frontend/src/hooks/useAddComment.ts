import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../api/axios';
import type { Comment } from '../types/type';

const addComment = async (newComment: {
  postId: string;
  body: string;
  author: string;
}): Promise<Comment> => {
  const { data } = await api.post<Comment>('/comments', newComment);
  return data;
};

export const useAddComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addComment,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['comments', variables.postId],
      });
    },
    onError: (error: any) => {
      console.error(
        'Error in posting comment:',
        error.response?.data?.message || error.message
      );
    },
  });
};
