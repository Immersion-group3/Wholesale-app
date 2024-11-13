import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const VendPaymentSuccessfulModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleOkClick = () => {
    navigate("/cart"); // Redirect to the Cart page
    onClose(); // Close the current modal
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[80%] sm:w-[400px] text-center">
        <FaCheckCircle className="text-green-600 text-5xl mx-auto mb-3" /> {/* Success Icon */}
        <h2 className="text-xl font-semibold text-green-600 mb-3">Payment Successful</h2>
        <p className="text-gray-700 mb-4">Your payment has been processed successfully. An email confirmation has been sent.</p>
        <button
          onClick={handleOkClick}
          className="bg-[#0d8a2e] text-white px-6 py-2 rounded-md hover:bg-[#0d8a2e] transition duration-200 text-sm"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default VendPaymentSuccessfulModal;
