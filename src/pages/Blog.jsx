import { useEffect, useState } from "react";
import PostList from "../components/PostList";

export default function Blog(){
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem("posts")) || []);
  }, []);
    return (
        <div>
        <h2>Recent Posts</h2>
        <PostList posts={posts} onDelete={() => {}} />
      </div>
    )
}