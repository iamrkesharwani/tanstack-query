import { AlertCircle, RefreshCw } from 'lucide-react';

const Error = ({ onRetry }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-slate-900 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center">
            <AlertCircle className="w-16 h-16 text-white animate-pulse" />
          </div>
        </div>

        <h2 className="text-5xl font-bold mb-4 text-red-400">
          Oops! Something Went Wrong
        </h2>

        <p className="text-slate-400 text-xl mb-8 leading-relaxed">
          We couldn't load the cryptocurrency data. This might be due to a
          network issue or the API being temporarily unavailable.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onRetry}
            className="group flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-xl transition active:scale-95"
          >
            <RefreshCw className="w-5 h-5 transition-transform duration-500" />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
