import { useState } from 'react';
import { usePosts } from '../hooks/usePosts.js';

const PostList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isPlaceholderData } = usePosts(page);

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center flex-1 gap-3">
        <div className="w-7 h-7 border-4 border-green-200 border-t-green-600 rounded-full animate-spin" />
        <p className="text-sm text-green-700 font-medium">Loading posts...</p>
      </div>
    );

  if (isError)
    return (
      <div className="flex items-center justify-center flex-1 text-red-500 text-sm font-medium">
        ⚠ Error fetching data. Please try again.
      </div>
    );

  return (
    <div
      className="flex flex-col flex-1 overflow-hidden"
      style={{ opacity: isPlaceholderData ? 0.5 : 1 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
        {data?.posts.map((post) => (
          <div
            key={post._id}
            className="group flex flex-col bg-white border border-green-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-200"
          >
            <div className="w-8 h-1 bg-green-500 rounded-full mb-3 group-hover:w-12 transition-all duration-300" />

            <h3 className="text-sm font-bold text-gray-900 mb-1.5 leading-snug line-clamp-2">
              {post.title}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed flex-1 line-clamp-3">
              {post.body.substring(0, 100)}...
            </p>

            <div className="mt-3 pt-3 border-t border-green-50 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs uppercase">
                {post.author?.[0] ?? 'A'}
              </div>
              <span className="text-xs text-gray-500 font-medium">
                {post.author}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-3 pt-4 shrink-0">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-1.5 rounded-xl text-xs font-semibold border border-green-200 text-green-700 hover:bg-green-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ← Prev
        </button>

        <span className="text-xs font-medium text-gray-500">
          Page <span className="text-green-700 font-bold">{page}</span> of{' '}
          <span className="text-green-700 font-bold">{data?.totalPages}</span>
        </span>

        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={page === data?.totalPages || isPlaceholderData}
          className="px-4 py-1.5 rounded-xl text-xs font-semibold bg-green-600 text-white hover:bg-green-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default PostList;
