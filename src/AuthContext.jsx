import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  const login = (username, password) => {
    const adminUsername = import.meta.env.VITE_ADMIN_USERNAME;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;
  
    if (username === adminUsername && password === adminPassword) {
      localStorage.setItem("user", username);
      setUser(username);
      return true;
    }
    return false; // Ensure false is returned explicitly
  };
  

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
