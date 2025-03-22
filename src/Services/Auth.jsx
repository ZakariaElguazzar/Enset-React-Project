import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Use the navigate function

  // Function to login user
  const login = async (loginData) => {
    try {
      const response = await fetch(
        `http://localhost:5000/users?login=${loginData.login}&password=${loginData.password}`
      );
      const users = await response.json();

      if (users.length > 0) {
        setUser(users[0]); // Set the first matching user
        alert("Existing Account");
        navigate("/dashboard"); // ✅ Redirect to Dashboard
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    navigate("/registerlogin"); // Redirect to Login on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Ensure useAuth correctly uses useContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
