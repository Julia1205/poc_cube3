import React, { useState } from 'react';
import { loginUser } from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await loginUser(credentials);
    if (userData) login(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={credentials.email}
        onChange={(e) => setCredentials({...credentials, email: e.target.value})}
        placeholder="Email"
      />
      <input 
        type="password" 
        value={credentials.password}
        onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        placeholder="Mot de passe"
      />
      <button type="submit">Connexion</button>
    </form>
  );
};

export default Login;