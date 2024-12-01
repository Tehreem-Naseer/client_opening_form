// src/components/Login.jsx
import React, { useState } from 'react';
import LeftContent from './LeftContent'; // Import the LeftContent component
import { Email, Lock } from '@mui/icons-material';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Handle form submission (you can replace this with actual logic later)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Main Container for the two sections */}
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Section: Static Content (LeftContent Component) */}
        <LeftContent />

        {/* Right Section: Login Form */}
        <div className="w-full lg:w-1/2 p-8">
          {/* Logo Above the "Login" Text */}
          <div className="text-center mb-6">
            <img
              src="/path-to-your-logo.png"  // Replace with your logo path
              alt="Logo"
              className="h-16 mx-auto mb-4"  // Adjust size and spacing
            />
            <h2 className="text-3xl font-semibold text-gray-700">Login</h2>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit}>
            {/* Email input field with icon */}
            <div className="relative mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <Email className="text-gray-500 ml-2" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full py-2 px-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Password input field with icon */}
            <div className="relative mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <Lock className="text-gray-500 ml-2" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full py-2 px-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Remember me checkbox */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 text-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">Remember me</label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot your password?</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginForm;
