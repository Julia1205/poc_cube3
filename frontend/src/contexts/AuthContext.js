import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  const login = (userData) => setUser(userData);
  const adminLogin = (adminData) => setAdmin(adminData);
  const logout = () => setUser(null);
  const adminLogout = () => setAdmin(null);

  return (
    <AuthContext.Provider value={{ 
      user, 
      admin, 
      login, 
      adminLogin, 
      logout, 
      adminLogout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);