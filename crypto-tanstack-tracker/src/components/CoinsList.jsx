import { Clock, RefreshCw, TrendingUp, TrendingDown } from 'lucide-react';

const CoinsList = ({ data, isFetching, dataUpdatedAt }) => {
  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const formatTime = (date) =>
    date.toLocaleString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });

  const getLastUpdated = (dataUpdatedAt) => {
    if (!dataUpdatedAt) return '—';

    const now = new Date();
    const diffInSeconds = Math.floor((now - dataUpdatedAt) / 1000);
    const date = new Date(dataUpdatedAt);

    if (diffInSeconds < 10) {
      return 'Just now';
    }

    if (isToday(date)) {
      return `Today, ${formatTime(date)}`;
    }

    return date.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  const lastUpdated = getLastUpdated(dataUpdatedAt);

  return (
    <div>
      {/* Header Section */}
      <div className="p-4 border-b border-slate-800/50 bg-gradient-to-r from-slate-900/50 to-slate-800/30">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Clock className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                Last Updated
              </p>
              <p className="text-lg font-semibold text-slate-200">
                {lastUpdated}
              </p>
            </div>
          </div>

          {isFetching && (
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2">
              <RefreshCw className="w-4 h-4 text-emerald-400 animate-spin" />
              <span className="text-sm font-medium text-emerald-300">
                Refreshing…
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Coins Grid */}
      <div className="p-4">
        <div className="grid grid-cols-5 gap-4">
          {data.map((coin, index) => {
            const priceChange = coin.price_change_percentage_24h || 0;
            const isPositive = priceChange >= 0;
            return (
              <div
                key={coin.id}
                className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 delay-0"
              >
                <div className="absolute -top-2 -right-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                  #{index + 1}
                </div>

                <div
                  className={`w-12 h-12 bg-gradient-to-br ${
                    isPositive
                      ? 'from-emerald-500/20 to-green-500/20'
                      : 'from-red-500/20 to-rose-500/20'
                  } rounded-full flex items-center justify-center mb-4`}
                >
                  {isPositive ? (
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                  ) : (
                    <TrendingDown className="w-6 h-6 text-red-400" />
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-2">
                  {coin.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    $
                    {coin.current_price.toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                  <span className="text-sm text-slate-500">USD</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoinsList;
