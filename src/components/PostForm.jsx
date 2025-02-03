import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import default Quill styles
import styles from "../styles/Blog.module.css";

const PostForm = ({ addPost }) => {
  const Blogs = [
    "Capstone",
    "Critical Experiences"
  ]


  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blog, setBlog] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ blog, title, content });
    setTitle("");
    setContent(""); // Clears content after posting
  };

  // Quill Editor Modules
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };

  const handleChange = (event) => {
    setBlog(event.target.value);
  };

  return (
    <form className={styles.PostForm} onSubmit={handleSubmit}>
      <h2>New Post</h2>
      <select id="blog" value={blog} onChange={handleChange}>
        <option value="" disabled>Select a Blog to Post To</option>
        {Blogs.map((blog) => (
          <option key={blog} value={blog}>
            {blog}
          </option>
        ))}
      </select>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <ReactQuill 
        value={content} 
        onChange={setContent} 
        className={styles.quillEditor} 
        theme="snow" 
        modules={modules} 
        placeholder="Write your post here..."
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
