// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const defaultIsAuthenticated = false;

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const storedValue = JSON.parse(localStorage.getItem('isAuthenticated'));
        return storedValue !== null ? storedValue : defaultIsAuthenticated;
    });

    useEffect(() => {
        if (!isAuthenticated) {
            localStorage.removeItem('isAuthenticated');
        } else {
            localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
        }
    }, [isAuthenticated]);

    const login = () => {
        setIsAuthenticated(true);
        console.log('Logeado');
    };

    const logout = () => {
        setIsAuthenticated(false);
        console.log('Deslogeado');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
