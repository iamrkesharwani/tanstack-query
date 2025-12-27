import { useState } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { fetchPosts } from './api/posts';
import Header from './components/Header';
import Loading from './components/Loading';
import Error from './components/Error';
import Posts from './components/Posts';
import Footer from './components/Footer';
import Modal from './components/Modal';

const App = () => {
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ['posts', page],
    queryFn: fetchPosts,
    placeholderData: keepPreviousData,
  });

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header setModal={setModal} />
      {isLoading && <Loading />}
      {isError && <Error refetch={refetch} />}
      {!isLoading && !isError && <Posts posts={data.posts} />}
      {modal && <Modal setModal={setModal} />}
      {!isLoading && !isError && (
        <Footer page={page} setPage={setPage} total={data.total} />
      )}
    </div>
  );
};

export default App;
