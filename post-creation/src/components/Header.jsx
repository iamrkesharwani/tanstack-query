import { Plus } from 'lucide-react';

const Header = ({ setModal }) => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 px-8 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Posts</h1>
          </div>
          <button
            className="flex items-center gap-2"
            onClick={() => setModal(true)}
          >
            <Plus className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">New Post</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
