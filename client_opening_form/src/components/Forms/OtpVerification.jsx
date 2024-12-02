import React, { useState } from 'react';
import LeftContent from '../LeftContent'; // Import the LeftContent component
import { Email, Lock } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // For navigation

const OtpVerification = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const navigate = useNavigate(); // For programmatic navigation
  
    // Handle form submission (you can replace this with actual logic later)
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ email, password, rememberMe });
    };

    
  const handleLoginClick = () => {
    navigate('/login');
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
              <h2 className="text-3xl font-semibold text-gray-700">Otp Verification</h2>
            </div>
  
            {/* Form Section */}
            <form onSubmit={handleSubmit}>
              {/* Email input field with icon */}
  
              <div className="relative mb-4">
              <div className="flex items-center border-b border-gray-300">
                <Email className="text-gray-500 ml-2" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
               
                  className="w-full py-2 px-3 focus:outline-none focus:border-green-500 focus:ring-0"
                />
              </div>
            </div>
  
              {/* Password input field with icon */}
              <div className="relative mb-4">
                <div className="flex items-center border-b border-gray-300">
                  <Lock className="text-gray-500 ml-2" />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full py-2 px-3 border-none focus:outline-none"
                  />
                </div>
              </div>
  
             
  
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
  
            {/* Forgot Password Link */}
            <div className="text-center mt-4"> 
              <a
                href="#"
                className="text-sm text-blue-500 hover:underline"
                onClick={handleLoginClick} 
              >
                <strong> </strong> Back to Login
              </a>
             
            </div>
  
          </div>
  
        </div>
  
      </div>
    );
  };
  

export default OtpVerification;
