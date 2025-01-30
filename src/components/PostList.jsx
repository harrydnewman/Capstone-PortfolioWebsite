// src/components/PostList.jsx
const PostList = ({ posts, onDelete }) => {
    return (
      <div className="post-list">
        {posts.length === 0 ? <p>No posts available</p> : posts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => onDelete(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default PostList;
  