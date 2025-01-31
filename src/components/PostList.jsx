const PostList = ({ posts, onDelete, user }) => {
  return (
    <div className="post-list">
      {posts.length === 0 ? <p>No posts available</p> : posts.map((post) => (
        <div key={post._id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          {user && onDelete && ( // Show delete button only if user is logged in
            <button onClick={() => onDelete(post._id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
