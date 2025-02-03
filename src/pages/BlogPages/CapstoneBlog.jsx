import { useEffect, useState } from "react";
import PostList from "../../components/PostList";
import styles from '../../styles/BlogPage.module.css'
import axios from "axios";
const API_URL = "https://blog.harrydnewman.com/api/posts";

export default function CapstoneBlog() {
    const [posts, setPosts] = useState([]);
    const [blogPosts, setBlogPosts] = useState([]);

    // Fetch posts from MongoDB (Runs on refresh and mount)
    useEffect(() => {
        fetchPosts();

    }, []);

    const organizePosts = (posts) => {
        const postsList = posts.filter(post => post.blog === "capstone");
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
            <h1>Capstone Blog</h1>
            <PostList posts={blogPosts} onDelete={() => { }} />
            <a href="/blog"><p><i>Return to Blog Page</i></p></a>
        </div>
    )
}