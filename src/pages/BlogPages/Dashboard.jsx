import { useEffect, useState } from "react";
import axios from "axios";
import PostList from "../../components/PostList";
import PostForm from "../../components/PostForm";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/BlogDashboard.module.css'

const API_URL = "https://blog.harrydnewman.com/api/posts"; // Adjust based on your server

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  // Fetch posts from MongoDB (Runs on refresh and mount)
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(API_URL);
      console.log("Fetched posts from MongoDB:", res.data); // Debugging log
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
      await axios.post(API_URL, post);
      fetchPosts(); // Refresh posts from DB after adding
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
      await axios.put(`${API_URL}/${id}`, updatedPost);
      fetchPosts(); // Refresh posts after edit
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
      fetchPosts(); // Refresh posts after deletion
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className={styles.BlogDashboard}>
      <h1>Dashboard</h1>
      {user && <PostForm addPost={addPost} />}
      <PostList posts={posts} onDelete={user ? deletePost : null} onEdit={user ? editPost : null} user={user} />
    </div>
  );
};

export default Dashboard;
