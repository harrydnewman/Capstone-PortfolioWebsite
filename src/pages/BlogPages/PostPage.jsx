import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/Blog.module.css";

const API_URL = "https://blog.harrydnewman.com/api/posts";

const PostPage = () => {
  const { blog, id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${API_URL}/${id}`);
        if (res.data.blog === blog) {
          setPost(res.data);
        } else {
          setError("Post not found.");
        }
      } catch (err) {
        setError("Error fetching post.", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [blog, id]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  const formattedDate = new Date(post.date).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className={styles.postContainer}>
      <h1>{post.title}</h1>
      <p className={styles.postDate}>Posted on: {formattedDate}</p>
      <div
        className={styles.postContent}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default PostPage;
