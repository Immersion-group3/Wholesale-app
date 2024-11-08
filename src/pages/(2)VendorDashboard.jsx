import { IoIosNotificationsOutline } from "react-icons/io";
import Sidebar from '../components/Sidebar';
import { BsArrowUp } from "react-icons/bs";
import { IoMdArrowDown } from "react-icons/io";
import { BsApp } from "react-icons/bs";
import Line from '../assets/images/Line.png';
import Line2 from '../assets/images/Line2.png';
import { useEffect, useState } from "react";
import VendorDashSidebar from "../components/VendorDashSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice, faTruck } from "@fortawesome/free-solid-svg-icons";

const VendorDashboard2 = () => {
  const [orders, setOrders] = useState([]);

  //state to handle visibility of pup up
  const [isTrackingVisible,setIsTrackingVisible]=useState();

  //function to handle pop
  const handlePopUp=()=>{
    setIsTrackingVisible(!isTrackingVisible);

  }
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch();
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 overflow-y">
      {/* Sidebar with sticky positioning */}
      <VendorDashSidebar/>

      <div className="flex-1 p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xl font-semibold">Welcome, Laurette</p>
            <p className="text-xs text-gray-600">Id varius fringilla porttitor viverra egestas enim et urna. Sodales</p>
          </div>
          <div className="flex items-center gap-4">
            <IoIosNotificationsOutline className="text-2xl" />
            <div className="rounded-full border-2 h-10 w-10 bg-gray-300"></div>
          </div>
        </div>

        {/* Statistics Cards Section */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-[#c5e0b5] border border-[#c5e0b5] shadow-sm">
            <p className="text-xs text-white font-semibold">Current Orders</p>
            <p className="text-2xl font-semibold text-[#0d8a2e] mt-1">06</p>
            <div className="flex items-center gap-2 mt-2">
              <BsArrowUp className="text-[#0d8a2e]" />
              <p className="text-xs text-[#0d8a2e]">40%</p>
              <p className="text-xs text-white">vs last month</p>
              <img src={Line2} alt="Line chart" className="ml-auto w-16 h-8" />
            </div>
          </div>
          <div className="p-4 rounded-lg bg-[#5aaf71] border border-[#5aaf71] shadow-sm">
            <p className="text-xs text-white font-semibold">Total Expenses (FCFA)</p>
            <p className="text-2xl font-semibold text-[#0d8a2e] mt-1">719 500</p>
            <div className="flex items-center gap-2 mt-2">
              <BsArrowUp className="text-[#0d8a2e]" />
              <p className="text-xs text-[#0d8a2e]">12%</p>
              <p className="text-xs text-white">vs last month</p>
              <img src={Line} alt="Line chart" className="ml-auto w-16 h-8" />
            </div>
          </div>
          <div className="p-4 rounded-lg bg-[#c2d979] border border-[#c2d979] shadow-sm">
            <p className="text-xs text-white font-semibold">Outstanding Invoices</p>
            <p className="text-2xl font-semibold text-[#0d8a2e] mt-1">03</p>
            <div className="flex items-center gap-2 mt-2">
              <BsArrowUp className="text-[#0d8a2e]" />
              <p className="text-xs text-[#0d8a2e]">10%</p>
              <p className="text-xs text-white">vs last month</p>
              <img src={Line2} alt="Line chart" className="ml-auto w-16 h-8" />
            </div>
          </div>
        </div>

        {/* Orders Table Section */}
        <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <p className="text-base font-semibold text-[#0d8a2e]">All Orders</p>
          </div>
          <div className="grid grid-cols-5 gap-4 px-4 py-2 text-xs font-bold text-gray-600 border-b">
            <div className="flex items-center gap-1">
              <BsApp className="text-lg" />
              <span>Order ID</span>
              <IoMdArrowDown />
            </div>
            <p>Date</p>
            <p>Amount (FCFA)</p>
            <p>Status</p>
            <p>Quick actions</p>
          </div>
          <div className="px-4 py-2">
            {orders.length > 0 ? (
              orders.map((order) => (
                <div key={order.id} className="grid grid-cols-5 items-center text-xs text-gray-800 py-2 border-b last:border-0">
                  <p>{order.id}</p>
                  <p>{order.date}</p>
                  <p>{order.amount}</p>
                  <p>{order.status}</p>
                  <p>
                    <button onClick={handlePopUp}><FontAwesomeIcon icon={faTruck}/></button>
                    <Link to="/orderdetails"><FontAwesomeIcon icon={faFileInvoice}/></Link>
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-4">No orders available</p>
            )}
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {isTrackingVisible && (
        <div onClick={handlePopUp} className="fiexed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

      {/* POP UP */}
      {isTrackingVisible && (
        <div>
            THIS IS THE ORDER TRACKING POP UP
        </div>
      )}
    </div>
  );
};

export default VendorDashboard2;
