// OrderManagementPage.jsx
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import Pagination from "./Pagination";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbFileDescription } from "react-icons/tb";
import { IoMdArrowDown } from "react-icons/io";
import { TbArrowBack } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import Popup from "../orderManagementClients/Popup";
import OrderTrackingPage from "../orderManagementClients/OrderTrackingPage"





const OrderManagementPage = () => {
  // For the variables for filters, search, and pagination
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const orders = [
    // Dummy data
    {
      id: "978-0-574-6989-8",
      date: "17/08/2024",
      amount: "80,000",
      status: "In Preparation",
    },
    {
      id: "978-1-111-8937-9",
      date: "17/09/2024",
      amount: "142,800",
      status: "In Transit",
    },
    {
      id: "978-0-8234-7432-1",
      date: "20/10/2024",
      amount: "42,500",
      status: "Delivered",
    },
    {
      id: "978-0-8732-7483-3",
      date: "31/07/2024",
      amount: "62,200",
      status: "Canceled",
    },
  ];

  const totalPages = 10;

  const [isPopupOpen, setIsPopupOpen]=useState(false);

  const handleOpenPopup =() => setIsPopupOpen(true)

  const handleClosePopup = () => setIsPopupOpen(false)

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>

      <section className="flex-1 p-6">
        <h1 className="text-3xl font-semibold">Orders Tracking</h1>
        <p className="text-gray-500">
          Track and manage all orders in one place.
        </p>

        {/* Filters and Search */}
        <div className="flex items-center gap-4 mb-4">
          <select
            className="text-[#a6c73a] border border-gray-100 rounded-lg px-4 py-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Status</option>
            <option value="In Preparation">In Preparation</option>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
            <option value="Canceled">Canceled</option>
          </select>

          <select
            className="border border-gray-100 text-[#a6c73a] rounded-lg px-4 py-2"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          >
            <option value="">Select Date</option>
            <option value="2024-10-17">October 17, 2024</option>
            <option value="2024-10-18">October 18, 2024</option>
            <option value="2024-10-19">October 19, 2024</option>
            <option value="2024-10-20">October 20, 2024</option>
          </select>

          <select
            className="border border-gray-100 rounded-lg px-4 py-2 text-[#a6c73a]"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          >
            <option value="">Select Amount</option>
            <option value="50000">50,000 FCFA</option>
            <option value="100000">100,000 FCFA</option>
            <option value="150000">150,000 FCFA</option>
            <option value="200000">200,000 FCFA</option>
          </select>

          <button
            className="flex items-center font-semibold border border-gray-100 px-4 py-2 rounded-lg"
            onClick={() => {
              setStatus("");
              setDate("");
              setAmount("");
            }}
          >
            <span className="bg-red-600 text-white p-1 rounded-md mr-2">
              <TbArrowBack />
            </span>
            <span className="text-red-600">Reset</span>
          </button>
        </div>

        {/* Searchbar and button */}
        <div className="flex justify-between items-center mb-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center  text-gray-600 ">
              <CiSearch />
            </span>
            <input
              className="border border-gray-100 rounded-lg pl-10 pr-4 py-2 flex-1 w-full  "
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
            />
          </div>

          <div>
            <button className="bg-green-800 text-white rounded-lg p-1">
              Place an Order
            </button>
          </div>
        </div>

        {/* table starts here */}
        <form>
          <table className="w-full bg-white shadow-md mt-6 rounded-lg overflow-hidden">
            <thead className="bg-white text-left justify-evenly">
              <p className="ml-10 text-green-600 mt-3 font-bold">All Orders</p>
            </thead>
            <tbody>
              <tr className="border">
                <th className="p-4">
                  <input type="checkbox" />
                </th>
                <th className="p-4 flex gap-3 font-semibold text-gray-700">
                  <span>Order ID</span>
                  <span className="mt-1">
                    <IoMdArrowDown />
                  </span>
                </th>
                <th className="p-4 font-semibold text-gray-700">Date</th>
                <th className="p-4 font-semibold text-gray-700">
                  Amount (FCFA)
                </th>
                <th className="p-4 font-semibold text-gray-700">Status</th>
                <th className="p-4 font-semibold text-gray-700">
                  Quick Actions
                </th>
              </tr>
              {orders.map((order, index) => (
                <tr
                  key={order.id}
                  className={`text-center border-b ${
                    index % 2 === 0 ? "bg-blue-50" : "bg-white"
                  } hover:bg-blue-100`}
                >
                  <td className="p-4">
                    <input type="checkbox" name={`order-${order.id}`} />
                  </td>
                  <td className="p-4 text-gray-800">{order.id}</td>
                  <td className="p-4 text-gray-800">{order.date}</td>
                  <td className="p-4 text-gray-800">{order.amount}</td>
                  <td className="p-4">
                    <span
                      className={`${
                        order.status === "Delivered"
                          ? "text-green-700 bg-green-100"
                          : order.status === "In Transit"
                          ? "text-yellow-700 bg-yellow-100"
                          : order.status === "In Preparation"
                          ? "text-blue-700 bg-blue-100"
                          : "text-red-700 bg-red-100"
                      } px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 flex justify-center gap-4 text-gray-600">
                  
                  {/* for popup function */}
                  <div>
                      <button onClick={handleOpenPopup} className="hover:text-green-500 transition-colors duration-200">
                        <CiDeliveryTruck size={20} />
                      </button>

                      <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
                        <OrderTrackingPage />
                      </Popup>
                    </div>
                    
                    <button className="hover:text-blue-500 transition-colors duration-200">
                      <TbFileDescription size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* Pagination inside table */}
            <tfoot>
              <tr>
                <td colSpan="6" className="p-4">
                  <div className="flex justify-between items-center">
                    <button
                      className="px-4 py-2 bg-gray-200 rounded-lg flex items-center space-x-2"
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <GrFormPreviousLink />
                      <span>Previous</span>
                    </button>

                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      setCurrentPage={setCurrentPage}
                    />

                    <button
                      className="px-4 py-2 bg-gray-200 rounded-lg flex items-center space-x-2"
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      <span>Next</span>
                      <GrFormNextLink />
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </form>
      </section>
    </div>
  );
};

export default OrderManagementPage;
