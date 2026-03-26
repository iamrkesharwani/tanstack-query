import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../api/axios';
import type { Post } from '../types/type';

const createPost = async (newPost: {
  title: string;
  body: string;
  author: string;
}): Promise<Post> => {
  const { data } = await api.post<Post>('/posts', newPost);
  return data;
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: (error: any) => {
      console.error(
        'Mutation failed:',
        error.response?.data?.message || error.message
      );
    },
  });
};
