// src/components/SignupModal.jsx
import React from 'react';

const SignupModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Sign Up Confirmation</h2>
        <p className="text-gray-600 mb-4">Do you have already trading account with any brokerage firm?</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
          >
            Yes
          </button>
          <button
            onClick={onConfirm}
            className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
