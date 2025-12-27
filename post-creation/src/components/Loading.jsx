import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50 flex-1">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
        <p className="text-lg font-medium text-gray-700">Loading posts...</p>
        <p className="text-sm text-gray-500 mt-1">Please wait a moment</p>
      </div>
    </div>
  );
};

export default Loading;