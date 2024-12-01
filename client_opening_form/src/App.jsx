// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import BasicDetail from './components/Forms/BasicDetail';
import ContactDetail from './components/Forms/ContactDetail';
import LoginForm from './components/Login';
import SignUpForm from './components/SignUp';  // Import SignUpForm

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Track login state

  const handleLogin = () => {
    setIsLoggedIn(true);  // Set the state to true when login is successful
  };

  return (
    <Router>
      {!isLoggedIn ? (
        <Routes>
          {/* Login Route */}
          <Route path="/" element={<LoginForm onLogin={handleLogin} />} />  {/* Pass handleLogin to LoginForm */}
          
          {/* Sign Up Route */}
          <Route path="/signup" element={<SignUpForm />} />
          
        </Routes>
      ) : (
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<Navigate to="/profile" />} />  {/* Redirect to profile after login */}
              <Route path="/profile" element={<BasicDetail />} />
              <Route path="/contact" element={<ContactDetail />} />
              {/* Add other routes as needed */}
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
