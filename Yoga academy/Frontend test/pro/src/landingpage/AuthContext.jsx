// src/contexts/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [playStatus, setPlayStatus] = useState(false);
    const [heroCount, setHeroCount] = useState(0);

    return (
        <AuthContext.Provider value={{ playStatus, setPlayStatus, heroCount, setHeroCount }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
