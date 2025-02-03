import { useEffect, useState } from "react";
// import PostList from "../components/PostList";
import styles from '../styles/Blog.module.css'
import axios from "axios";
import arrowIcon from '../assets/icons/arrow.png'

const API_URL = "https://blog.harrydnewman.com/api/posts";
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
        <h1>Blogs</h1>
        <div className={styles.BlogNavButtonsDiv}>
        <div className={styles.BlogNavButtons}>
        <a href="/blog/capstone">
        <div className={styles.BlogNavButton}>
        <a href="/blog/capstone">Capstone</a>
        <img src={arrowIcon}/>
        </div>
        </a>

        <a href="/blog/criticalexperiences">
        <div className={styles.BlogNavButton}>
        <a href="/blog/criticalexperiences">Critical Experiences</a>
        <img src={arrowIcon}/>
        </div>
        </a>
         
         
        </div>
        </div>
       
        {/* <PostList posts={posts} onDelete={() => {}} /> */}
        
        
      </div>
    )
}