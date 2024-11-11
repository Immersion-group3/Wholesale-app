import { IoIosNotificationsOutline } from "react-icons/io";
import Sidebar from '../components/Sidebar';
import { BsArrowUp } from "react-icons/bs";
import { IoMdArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsApp } from "react-icons/bs";
import Line from '../assets/images/Line.png';
import Line2 from '../assets/images/Line2.png';
import { useEffect, useState } from "react";
import VendorDashSidebar from "../components/VendorDashSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faCircleDot, faFileInvoice, faTruck } from "@fortawesome/free-solid-svg-icons";

const VendorDashboard2 = () => {
  const [orders, setOrders] = useState([]);

  //state to handle visibility of pup up
  const [isTrackingVisible, setIsTrackingVisible] = useState();

  //function to handle pop
  const handlePopUp = () => {
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
      <VendorDashSidebar />

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
                    <button onClick={handlePopUp}><FontAwesomeIcon icon={faTruck} /></button>
                    <Link to="/orderdetails"><FontAwesomeIcon icon={faFileInvoice} /></Link>
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-4" onClick={handlePopUp}>No orders available</p>
            )}
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {isTrackingVisible && (
        <div onClick={handlePopUp} className="fixed inset-0 bg-black bg-opacity-70 z-40"></div>
      )}

      {/* POP UP */}
      {isTrackingVisible && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-lg bg-white p-4 rounded-lg shadow-lg z-50 h-[70%]">
          <div className="flex h-[5%] items-center">
            <Link to="/vendordash2"><FontAwesomeIcon icon={faArrowLeftLong} className="mr-[1em]" /></Link>
            <p>Back</p>
          </div>
          <div className="">
            <h2 className='flex items-baseline font-bold text-[1.2em] text-[#0d8a2e] ml-[1.5em] w-[80%] border-b-2'>Order Tracking</h2>
          </div>
          <div className="w-[80%] ml-[1.5em] border-b-2">
            <div className='flex mb-[0.3em]'>
              <p className='font-medium mr-[0.5em]'>Creation Date :</p>
              <p>Hi</p>
            </div>
            <div className='flex mb-[0.3em]'>
              <p className='font-medium mr-[0.5em]'>Current Status :</p>
              <p>Hi</p>
            </div>
            <div className='flex mb-[0.3em]'>
              <p className='font-medium mr-[0.5em]'>Delivery Date :</p>
              <p>Hi</p>
            </div>
          </div>

          <div className="border-b-2 ml-[1.5em]">
          <p className='font-medium mr-[0.5em] '>Delivery Stage:</p>
          <p>Bar</p>
          </div>
          <div className="border flex flex-col">
          <p className='font-medium ml-[1.5em] '>Route:</p>
          <div className="ml-[1.5em] w-full flex justify-center">
            <FontAwesomeIcon icon={faCircleDot} className="mr-[0.5em]"/>
            <p>BALI 4/37 Manga Bell</p>
            <div className="mt-[1.5em] border-l-2 border-dotted h-[2em]"></div>

          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorDashboard2;
