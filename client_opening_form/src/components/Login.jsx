// src/components/Login.jsx
import React, { useState } from 'react';
import LeftContent from './LeftContent'; // Import the LeftContent component
import { Email, Lock } from '@mui/icons-material';
import SignupModal from './SignUpModal'; // Import the SignupModal component
import { useNavigate } from 'react-router-dom'; // For navigation

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal visibility
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const navigate = useNavigate(); // For programmatic navigation

  // Handle form submission (you can replace this with actual logic later)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  const handleVerificationClick = () => {
    navigate('/otpVerification');
  };

  const handleResendClick = () => {
    navigate('/otpResend');
  };

  const handleRegenerateClick = () => {
    navigate('/otpRegenerate');
  };

  const handleStatusClick = () => {
    navigate('/applicationStatus');
  };


  // Handle "SignUp" click (opens modal)
  const handleSignUpClick = () => {
    setIsModalOpen(true);
  };

  // Handle confirmation of sign up (redirect to signup page)
  const handleSignUpConfirm = () => {
    setIsModalOpen(false);
    navigate('/signup'); // Redirect to the signup page (you'll need to set up routing)
  };

  // Handle modal close without action
  const handleModalClose = () => {
    setConfirmationMessage('Sahulat account is offered to those Customers, who have no existing Sahulat or normal trading account with any broker.');
    setIsModalOpen(false);
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
            <h2 className="text-3xl font-semibold text-gray-700">Login</h2>
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
              Login
            </button>
          </form>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot your password?</a>
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline"
              onClick={handleSignUpClick} // Open the SignUp modal
            >
              <strong> or</strong> SignUp
            </a>
           
          </div>

          <div className="text-left mt-4">

          <ul className="list-disc list-inside">
                <li className="text-xs text-gray-500">For otp verification 
                  <a href="#" className="text-xs text-blue-500 hover:underline"
                  onClick={handleVerificationClick}
                  >
                    Click Here</a></li>
                <li className="text-xs text-gray-500">For otp Resend <a href="#" 
                className="text-xs text-blue-500 hover:underline" onClick={handleResendClick}>
                  Click Here</a></li>

                <li className="text-xs text-gray-500">For otp Regenerate <a href="#"
                 className="text-xs text-blue-500 hover:underline" onClick={handleRegenerateClick}
                 >Click Here</a></li>
                <li className="text-xs text-gray-500">For application status <a href="#"
                 className="text-xs text-blue-500 hover:underline" onClick={handleStatusClick}>
                  Click Here</a></li>
            </ul>
            {confirmationMessage && <p className="text-sm text-red-500">{confirmationMessage}</p>}
          </div>

        </div>

      </div>
      
      {/* SignUp Modal */}
      <SignupModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleSignUpConfirm}
      />
    </div>
  );
};

export default LoginForm;
