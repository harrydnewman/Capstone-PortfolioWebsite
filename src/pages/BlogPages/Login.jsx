// src/pages/Login.jsx
import { useState } from "react";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/BlogAuth.module.css"; // Corrected styles import

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/blog/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.heading}>Login</h2>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.loginButton}>Login</button>
      </form>
    </div>
  );
};

export default Login;
