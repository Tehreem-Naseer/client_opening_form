import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import BasicDetail from './components/Forms/BasicDetail';
import ContactDetail from './components/Forms/ContactDetail';
import LoginForm from './components/Login';
import SignUpForm from './components/SignUp';
import OtpRegenerate from './components/Forms/OtpRegenerate';
import OtpVerification from './components/Forms/OtpVerification';
import OtpResend from './components/Forms/OtpResend';
import ApplicationStatus from './components/Forms/ApplicationStatus';
import AdminLogin from './components/AdminPanel/AdminLogin.jsx';
import AdminDashboard from './components/AdminPanel/AdminDashboard'; // Admin Dashboard Component

const App = () => {
  const [userRole, setUserRole] = useState(null); // Track user role: "client" or "admin"

  // Handle login for different roles
  const handleLogin = (role) => {
    setUserRole(role); // Set user role to "client" or "admin"
  };

  // Logout function
  const handleLogout = () => {
    setUserRole(null); // Clear role and return to login page
  };

  return (
    <Router>
      {!userRole ? (
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginForm onLogin={() => handleLogin('client')} />} />
          <Route path="/admin/login" element={<AdminLogin onLogin={() => handleLogin('admin')} />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/otpRegenerate" element={<OtpRegenerate />} />
          <Route path="/otpVerification" element={<OtpVerification />} />
          <Route path="/otpResend" element={<OtpResend />} />
          <Route path="/applicationStatus" element={<ApplicationStatus />} />
        </Routes>
      ) : userRole === 'client' ? (
        <div className="flex">
          <Sidebar onLogout={handleLogout} /> {/* Pass logout to Sidebar */}
          <div className="flex-1 p-8">
            <Routes>
              {/* Client-Specific Routes */}
              <Route path="/" element={<Navigate to="/profile" />} />
              <Route path="/profile" element={<BasicDetail />} />
              <Route path="/contact" element={<ContactDetail />} />
              {/* Add more client-specific routes */}
            </Routes>
          </div>
        </div>
      ) : (
        <div className="flex">
          <Sidebar onLogout={handleLogout} /> {/* Admin Sidebar */}
          <div className="flex-1 p-8">
            <Routes>
              {/* Admin-Specific Routes */}
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/kyc" element={<BasicDetail />} />
              <Route path="/ukn" element={<ContactDetail />} />
              {/* Add more admin-specific routes */}
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
