// src/components/Sidebar.jsx
import './css/sidebar.css'; // Assuming your custom sidebar styles are in this file
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa'; // Icons for the sidebar
import { MdDashboard } from 'react-icons/md'; // Material icon for Dashboard

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // To toggle the sidebar width

  return (
    <div
      className={`flex flex-col transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      } bg-gray-900 text-white min-h-screen`}
    >
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-white p-4"
      >
        {isOpen ? 'Close' : 'Open'}
      </button>

      <div className="p-6 text-center text-2xl font-bold">My App</div>

      {/* Navigation Links */}
      <div className="flex-grow">
        <ul className="space-y-4 mt-6">
          {/* Dashboard Link */}
          <li>
            <Link
              to="/dashboard"
              className="flex items-center space-x-4 p-3 hover:bg-gray-700 rounded-md transition-colors"
            >
              <MdDashboard className="text-xl" />
              {isOpen && <span>Dashboard</span>}
            </Link>
          </li>

          {/* Home Link */}
          <li>
            <Link
              to="/"
              className="flex items-center space-x-4 p-3 hover:bg-gray-700 rounded-md transition-colors"
            >
              <FaHome className="text-xl" />
              {isOpen && <span>Home</span>}
            </Link>
          </li>

          {/* Profile Link */}
          <li>
            <Link
              to="/profile"
              className="flex items-center space-x-4 p-3 hover:bg-gray-700 rounded-md transition-colors"
            >
              <FaUser className="text-xl" />
              {isOpen && <span>Profile</span>}
            </Link>
          </li>

          {/* Contact Link */}
          <li>
            <Link
              to="/contact"
              className="flex items-center space-x-4 p-3 hover:bg-gray-700 rounded-md transition-colors"
            >
              <FaEnvelope className="text-xl" />
              {isOpen && <span>Contact</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
