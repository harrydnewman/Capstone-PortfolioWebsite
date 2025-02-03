import { useEffect } from "react";
import styles from '../styles/RedirectandNotFound.module.css'
const RedirectBrainrot = () => {
  useEffect(() => {
    window.location.href = "https://brainrot.harrydnewman.com";
  }, []);

  return (
    <div className={styles.redirectPage}>
      <h1>harrydnewman.com/brainrot</h1>
      <h1>Has moved to a new location</h1>
      <h1>Redirecting you now!</h1>
      <h2><a href="https://brainrot.harrydnewman.com/" target="_blank">Didn't get redirected? Click Here</a></h2>
    </div>
  )
};

export default RedirectBrainrot;
