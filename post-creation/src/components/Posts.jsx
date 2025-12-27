import Post from './Post';

const Posts = ({ posts }) => {
  return (
    <div className="flex-1 overflow-y-auto min-h-0">
      <div className="max-w-5xl mx-auto px-4 py-2 space-y-4">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
