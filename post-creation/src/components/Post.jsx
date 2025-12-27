import { Edit2, Trash2 } from 'lucide-react';

const Post = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-gray-900 flex-1">
          {post.title}
        </h3>
        <div className="flex items-center gap-2 ml-4">
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            #{post.id}
          </span>
          <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition active:scale-90">
            <Edit2 className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 
          rounded-lg transition active:scale-90">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">{post.body}</p>
    </article>
  );
};

export default Post;
