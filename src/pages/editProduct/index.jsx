import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { FaArrowLeft } from "react-icons/fa";
import { apiAddProduct } from '../../vendorservices/product';
import { useState } from 'react';

const EditProduct = () => {
  const navigate = useNavigate();
  const [deliveryDates, setDeliveryDates] = useState([]);
  const [newDate, setNewDate] = useState("");

  const handleAddDate = () => {
    if (newDate && !deliveryDates.includes(newDate)) {
      setDeliveryDates([...deliveryDates, newDate]);
      setNewDate(""); // Clear the input field
    }
  };

  const handleRemoveDate = (date) => {
    setDeliveryDates(deliveryDates.filter((d) => d !== date));
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      formData.append("deliveryDates", JSON.stringify(deliveryDates)); // Append delivery dates to the form data

      const response = await apiAddProduct(formData);
      console.log(response.data);
      navigate("/productCatalog");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col gap-1 ml-80 mt-10">
          <div className="flex gap-2">
            <Link to={"/productcatalog"} className="pt-5"><FaArrowLeft /></Link>
            <h1 className="font-bold text-[2rem]">Edit Product</h1>
          </div>
          {/* Card Container for form */}
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-6 border border-black">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div>
                  <span className="text-sm text-black font-extrabold">Title</span>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                    type="text"
                    defaultValue={product?.title}
                    required
                    name="title"
                  />
                </div>
                <div>
                  <span className="text-sm  text-black font-extrabold">Price</span>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Enter Price"
                    required
                    name="price"
                  />
                </div>
              </div>
              <div>
                <span className="text-sm text-black font-extrabold">Availability</span>
                <input
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Enter Availability"
                  required
                  name="availability"
                />
              </div>
              <div>
                <span className="text-sm text-black font-extrabold">Description</span>
                <textarea
                  name="description"
                  id="description"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
                  placeholder="Description"
                  required
                ></textarea>
              </div>
              <div>
                <span className="text-sm text-black font-extrabold">Cover</span>
                <input
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                  type="file"
                  name="image"
                />
              </div>
              {/* Delivery Dates Section */}
              <div>
                <span className="text-sm text-black font-extrabold">Delivery Dates</span>
                <div className="flex gap-2 mt-2">
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                  />
                  <button
                    type="button"
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition duration-300"
                    onClick={handleAddDate}
                  >
                    Add Date
                  </button>
                </div>
                <ul className="mt-2">
                  {deliveryDates.map((date, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span>{new Date(date).toLocaleDateString()}</span>
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
              <div className="bg-[#0d8a2e] text-white py-2 px-4 rounded-lg hover:bg-green-400 transition duration-300 text-center flex justify-center">
                <button type="submit">Edit Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
