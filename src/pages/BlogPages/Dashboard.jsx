import { useEffect, useState } from "react";
import axios from "axios";
import PostList from "../../components/PostList";
import PostForm from "../../components/PostForm";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3001/api/posts"; // Adjust based on your server

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  // Fetch posts from MongoDB (Public)
  const fetchPosts = async () => {
    try {
      const res = await axios.get(API_URL);
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Add a new post to MongoDB (Only if logged in)
  const addPost = async (post) => {
    if (!user) {
      alert("You must be logged in to create a post.");
      return;
    }
    try {
      const res = await axios.post(API_URL, post);
      setPosts([res.data, ...posts]); // Add new post at the beginning
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  // Edit an existing post in MongoDB
  const editPost = async (id, updatedPost) => {
    if (!user) {
      alert("You must be logged in to edit a post.");
      return;
    }
    try {
      const res = await axios.put(`${API_URL}/${id}`, updatedPost);
      setPosts(posts.map((post) => (post._id === id ? res.data : post)));
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  // Delete a post from MongoDB (Only if logged in)
  const deletePost = async (id) => {
    if (!user) {
      alert("You must be logged in to delete a post.");
      return;
    }
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPosts(posts.filter((post) => post._id !== id)); // Remove from UI
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div>
      <h2>Blog</h2>
      {user && <PostForm addPost={addPost} />}
      <PostList posts={posts} onDelete={user ? deletePost : null} onEdit={user ? editPost : null} user={user} />
    </div>
  );
};

export default Dashboard;
