import React, { useState } from 'react';
import { loginAdmin } from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { adminLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adminData = await loginAdmin(credentials);
    if (adminData) adminLogin(adminData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={credentials.username}
        onChange={(e) => setCredentials({...credentials, username: e.target.value})}
        placeholder="Nom d'utilisateur"
      />
      <input 
        type="password" 
        value={credentials.password}
        onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        placeholder="Mot de passe"
      />
      <button type="submit">Connexion Admin</button>
    </form>
  );
};

export default AdminLogin;