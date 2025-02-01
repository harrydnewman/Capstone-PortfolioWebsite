import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import styles from '../styles/Blog.module.css'

export default function Blog(){
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem("posts")) || []);
  }, []);
    return (
        <div className={styles.blogPage}>
        <h1>Recent Posts</h1>
        <PostList posts={posts} onDelete={() => {}} />
      </div>
    )
}