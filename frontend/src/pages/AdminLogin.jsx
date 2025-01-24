import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({ onAdminLogin }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous ajouteriez la logique d'authentification admin
    onAdminLogin();
    navigate('/products');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Connexion Administrateur</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email Admin</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            value={credentials.email}
            onChange={(e) => setCredentials({...credentials, email: e.target.value})}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Mot de passe Admin</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={credentials.password}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
          />
        </div>
        <button type="submit" className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700">
          Connexion Admin
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;