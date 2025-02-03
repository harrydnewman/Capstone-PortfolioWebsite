import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "../styles/Blog.module.css";

const PostList = ({ posts, onDelete, onEdit, user }) => {
  const [editingPostId, setEditingPostId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editBlog, setEditBlog] = useState("")

  const Blogs = [
    "Capstone",
    "Critical Experiences"
  ]

  // Enable edit mode
  const handleEditClick = (post) => {
    setEditingPostId(post._id);
    setEditTitle(post.title);
    setEditContent(post.content);
    setEditBlog(post.blog)
  };

  // Save changes
  const handleSaveClick = (id) => {
    onEdit(id, { blog: editBlog, title: editTitle, content: editContent });
    setEditingPostId(null);
  };

  const handleChange = (event) => {
    setEditBlog(event.target.value);
  };

  // Quill Editor Modules
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };

  return (
    <div className={styles.postList}>
      {posts.length === 0 ? <p>No posts available</p> : posts.map((post) => {
        const formattedDate = new Date(post.date).toLocaleString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });

        return (
          <div key={post._id} className="post">
            {editingPostId === post._id ? (
              // Edit Mode with Quill
              <div className={styles.PostForm}>
                <h2>Editing Post</h2>
                <select id="blog" value={editBlog} onChange={handleChange}>
                  <option value="" disabled>Select a Blog to Post To</option>
                  {Blogs.map((blog) => (
                    <option key={blog} value={blog}>
                      {blog}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  required
                />
                <ReactQuill
                  value={editContent}
                  onChange={setEditContent}
                  className={styles.quillEditor}
                  theme="snow"
                  modules={modules}
                />
                <button onClick={() => handleSaveClick(post._id)}>Save</button>
                <button onClick={() => setEditingPostId(null)}>Cancel</button>
              </div>
            ) : (
              // View Mode
              <div className={styles.individualPost}>
                <h2>{post.title}</h2>
                <div
                  className={styles.postContent}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                <p className={styles.postDate}>Posted on: {formattedDate}</p>
                {user && (
                  <>
                    <button onClick={() => handleEditClick(post)}>Edit</button>
                    <button onClick={() => onDelete(post._id)}>Delete</button>
                  </>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
