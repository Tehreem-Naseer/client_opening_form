// src/components/LeftContent.jsx
import React from 'react';
import SoftechLogo from './img/softech/SOFTECH-logo.png';

const LeftContent = () => {
  return (
    <div className="w-1/2 bg-[#CCD0CF] p-4 flex items-center justify-center p-8">
      <div className="text-left">
        {/* Static content for left side (image, text, etc.) */}
       <img
          src={SoftechLogo}  // Replace with your static image path
          alt="Content Image"
          className="w-full h-auto max-w-xs mb-4"
        />
        <h3 className="text-2xl font-bold text-gray-700">Sahulat Account</h3>
        <p className="text-sm text-gray-800">Sahulat Account is an opportunity for new individual resident Pakistani Customers, whether you are a student,housewife, novice investor or someone wanting to make an entry and invest in the stock exchange.</p>
      
        <h5 className="text-2xl font-bold text-gray-700">Features:</h5>
        <ul className="list-disc list-inside">
                <li className="text-sm text-gray-800">Simplified account opening process with CNIC only.</li>
                <li className="text-sm text-gray-800">No document required for source of income.</li>
                <li className="text-sm text-gray-800">Open an account with just PKR 10,000/-.</li>
                <li className="text-sm text-gray-600">Maximum investment limit of PKR 1,000,000.</li>
            </ul>
      
      
      </div>
    </div>
  );
};

export default LeftContent;
