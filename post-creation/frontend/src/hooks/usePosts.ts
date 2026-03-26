import { useQuery } from '@tanstack/react-query';
import api from '../api/axios.js';
import type { PaginatedPosts } from '../types/type.js';

const fetchPosts = async (page: number): Promise<PaginatedPosts> => {
  const { data } = await api.get<PaginatedPosts>(
    `/posts?page=${page}&limit=10`
  );
  return data;
};

export const usePosts = (page: number) => {
  return useQuery({
    queryKey: ['posts', page],
    queryFn: () => fetchPosts(page),
    placeholderData: (previousData) => previousData,
    staleTime: 1000 * 60,
  });
};
