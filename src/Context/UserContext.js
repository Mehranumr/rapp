import React, { createContext, useContext, useId, useState } from "react";

// Creating a context to manage user information
const UserContext = createContext();

// Creating a provider component to wrap around the components needing user information
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);

  const login = (token) => {
    setToken(token);

    setIsLoggedIn(true);
  };

  const logout = () => {
    setToken(null);
    setIsLoggedIn(false);
  };

  const updateUserName = (name) => {
    setUserName(name);
  };

  return (
    <UserContext.Provider
      value={{ login, logout, updateUserName, userName, isLoggedIn, token }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access user information from any component
export const useAuth = () => useContext(UserContext);
