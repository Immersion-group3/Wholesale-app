import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import SelectDeliveryDateModal from "./SelectDeliveryDateModal";
import VisaCardPaymentModal from "./VisaCardPaymentModal";

const CheckoutModal = ({ onClose }) => {
  const [deliveryMethod, setDeliveryMethod] = useState("homeDelivery");
  const [paymentMethod, setPaymentMethod] = useState("bankTransfer");
  const [isDateModalVisible, setIsDateModalVisible] = useState(false);
  const [isCheckoutModalVisible, setIsCheckoutModalVisible] = useState(true); // To control visibility of CheckoutModal
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false); // State for VisaCardPaymentModal

  const handleOrderSubmit = () => {
    // Show the date selection modal only if "Home Delivery" is selected
    if (deliveryMethod === "homeDelivery") {
      setIsCheckoutModalVisible(false); // Hide CheckoutModal
      setIsDateModalVisible(true); // Show SelectDeliveryDateModal
    } else {
      alert(`Order submitted with ${deliveryMethod} delivery and ${paymentMethod} payment.`);
      onClose(); // Close the modal if it's not home delivery
    }
  };

  const handleDateConfirm = () => {
    setIsDateModalVisible(false); // Close the SelectDeliveryDateModal
    setIsPaymentModalVisible(true); // Open the Visa Card Payment Modal
  };

  return (
    <>
      {isCheckoutModalVisible && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[90%] sm:w-[400px] relative">
            {/* Close Button */}
            <button onClick={onClose} className="absolute top-2 right-2">
              <IoIosClose size={24} />
            </button>
            
            {/* Cart Icon and Tracking Line */}
            <div className="flex items-center mb-6">
              {/* Cart Icon */}
              <FaShoppingCart size={30} className="text-[#0d8a2e] mr-2" />
              
              {/* Tracking Line with Circles */}
              <div className="flex items-center w-full relative">
                {/* First Circle and Gold Line */}
                <div className="h-4 w-4 bg-[#a6c73a] rounded-full absolute left-0"></div>
                <div className="h-1 w-1/3 bg-[#a6c73a]"></div>

                {/* Second Circle (Centered) */}
                <div className="h-4 w-4 bg-[#a6c73a] rounded-full absolute left-1/3 transform -translate-x-1/2"></div>

                {/* Grayed Line */}
                <div className="h-1 w-1/3 bg-gray-300"></div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-center mb-4">
              Choose Your Delivery and Payment Option
            </h2>

            {/* Delivery Method */}
            <p className="font-semibold mb-2">Delivery Method:</p>
            <div className="mb-6 flex flex-col space-y-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="homeDelivery"
                  checked={deliveryMethod === "homeDelivery"}
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  className="form-radio text-[#0d8a2e] focus:ring-[#0d8a2e]"
                />
                <span className="ml-3">Home Delivery</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="inStorePickup"
                  checked={deliveryMethod === "inStorePickup"}
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  className="form-radio text-[#0d8a2e] focus:ring-[#0d8a2e]"
                />
                <span className="ml-3">In-Store Pickup</span>
              </label>
            </div>

            {/* Payment Method */}
            <p className="font-semibold mb-2">Payment Method:</p>
            <div className="mb-6 flex flex-col space-y-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bankTransfer"
                  checked={paymentMethod === "bankTransfer"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="form-radio text-[#0d8a2e] focus:ring-[#0d8a2e]"
                />
                <span className="ml-3">Bank Transfer</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="certifiedCheck"
                  checked={paymentMethod === "certifiedCheck"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="form-radio text-[#0d8a2e] focus:ring-[#0d8a2e]"
                />
                <span className="ml-3">Certified Check</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paymentOnDelivery"
                  checked={paymentMethod === "paymentOnDelivery"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="form-radio text-[#0d8a2e] focus:ring-[#0d8a2e]"
                />
                <span className="ml-3">Payment on Delivery or Pickup</span>
              </label>
            </div>

            {/* Buttons */}
            <div className="flex justify-between space-x-4 mt-4">
              <button
                onClick={onClose}
                className="bg-gray-300 text-gray-700 px-6 py-3 rounded-md w-full sm:w-auto"
              >
                Cancel
              </button>
              <button
                onClick={handleOrderSubmit}
                className="bg-[#0d8a2e] text-white px-6 py-3 rounded-md w-full sm:w-auto"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Show SelectDeliveryDateModal when home delivery is selected */}
      {isDateModalVisible && deliveryMethod === "homeDelivery" && (
        <SelectDeliveryDateModal 
          onClose={() => setIsDateModalVisible(false)} 
          onConfirm={handleDateConfirm} // Pass onConfirm to handle the date confirmation
        />
      )}

      {/* Show VisaCardPaymentModal when date modal is confirmed */}
      {isPaymentModalVisible && (
        <VisaCardPaymentModal 
          onClose={() => setIsPaymentModalVisible(false)} 
        />
      )}
    </>
  );
};

export default CheckoutModal;
