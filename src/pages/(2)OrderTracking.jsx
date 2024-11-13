import { IoIosNotificationsOutline } from "react-icons/io";
import Sidebar from '../components/Sidebar';
import { BsArrowUp } from "react-icons/bs";
import { IoMdArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { BsApp } from "react-icons/bs";
import Line from '../assets/images/Line.png';
import Line2 from '../assets/images/Line2.png';
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faCircle, faCircleDot, faDotCircle, faFileInvoice, faLocationDot, faLocationPin, faRotateLeft, faTruck } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { apiVendorGetOrders } from "../services(vendor)/getOrders";
import statusBar from "../assets/VendorImages/statusBar.png"
import { faBicycle } from "@fortawesome/free-solid-svg-icons/faBicycle";


const OrderTracking2 = () => {
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
            const orderDetailsData = fetchedOrderDetails.data.find(order => order._id === orderId) || {};
      setOrderDetails(orderDetailsData);
            setOrders(ordersData);
        } catch (error) {
            toast.error("Error fetching orders. Please reload the page.");
        }
    };

    const fetchOrderDetails = async (orderId) => {
        try {
            const fetchedOrderDetails = await apiVendorGetSingleOrder(); // Assuming this can fetch a single order by ID
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
            <Sidebar/>

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

                <div className="h-[10%] border flex">
                    {/* <div className="flex flex-col mb-[0.5em] h-[100%] p-[0.5em] w-[15%]">
                        
                        <select
                            name="status"
                            id="status"
                            className="border-gray-600 shadow-md rounded-md w-[100%] "
                        >
                            <option value="" className="" disabled selected>
                                Status
                            </option>
                            <option className="text-[#555555]" value="pending">
                                Pending
                            </option>
                            <option className="text-[blue]" value="preparation">
                                In Preparation
                            </option>
                            <option className="text-[orange]" value="transition">
                                In Transition
                            </option>
                            <option className="text-[green]" value="completed">
                                Completed
                            </option>
                        </select>
                    </div>

                    <div className="flex flex-col mb-[0.5em] h-[100%] p-[0.5em] w-[15%]">
                        
                        <select
                            name="date"
                            id="date"
                            className="border-gray-600 shadow-md rounded-md w-[100%] "
                        >
                            <option value="" className="" disabled selected>
                                Date
                            </option>
                            <option className="text-[#555555]" value="pending">
                                Pending
                            </option>
                            <option className="text-[blue]" value="preparation">
                                In Preparation
                            </option>
                            <option className="text-[orange]" value="transition">
                                In Transition
                            </option>
                            <option className="text-[green]" value="completed">
                                Completed
                            </option>
                        </select>
                    </div>

                    <div className="flex flex-col mb-[0.5em] h-[100%] p-[0.5em] w-[15%]">
                        
                        <select
                            name="amount"
                            id="amount"
                            className="border-gray-600 shadow-md rounded-md w-[100%] "
                        >
                            <option value="" className="" disabled selected>
                                Amount
                            </option>
                            <option className="text-[#555555]" value="pending">
                                Pending
                            </option>
                            <option className="text-[blue]" value="preparation">
                                In Preparation
                            </option>
                            <option className="text-[orange]" value="transition">
                                In Transition
                            </option>
                            <option className="text-[green]" value="completed">
                                Completed
                            </option>
                        </select>
                    </div> */}

                    <div><button className="flex justify-center items-center border mb-[0.5em] mt-[0.5em] bg-[white] rounded-md shadow-md px-[0.6em] py-[0.7em] h-[40%]">Reset<FontAwesomeIcon icon={faRotateLeft} className="ml-[0.5em] text-[red]"/></button></div>
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
                                        <Link to={`/vendororderdetails2/${order._id}`}>
  <FontAwesomeIcon icon={faFileInvoice} className="text-[1.5em]" />
</Link>

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
  <div className="left-3/4 mt-[10%] bg-[white] p-6 rounded-lg shadow-xl z-50 ">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-[#0d8a2e]">Order Tracking</h2>
      {/* Back button (uncomment if needed)
      <Link to="/vendordash2" className="text-sm text-gray-600 hover:text-[#0d8a2e]">
        <FontAwesomeIcon icon={faArrowLeftLong} /> Back
      </Link> */}
    </div>

    <div className="border-b pb-4 mb-4">
      <div className="flex justify-between items-center">
        <p className="font-medium text-sm text-gray-600">Creation Date:</p>
        <p className="text-sm text-gray-800">{new Date(orderDetails.createdAt).toLocaleDateString()}</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="font-medium text-sm text-gray-600">Current Status:</p>
        <p className="text-sm text-gray-800">{orderDetails.status}</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="font-medium text-sm text-gray-600">Delivery Date:</p>
        <p className="text-sm text-gray-800">{new Date(orderDetails.deliveryDate).toLocaleDateString()}</p>
      </div>
    </div>

    <div className="border-b pb-4 mb-4">
      <p className="font-medium text-sm text-gray-600 mb-2">Delivery Stage:</p>
      <div className="relative w-full h-2 rounded-full bg-gray-200">
        <div className="absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500" style={{ width: "30%" }}></div>
       
      </div>
    </div>

    <div className="mb-4 pb-4 border-b-2">
      <p className="font-medium text-sm text-gray-600 mb-2">Route:</p>
      <div className="ml-4 space-y-4">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faCircle} className="text-blue-600" />
          <p className="text-sm text-gray-800">BALI, 557 Rue Douala Manga Bel</p>
        </div>
        <div className="border-l-4 border-dotted border-gray-300 ml-2 h-5"></div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faLocationDot} className="text-orange-400 ml-1" />
          <p className="text-sm text-gray-800">2MXV+MGR, Douala, Cameroon</p>
        </div>
      </div>
    </div>

    <div className="flex flex-col ">
    <p className="font-medium text-sm text-gray-600 ml-2"><FontAwesomeIcon icon={faBicycle}/> Courier Contact Information:</p>
        <p className="text-sm text-gray-800 ml-2">271 889 990</p>
      </div>

  </div>
)}
        </div>
    );
};

export default OrderTracking2;
