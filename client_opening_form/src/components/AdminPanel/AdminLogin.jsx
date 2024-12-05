import React, { useState } from 'react';
import { Email, Lock } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import LeftContent from '../LeftContent';

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Authentication logic (example with API call)
    try {

      onLogin('admin'); 
      navigate('/admin/dashboard');

    /*  const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.success) {
        setError('');
        onLogin('admin'); // Set user role to admin
        navigate('/admin/dashboard');
      } else {
        setError(data.message || 'Invalid login credentials');
      }*/
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <LeftContent />
        <div className="w-full lg:w-1/2 p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-700">Admin Login</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <div className="flex items-center border-b border-gray-300">
                <Email className="text-gray-500 ml-2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  aria-label="Email"
                  required
                  className="w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="relative mb-4">
              <div className="flex items-center border-b border-gray-300">
                <Lock className="text-gray-500 ml-2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  aria-label="Password"
                  required
                  className="w-full py-2 px-3 focus:outline-none"
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={!email || !password}
              className={`w-full py-2 px-4 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                !email || !password ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
