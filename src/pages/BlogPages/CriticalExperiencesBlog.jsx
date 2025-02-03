import { useEffect, useState } from "react";
import PostList from "../../components/PostList";
import styles from '../../styles/BlogPage.module.css'
import axios from "axios";
const API_URL = "https://blog.harrydnewman.com/api/posts";

export default function CriticalExperiencesBlog() {
    const [posts, setPosts] = useState([]);
    const [blogPosts, setBlogPosts] = useState([]);

    // Fetch posts from MongoDB (Runs on refresh and mount)
    useEffect(() => {
        fetchPosts();
        
    }, []);

    const organizePosts = (posts) => {
        const postsList = posts.filter(post => post.blog === "Critical Experiences");
        setBlogPosts(postsList);
    };

    const fetchPosts = async () => {
        try {
            const res = await axios.get(API_URL);
            console.log("Fetched posts from MongoDB:", res.data); // Debugging log
            setPosts(res.data);
            organizePosts(res.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    return (
        <div className={styles.BlogPage}>
           <h1>Critical Experiences Blog</h1>
                <PostList posts={blogPosts} onDelete={() => { }} />
        </div>
    )
}