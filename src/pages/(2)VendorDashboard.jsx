import { IoIosNotificationsOutline } from "react-icons/io";
import Sidebar from '../components/Sidebar';
import { BsArrowUp } from "react-icons/bs";
import { IoMdArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { BsApp } from "react-icons/bs";
import Line from '../assets/images/Line.png';
import Line2 from '../assets/images/Line2.png';
import { useEffect, useState } from "react";
import VendorDashSidebar from "../components/VendorDashSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faCircle, faCircleDot, faDotCircle, faFileInvoice, faLocationDot, faLocationPin, faTruck } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { apiVendorGetOrders } from "../services(vendor)/getOrders";
import statusBar from "../assets/VendorImages/statusBar.png"
const VendorDashboard2 = () => {
  const [orders, setOrders] = useState([]);
  const [isTrackingVisible, setIsTrackingVisible] = useState(false); // Set to false initially
  const [orderDetails, setOrderDetails] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handlePopUp = async (orderId) => {
    setSelectedOrderId(orderId);
    setIsTrackingVisible(!isTrackingVisible);

    if (!isTrackingVisible) {
      await fetchOrderDetails(orderId); // Fetch the details when the pop-up is shown
    }
  };
  // const navigate = useNavigate();
  // const handleFileClick=(orderId)=>{
    
  //     navigate(`/vendororderdetails2/${orderId}`);
  // };
  // }

  const fetchOrders = async () => {
    try {
      const fetchedOrders = await apiVendorGetOrders();
      console.log("Fetched Orders Response:", fetchedOrders);
      const ordersData = fetchedOrders.data || [];
      setOrders(ordersData);
    } catch (error) {
      toast.error("Error fetching orders. Please reload the page.");
    }
  };

  const fetchOrderDetails = async (orderId) => {
    try {
      const fetchedOrderDetails = await apiVendorGetOrders(); // Assuming this can fetch a single order by ID
      const orderDetailsData = fetchedOrderDetails.data.find(order => order._id === orderId) || {};
      setOrderDetails(orderDetailsData);
    } catch (error) {
      toast.error("Error fetching order details.");
    }
  };

  useEffect(() => {
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
                <div key={order._id} className="grid grid-cols-5 items-center text-xs text-gray-800 py-2 border-b last:border-0">
                  <p>{order._id}</p>
                  <p>{new Date(order.createdAt).toLocaleDateString()}</p>
                  <p>{order.totalAmount}</p>
                  <p>{order.status}</p>
                  <p>
                    <button onClick={() => handlePopUp(order._id)}>
                      <FontAwesomeIcon icon={faTruck} className="ml-[1em] text-[1.5em] mr-[1em]" />
                    </button>
                    <Link to="/vendororderdetails2"><FontAwesomeIcon icon={faFileInvoice}  className="text-[1.5em]" /></Link>
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-4">No orders available</p>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isTrackingVisible && (
        <div onClick={() => setIsTrackingVisible(false)} className="fixed inset-0 bg-black bg-opacity-70 z-40"></div>
      )}

      {/* Pop-up for Order Tracking */}
      {isTrackingVisible && orderDetails && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30%] max-w-lg bg-white p-4 rounded-lg shadow-lg z-50 h-[70%]">
          <div className="flex h-[5%] items-center">
            {/* <Link to="/vendordash2"><FontAwesomeIcon icon={faArrowLeftLong} className="mr-[1em]" /></Link>
            <p>Back</p> */}
          </div>
          <div>
            <h2 className="flex items-baseline font-bold text-[1.2em] text-[#0d8a2e] ml-[1.5em] w-[80%] border-b-2 mt-[1em] pb-2">Order Tracking</h2>
          </div>
          <div className="w-[80%] ml-[1.5em] border-b-2 py-[0.5em]">
            <div className="flex mb-[0.3em]">
              <p className="font-medium mr-[0.5em] text-[0.8em]">Creation Date :</p>
              <p className="">{new Date(orderDetails.createdAt).toLocaleDateString()}</p>
            </div>
            <div className="flex mb-[0.3em] text-[0.8em]">
              <p className="font-medium mr-[0.5em]">Current Status :</p>
              <p>{orderDetails.status}</p>
            </div>
            <div className="flex mb-[0.3em] text-[0.8em]">
              <p className="font-medium mr-[0.5em]">Delivery Date :</p>
              <p>{new Date(orderDetails.deliveryDate).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="border-b-2 ml-[1.5em] flex-col w-[80%]">
            <p className="font-medium mr-[0.5em] text-[0.8em]">Delivery Stage:</p>
            <div className="border h-[1.4em] w-[80%] rounded-xl bg-[grey] mb-[1em]">
              <div className="h-full w-[30%] bg-[orange] rounded-xl"></div>
            </div>
          </div>
          <div className="border-b-2 flex flex-col py-[0.5em] w-[80%] ml-[1.5em]">
            <p className="font-medium ml-[1.5em] text-[0.8em]">Route:</p>
            <div className="ml-[3em]  ">
              <div className="w-full flex items-center"><FontAwesomeIcon icon={faCircle} className="mr-[1em]"/><p className="text-[0.8em]">BALI, 557 Rue Douala Manga Bel</p></div>
              <div className="h-[1em] mt-[0.2em] mb-[0.4em] ml-[0.2em] border-l-2 border-dotted">

              </div>
              <div className="w-full flex items-center"><FontAwesomeIcon icon={faLocationDot} className="mr-[1em]"/><p className="text-[0.8em]">2MXV+MGR, Douala, Cameroon</p></div>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorDashboard2;
