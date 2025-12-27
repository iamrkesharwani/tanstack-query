export const fetchPosts = async ({ queryKey }) => {
  const page = queryKey[1];
  const limit = 10;
  const start = (page - 1) * limit;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_start=${start}`
  );
  if (!res.ok) throw new Error('Error fetching data');
  const posts = await res.json();
  const total = Number(res.headers.get('x-total-count'));

  return { posts, total };
};
