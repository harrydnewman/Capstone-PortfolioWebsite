import { Link } from "react-router-dom";
import styles from '../styles/RedirectandNotFound.module.css'
export default function NotFound() {
  return (
    <div className={styles.redirectPage}>
      <h1>404 - Page Not Found</h1>
      <h3>The page you are looking for does not exist.</h3>
      <a href="/">Go back home</a>
    </div>
  );
}
