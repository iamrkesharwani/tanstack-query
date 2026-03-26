import { useState } from 'react';
import PostList from './components/PostList';
import CreatePostForm from './components/CreatePostForm';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-green-100 shadow-sm shrink-0">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900">
              The <span className="text-green-600">Feed</span>
            </h1>
            <p className="text-xs text-gray-400">Your daily reading list</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-sm transition-colors"
          >
            <span className="text-lg leading-none">+</span> New Post
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-6xl w-full mx-auto px-6 py-6 overflow-hidden flex flex-col">
        <PostList />
      </div>

      {showForm && <CreatePostForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default App;
