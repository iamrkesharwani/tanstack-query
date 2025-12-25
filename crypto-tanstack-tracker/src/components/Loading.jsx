const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden flex items-center justify-center">
      <div className="relative z-10 text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
          <div className="inset-0 flex items-center justify-center">
            <div
              className="w-24 h-24 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"
              style={{ animationDirection: 'reverse', animationDuration: '1s' }}
            ></div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-3 text-blue-400">
          Loading Market Data...
        </h2>
      </div>
    </div>
  );
};

export default Loading;
