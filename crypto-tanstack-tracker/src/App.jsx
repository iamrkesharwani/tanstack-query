import { useQuery } from '@tanstack/react-query';
import { fetchData } from './api/coins';
import CoinsList from './components/CoinsList';
import Error from './components/Error';
import Loading from './components/Loading';

const App = () => {
  const { data, isLoading, error, refetch, isFetching, dataUpdatedAt } =
    useQuery({
      queryKey: ['coins'],
      queryFn: fetchData,
    });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error onRetry={refetch} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-6xl font-bold mb-4 text-blue-400">Top Coins</h1>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-3xl shadow-2xl overflow-hidden">
          <CoinsList
            data={data}
            dataUpdatedAt={dataUpdatedAt}
            isFetching={isFetching}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
