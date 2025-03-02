// src/context/AppContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [courseCount, setCourseCount] = useState(0);
  const [programCount, setProgramCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [user, setUser] = useState(() => {
    // Retrieve user from localStorage if available
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
 
  useEffect(() => {
    // Save user to localStorage whenever it changes
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <AppContext.Provider value={{ courseCount, setCourseCount, programCount, setProgramCount, userCount, setUserCount, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};