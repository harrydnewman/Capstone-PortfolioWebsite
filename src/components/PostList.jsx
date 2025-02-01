import { useState } from "react";
import styles from '../styles/Blog.module.css'

const PostList = ({ posts, onDelete, onEdit, user }) => {
  const [editingPostId, setEditingPostId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  // Enable edit mode
  const handleEditClick = (post) => {
    setEditingPostId(post._id);
    setEditTitle(post.title);
    setEditContent(post.content);
  };

  // Save changes
  const handleSaveClick = (id) => {
    onEdit(id, { title: editTitle, content: editContent });
    setEditingPostId(null);
  };

  return (
    <div className="post-list">
      {posts.length === 0 ? <p>No posts available</p> : posts.map((post) => (
        <div key={post._id} className="post">
          {editingPostId === post._id ? (
            // Edit Mode
            <div>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
              <button onClick={() => handleSaveClick(post._id)}>Save</button>
              <button onClick={() => setEditingPostId(null)}>Cancel</button>
            </div>
          ) : (
            // View Mode
            <div className={styles.individualPost}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              {user && (
                <>
                  <button onClick={() => handleEditClick(post)}>Edit</button>
                  <button onClick={() => onDelete(post._id)}>Delete</button>
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
