import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import default Quill styles
import styles from "../styles/Blog.module.css";

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
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

  return (
    <form className={styles.PostForm} onSubmit={handleSubmit}>
      <h2>New Post</h2>
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
