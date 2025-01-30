// src/components/PostForm.jsx
import { useState } from "react";

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ id: Date.now(), title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
