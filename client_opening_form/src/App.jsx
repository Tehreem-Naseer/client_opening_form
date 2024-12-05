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
import AdminSidebar from './components/AdminPanel/AdminSidebar.jsx';
import ClientKyc from './components/AdminPanel/ClientKyc.jsx';
import ClientOtp from './components/AdminPanel/ClientOtp.jsx';
import ClientUkn from './components/AdminPanel/ClientUkn.jsx';

const App = () => {
  const [userRole, setUserRole] = useState(() => {
    return localStorage.getItem('userRole') || null;
  }); // Track user role: "client" or "admin"

  // Handle login for different roles
  const handleLogin = (role) => {
    setUserRole(role); // Set user role to "client" or "admin"
    localStorage.setItem('userRole', role); // Save to localStorage
  };

  // Logout function
  const handleLogout = () => {
    setUserRole(null); // Clear role and return to login page
    localStorage.removeItem('userRole'); // Remove from localStorage
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
              { console.log(userRole)
              /* Client-Specific Routes */}
              <Route path="/" element={<Navigate to="/profile" />} />
              <Route path="/profile" element={<BasicDetail />} />
              <Route path="/contact" element={<ContactDetail />} />
              {/* Add more client-specific routes */}
            </Routes>
          </div>
        </div>
      ) : (
        <div className="flex">
          <AdminSidebar onLogout={handleLogout} /> {/* Admin Sidebar */}
          <div className="flex-1 p-8">
            <Routes>
              {
                 console.log(userRole)
              /* Admin-Specific Routes */}
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/otp" element={<ClientOtp />} />
              <Route path="/admin/kyc" element={<ClientKyc />} />
              <Route path="/admin/ukn" element={<ClientUkn />} />

              {/* Add more admin-specific routes */}
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
