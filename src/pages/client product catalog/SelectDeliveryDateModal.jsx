import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import VisaCardPaymentModal from "./VisaCardPaymentModal";  

const SelectDeliveryDateModal = ({ onClose, onConfirm }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [showConditions, setShowConditions] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false); // State to control VisaCard Payment modal visibility

  const availableDays = [
    { date: "Monday, Nov 13", time: "10:00 AM - 12:00 PM", isAvailable: true, conditions: "Order opening: 9:00 AM, Order closing: 5:00 PM" },
    { date: "Tuesday, Nov 14", time: "2:00 PM - 4:00 PM", isAvailable: true, conditions: "Order opening: 9:00 AM, Order closing: 5:00 PM" },
    { date: "Wednesday, Nov 15", time: "Unavailable", isAvailable: false, conditions: "" },
    { date: "Thursday, Nov 16", time: "12:00 PM - 2:00 PM", isAvailable: true, conditions: "Order opening: 9:00 AM, Order closing: 5:00 PM" },
    { date: "Friday, Nov 17", time: "Unavailable", isAvailable: false, conditions: "" }
  ];

  const handleConfirm = () => {
    if (selectedDay) {
      onConfirm(selectedDay); // Send selected day to parent
      setShowPaymentModal(true); // Show VisaCard Payment Modal
      onClose(); // Close the Select Delivery Date modal
    }
  };

  return (
    <div>
      <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg w-[80%] sm:w-[400px] relative shadow-lg">
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition duration-200">
            <IoIosClose size={20} />
          </button>

          {/* Calendar Icon and Tracking Line */}
          <div className="flex items-center mb-4 space-x-2">
            <FaCalendarAlt size={24} className="text-[#0d8a2e]" />
            <div className="relative w-full flex items-center justify-between">
              <div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
              <div className="h-1 w-full bg-yellow-400"></div>
              <div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold text-center text-[#0d8a2e] mb-3">Select Delivery Date</h2>

          {/* Paragraph */}
          <p className="text-center text-gray-600 mb-4 text-sm">Choose a delivery date to confirm your order</p>

          {/* Available Days with Times */}
          <div className="space-y-3">
            {availableDays.map((day, index) => (
              <label key={index} className={`flex items-center text-sm ${!day.isAvailable ? "text-gray-400 cursor-not-allowed" : "text-gray-800"}`}>
                <input
                  type="radio"
                  name="deliveryDate"
                  value={day.date}
                  disabled={!day.isAvailable}
                  checked={selectedDay === day.date}
                  onChange={() => {
                    setSelectedDay(day.date);
                    setShowConditions(true);
                  }}
                  className="form-radio text-transparent peer-checked:bg-[#0d8a2e] peer-checked:ring-2 peer-checked:ring-[#0d8a2e] transition duration-200"
                />
                <span className="ml-3 flex-1">{day.date} - {day.time}</span>

                {showConditions && selectedDay === day.date && (
                  <div className="text-xs text-gray-500 ml-6 mt-2 flex-shrink-0">
                    <div className="bg-green-300 p-3 rounded-lg shadow-sm">
                      <strong className="text-[#0d8a2e]">Conditions for {day.date}:</strong>
                      <div className="space-y-1">
                        {day.conditions && day.conditions.split(",").map((condition, idx) => (
                          <p key={idx}>{condition}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </label>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-between space-x-3 mt-5">
            <button onClick={onClose} className="bg-gray-300 text-gray-700 px-5 py-2 rounded-md w-full sm:w-auto hover:bg-gray-400 transition duration-200 text-xs">
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="bg-[#0d8a2e] text-white px-5 py-2 rounded-md w-full sm:w-auto hover:bg-[#0d8a2e] transition duration-200 text-xs"
              disabled={!selectedDay}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>

      {/* VisaCard Payment Modal */}
      {showPaymentModal && <VisaCardPaymentModal onClose={() => setShowPaymentModal(false)} />}
    </div>
  );
};

export default SelectDeliveryDateModal;
