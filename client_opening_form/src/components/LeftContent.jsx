// src/components/LeftContent.jsx
import React from 'react';

const LeftContent = () => {
  return (
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
  );
};

export default LeftContent;
