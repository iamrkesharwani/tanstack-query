import React, { useState } from 'react';
import { useCreatePost } from '../hooks/useCreatePost.js';

interface Props {
  onClose: () => void;
}

const CreatePostForm = ({ onClose }: Props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { mutate, isPending, isError, isSuccess, error } = useCreatePost();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      { title, body, author: 'Rahul' },
      {
        onSuccess: () => {
          setTitle('');
          setBody('');
        },
      }
    );
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-bold text-green-900">Create New Post</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-green-800 mb-1">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isPending}
              className="w-full border border-green-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent disabled:opacity-50 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-800 mb-1">
              Content
            </label>
            <textarea
              placeholder="Write your post content..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              disabled={isPending}
              rows={4}
              className="w-full border border-green-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent disabled:opacity-50 resize-none transition"
            />
          </div>

          <button
            type="submit"
            disabled={isPending || !title || !body}
            className="w-full bg-green-600 text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {isPending ? 'Posting...' : 'Create Post'}
          </button>

          {isSuccess && (
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
              ✓ Post created and list updated!
            </p>
          )}

          {isError && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              ✕{' '}
              {(error as any).response?.data?.message || 'Something went wrong'}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreatePostForm;
