// src/components/SignUpForm.jsx
import React, { useState } from 'react';
import { Email, Lock, Person } from '@mui/icons-material';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
    } else {
      console.log({ name, email, password, rememberMe });
      // Add your signup logic here (e.g., API call to register user)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Main Container for the two sections */}
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Section: Static Content (LeftContent Component) */}
        <div className="w-1/2 bg-gray-200 flex items-center justify-center p-8">
          <div className="text-center">
            {/* Static content for left side (image, text, etc.) */}
            <img
              src="/path-to-your-image.png"  // Replace with your static image path
              alt="Content Image"
              className="w-full h-auto max-w-xs mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-700">Create an Account</h3>
            <p className="text-sm text-gray-600">Fill in the details below to create your account</p>
          </div>
        </div>

        {/* Right Section: Sign Up Form */}
        <div className="w-full lg:w-1/2 p-8">
          {/* Logo Above the "Sign Up" Text */}
          <div className="text-center mb-6">
            <img
              src="/path-to-your-logo.png"  // Replace with your logo path
              alt="Logo"
              className="h-16 mx-auto mb-4"  // Adjust size and spacing
            />
            <h2 className="text-3xl font-semibold text-gray-700">Sign Up</h2>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit}>
            {/* Name input field with icon */}
            <div className="relative mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <Person className="text-gray-500 ml-2" />
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full py-2 px-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

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

            {/* Confirm Password input field with icon */}
            <div className="relative mb-4">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <Lock className="text-gray-500 ml-2" />
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
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
              Sign Up
            </button>
          </form>

          {/* Already have an account link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account? 
              <a href="/login" className="text-blue-500 hover:underline">Log in</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignUpForm;
