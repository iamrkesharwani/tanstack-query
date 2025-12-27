import { AlertCircle } from 'lucide-react';

const Error = ({ refetch }) => {
  return (
    <div className="flex items-center justify-center bg-gray-50 flex-1">
      <div className="text-center max-w-md px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
          <AlertCircle className="w-8 h-8 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">
          We couldn't load the posts. Please try again.
        </p>
        <button
          className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition active:scale-95"
          onClick={refetch}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Error;
