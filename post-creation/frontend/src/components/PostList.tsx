import { useState } from 'react';
import { usePosts } from '../hooks/usePosts.js';

const PostList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isPlaceholderData } = usePosts(page);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-40 text-green-600 font-medium">
        Loading posts...
      </div>
    );

  if (isError)
    return (
      <div className="flex items-center justify-center h-40 text-red-500 font-medium">
        Error fetching data!
      </div>
    );

  return (
    <div style={{ opacity: isPlaceholderData ? 0.5 : 1 }}>
      <h2 className="text-2xl font-bold text-green-800 mb-6">Recent Posts</h2>

      <div className="space-y-4">
        {data?.posts.map((post) => (
          <div
            key={post._id}
            className="border border-green-200 rounded-xl p-5 bg-white hover:shadow-md hover:border-green-400 transition-all duration-200"
          >
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              {post.body.substring(0, 100)}...
            </p>
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
              By: {post.author}
            </span>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-green-100 text-green-800 hover:bg-green-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          ← Previous
        </button>

        <span className="text-sm text-gray-500">
          Page <span className="font-semibold text-green-700">{page}</span> of{' '}
          <span className="font-semibold text-green-700">
            {data?.totalPages}
          </span>
        </span>

        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={page === data?.totalPages || isPlaceholderData}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default PostList;
