
import { Link, useNavigate } from 'react-router-dom';
import Sidebar2 from '../../components/Sidebar';
import { FaArrowLeft } from "react-icons/fa";
import { apiAddProduct } from '../../vendorservices/product';
import { useState } from 'react';

const AddProduct = () => {
  const navigate = useNavigate();
  const [deliveryDate, setDeliveryDate] = useState([]); // Array of selected delivery dates
  const [newDate, setNewDate] = useState(""); // Current date input

  const handleAddDate = () => {
    if (newDate && !deliveryDate.includes(newDate)) {
      setDeliveryDate([...deliveryDate, newDate]); // Add new date to array
      setNewDate(""); // Clear the input field
    }
  };

  const handleRemoveDate = (date) => {
    setDeliveryDate(deliveryDate.filter((d) => d !== date)); // Remove the selected date
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);

      // Ensure dates are in the required format (yyyy-mm-dd)
      const formattedDeliveryDates = deliveryDate.map(date => {
        const [year, month, day] = date.split('-'); // Ensuring it's split correctly
        return `${year}-${month}-${day}`; // Return the correctly formatted date
      });

      formData.append("deliveryDate", JSON.stringify(formattedDeliveryDates));

      const response = await apiAddProduct(formData);
      console.log(response.data);
      navigate("/productCatalog");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <div className="flex">
        <Sidebar2 />
        <div className="flex flex-col gap-1 ml-80 mt-10">
          <div className="flex gap-2">
            <Link to="/productCatalog" className="pt-5">
              <FaArrowLeft />
            </Link>
            <h1 className="font-bold text-[2rem]">Add Product</h1>
          </div>
          {/* Card Container for the form */}
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-6 border border-black">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {/* Title Input */}
              <div className="flex gap-3">
                <div>
                  <label className="text-sm text-black font-extrabold">Title</label>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Enter Title"
                    required
                    name="title"
                  />
                </div>
                <div>
                  <label className="text-sm text-black font-extrabold">Price</label>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Enter Price"
                    required
                    name="price"
                  />
                </div>
              </div>
              {/* Availability Input */}
              <div>
                <label className="text-sm text-black font-extrabold">Availability</label>
                <input
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Enter Availability"
                  required
                  name="availability"
                />
              </div>
              {/* Description Input */}
              <div>
                <label className="text-sm text-black font-extrabold">Description</label>
                <textarea
                  name="description"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
                  placeholder="Description"
                  required
                ></textarea>
              </div>
              {/* File Input */}
              <div>
                <label className="text-sm text-black font-extrabold">Cover</label>
                <input
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                  type="file"
                  name="icon"
                />
              </div>
              {/* Delivery Dates Section */}
              <div>
                <label className="text-sm text-black font-extrabold">Delivery Dates</label>
                <div className="flex gap-2 mt-2">
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                  />
                  <button
                    type="button"
                    className="bg-[#a6c73a] text-white py-1 px-2 rounded-lg hover:bg-[#5d7705] transition duration-300"
                    onClick={handleAddDate}
                  >
                    Add Date
                  </button>
                </div>
                {/* Display List of Added Dates */}
                <ul className="mt-2">
                  {deliveryDate.map((date, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span>{date}</span>
                      <button
                        type="button"
                        className="text-red-500 hover:underline"
                        onClick={() => handleRemoveDate(date)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Submit Button */}
              <div className="bg-[#0d8a2e] text-white py-2 px-4 rounded-lg hover:bg-green-400 transition duration-300 text-center flex justify-center">
                <button type="submit">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
