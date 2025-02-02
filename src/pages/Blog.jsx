import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import styles from '../styles/Blog.module.css'
import axios from "axios";
const API_URL = "http://localhost:3001/api/posts";
export default function Blog(){
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

    return (
        <div className={styles.blogPage}>
        <h1>Posts</h1>
       
        <PostList posts={posts} onDelete={() => {}} />
        
        
      </div>
    )
}