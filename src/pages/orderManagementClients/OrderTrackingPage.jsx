import React from 'react';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { TbArrowBack } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

const OrderTrackingPage = ({ onClose }) => {
  
  return (
    <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      {/* Header with Back and Close buttons */}
      <div className="flex justify-between items-center mb-4">
        {/* Back Button */}
        <button className="flex items-center text-gray-700 hover:text-gray-900 font-semibold">
          <TbArrowBack size={20} />
          <span className="ml-2">Back</span>
        </button>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-gray-700 hover:text-red-600"
          aria-label="Close"
        >
          <IoMdClose size={24} />
        </button>
      </div>

        {/* Order Tracking Header */}
        <h2 className="text-xl font-bold text-green-700 mb-4">Order Tracking</h2>

        {/* Order Details */}
        <div className="bg-white p-4 shadow rounded-lg mb-6">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Creation Date:</span>
            <span>26/09/2024</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Current Status:</span>
            <span className="text-[#f79009]">In Transit</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Delivery Date:</span>
            <span>01/10/2024</span>
          </div>
        </div>

        {/* Delivery Stage */}
        <div className="bg-white p-4 shadow rounded-lg mb-6">
          <h3 className="font-semibold mb-2">Delivery Stage:</h3>
          <div className="relative">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-[#f79009] h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="text-center mt-2">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600 text-sm">
              On the way to the destination
              </span>
            </div>
          </div>
        </div>

        {/* Route Information */}
        <div className="bg-white p-4 shadow rounded-lg mb-6">
          <h3 className="font-semibold mb-2">Route:</h3>
          <div className="flex items-start gap-2 mb-2">
            <MdLocationOn className="text-blue-500 mt-1" />
            <span>BALI, 557 Rue Douala Manga Bell</span>
          </div>
          <div className="flex items-start gap-2">
            <MdLocationOn className="text-green-500 mt-1" />
            <span>2MXV+MGR, Douala, Cameroon</span>
          </div>
        </div>

        {/* Carrier Contact Information */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="font-semibold mb-2">Carrier Contact Information:</h3>
          <div className="flex items-center gap-2">
            <MdPhone className="text-green-500" />
            <span>+237 699 88 77 66</span>
          </div>
        </div>
      </div>
    
  );
};

export default OrderTrackingPage;
