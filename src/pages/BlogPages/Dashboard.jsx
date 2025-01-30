// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import PostList from "../../components/PostList";
import PostForm from "../../components/PostForm";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!user) navigate("/login");
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, [user, navigate]);

  const addPost = (post) => {
    const updatedPosts = [...posts, post];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <PostForm addPost={addPost} />
      <PostList posts={posts} onDelete={deletePost} />
    </div>
  );
};

export default Dashboard;
