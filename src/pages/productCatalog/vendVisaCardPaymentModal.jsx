import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import visaCardImage from '../../assets/images/visa.jpg';
import { useNavigate } from 'react-router-dom';
import VendPaymentSuccessfulModal from './vendPaymentSuccessfulModal';

const VendVisaCardPaymentModal = ({ onClose }) => {
  const [cardDetails, setCardDetails] = useState({
    cardholderName: '',
    expirationDate: '',
    cardNumber: '',
    cvv: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateCardDetails(cardDetails);
    if (isValid) {
      setShowConfirmation(true); // Show the OK to proceed confirmation
    } else {
      alert('Please enter valid card details.');
    }
  };

  const validateCardDetails = (details) => {
    return (
      details.cardholderName &&
      details.expirationDate &&
      details.cardNumber.length === 16 &&
      details.cvv.length === 3
    );
  };

  const handlePaymentConfirmation = () => {
    setShowConfirmation(false); // Hide the confirmation modal
    setShowSuccess(true); // Show the payment success modal
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
      {/* Visa Card Payment Modal */}
      {!showConfirmation && !showSuccess && (
        <div className="bg-white p-6 rounded-lg w-[90%] sm:w-[400px] relative shadow-lg">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition duration-200"
          >
            <IoIosClose size={20} />
          </button>

          <div className="w-full h-[150px] overflow-hidden relative mb-4 rounded-lg">
            <img
              src={visaCardImage}
              alt="Visa Card"
              className="object-cover w-full h-full absolute top-0 left-0"
            />
          </div>

          <h2 className="text-xl font-semibold text-center text-[#0d8a2e] mb-3">Visa Card Payment</h2>
          <p className="text-center text-gray-600 mb-4 text-sm">Please ensure your card details are correct. An email notification will be sent after the payment.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700">Cardholder Name</label>
                <input
                  type="text"
                  name="cardholderName"
                  value={cardDetails.cardholderName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="mt-1 px-3 py-2 bg-green-200 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0d8a2e] w-full"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700">Expiration Date</label>
                <input
                  type="text"
                  name="expirationDate"
                  value={cardDetails.expirationDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="mt-1 px-3 py-2 bg-green-200 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0d8a2e] w-full"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col col-span-2 sm:col-span-1">
                <label className="text-sm font-semibold text-gray-700">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9876 5432"
                  className="mt-1 px-3 py-2 bg-green-200 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0d8a2e] w-full"
                  required
                />
              </div>
              <div className="flex flex-col col-span-2 sm:col-span-1">
                <label className="text-sm font-semibold text-gray-700">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  className="mt-1 px-3 py-2 bg-green-200 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0d8a2e] w-full"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200 text-sm"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-[#0d8a2e] text-white px-6 py-2 rounded-md hover:bg-[#0d8a2e] transition duration-200 text-sm"
              >
                Confirm to Pay
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Click OK to Proceed Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[90%] sm:w-[400px] text-center">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Click OK to Proceed</h2>
            <p className="text-sm text-gray-600 mb-4">You are about to confirm your payment. Please click OK to proceed.</p>
            <div className="flex justify-center">
              <button
                onClick={handlePaymentConfirmation}
                className="bg-[#0d8a2e] text-white px-6 py-2 rounded-md hover:bg-[#0d8a2e] transition duration-200 text-sm"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Successful Modal */}
      {showSuccess && <VendPaymentSuccessfulModal onClose={onClose} />}
    </div>
  );
};

export default VendVisaCardPaymentModal;
