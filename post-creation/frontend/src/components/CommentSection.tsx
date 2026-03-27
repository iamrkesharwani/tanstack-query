import { useState } from 'react';
import { useComments } from '../hooks/useComments.js';
import { useAddComment } from '../hooks/useAddComment.js';

interface Props {
  postId: string;
}

const CommentSection = ({ postId }: Props) => {
  const [text, setText] = useState('');
  const { data: comments, isLoading } = useComments(postId);
  const { mutate, isPending } = useAddComment();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    mutate(
      { postId, body: text, author: 'Rahul' },
      { onSuccess: () => setText('') }
    );
  };

  return (
    <div className="mt-3 pt-3 border-t border-green-100">
      <h4 className="text-xs font-semibold text-green-700 mb-2">Comments</h4>

      <div className="space-y-2 max-h-28 overflow-y-auto mb-3 pr-1">
        {isLoading ? (
          <p className="text-xs text-gray-400 italic">Loading comments...</p>
        ) : comments?.length === 0 ? (
          <p className="text-xs text-gray-400 italic">No comments yet.</p>
        ) : (
          comments?.map((c) => (
            <div key={c._id} className="flex gap-2 items-start">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs uppercase shrink-0">
                {c.author?.[0] ?? 'A'}
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-700">
                  {c.author}{' '}
                </span>
                <span className="text-xs text-gray-500">{c.body}</span>
              </div>
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
          disabled={isPending}
          className="flex-1 text-xs border border-green-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent placeholder-gray-400 disabled:opacity-50 transition"
        />
        <button
          type="submit"
          disabled={isPending || !text.trim()}
          className="text-xs font-semibold bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          {isPending ? '...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
