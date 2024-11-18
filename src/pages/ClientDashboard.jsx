import { CiBellOn } from "react-icons/ci";
import { FiTruck } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
// import Sidebar from "../components/Sidebar";
import { IoMdArrowDown } from "react-icons/io";
import { BsArrowUp } from "react-icons/bs";
import Line from "../assets/images/Line.png";
import Line2 from "../assets/images/Line2.png"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiGetOrderById } from "../services/clientdash(services)/product";
import Sidebar2 from "../components/Sidebar2";
import Popup from "./orderManagementClients/Popup";
import OrderTrackingPage from "./orderManagementClients/OrderTrackingPage";

const ClientDashboard = () => {

    const params = useParams()
    const orderId = params.id

    const [order, setOrder] = useState([]);
    const getOrder = async () => {
        try {
            const response =  await apiGetOrderById(orderId);
            const {data} =response
            setOrder(data);
        } catch (error) {
            console.error('Error fetching Orders', error)
        }
    }
    useEffect(() => {
       
        getOrder();
    }, [orderId]);



    const [isPopupOpen, setIsPopupOpen] = useState(false); // Moved this line to the right position
    const handleOpenPopup = () => {
        console.log("popup clicked")
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => setIsPopupOpen(false);



    return (
        <div className="flex gap-20" >

            <Sidebar2 />

            <div className="float-right mb-10 pt-4">
                <div className="flex mb-5">
                    <div>
                        <p className="text-2xl">Welcome Laurette</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex ml-96">
                        <CiBellOn className="text-4xl" />
                        <span className=" border-2 shadow-md h-16 w-16 rounded-full"></span>
                    </div>
                </div>

                <div className='flex border shadow-md rounded-lg w-max h-52 p-3 gap-3 pb-3 mb-10'>
                    <div className='bg-[#c5e0b5] border shadow-md rounded-lg w-72 h-44 p-2'>
                        <p className="text-white">Current Orders</p>
                        <p className="text-green-800 text-5xl">06</p>
                        <div className="flex pt-10 gap-2">
                            <p className="pt-1 text-[12px] mt-4 text-[#0d8a2e]"><BsArrowUp /></p>
                            <p className="text-[12px] mt-4 text-[#0d8a2e]">40%</p>
                            <p className="text-[10px] mt-4 text-white">vs last month</p>

                            {/* Wrapping the image in a div with the same background color */}
                            <div className="w-20 h-10 ml-5 bg-[#c5e0b5] flex items-center justify-center">
                                <img src={Line2} alt="" className="w-full h-full" />
                            </div>
                        </div>
                    </div>
                    <div className=' bg-[#5aaf71] border shadow-md rounded-lg w-72 h-44 p-2'>
                        <p className="text-white">Total Expenses (FCFA)</p>
                        <p className="text-[#c5e0b5] text-5xl">719 500</p>
                        <div className="flex pt-10 gap-2">
                            <p className="pt-1 text-[12px] mt-4 text-[#0d8a2e]"><BsArrowUp /></p>
                            <p className="text-[12px] mt-4 text-[#0d8a2e]">12%</p>
                            <p className="text-[10px] mt-4 text-white">vs last month</p>
                            <img src={Line} alt="" className="text-[30px] w-20 h-10 ml-5" />
                        </div>
                    </div>
                    <div className='bg-[#c2d979] border shadow-md rounded-lg w-72 h-44 p-2'>
                        <p className="text-white">Outstanding Invoices</p>
                        <p className="text-green-800 text-5xl">03</p>
                        <div className="flex pt-10 gap-2">
                            <p className="pt-1 text-[12px] mt-4 text-[#0d8a2e]"><BsArrowUp /></p>
                            <p className="text-[12px] mt-4 text-[#0d8a2e]">10%</p>
                            <p className="text-[10px] mt-4 text-white">vs last month</p>
                            <img src={Line2} alt="" className="text-[30px] w-20 h-10 ml-5" />
                        </div>
                    </div>
                </div>

                <div className='border shadow-md rounded-lg w-auto h-3/6 mb-10'>
                    <p className='border-b-2 drop-shadow-sm text-green-950 font-bold text-xl p-3' >All Orders</p>
                    <div className='border-b-2 drop-shadow-sm flex justify-between p-2'>
                        <div className="flex gap-2">
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <p>Order ID</p>
                            <p className="pt-1"><IoMdArrowDown /></p>
                        </div>
                        <p>Date</p>
                        <p>Amount(FCFA)</p>
                        <p>Status</p>
                        <p>Quick Actions</p>
                    </div>

                    <div className='border-b-2 drop-shadow-sm flex gap-3 justify-between p-2'>
                        <div className="flex gap-2 ">
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <p>Close</p>
                        </div>
                        <p>12/02/13</p>
                        <p>2,020</p>
                        <p>delivered</p>

                        <div className="flex gap-5">
                            <Link><button onClick={handleOpenPopup} className="text-xl"><FiTruck /></button></Link>
                            <Link to='/orderDetailPage'><span className="text-xl"><FiFileText /></span></Link>
                        </div>
                        
                        {
                            order.map((order) => (
                                <div key={order.id}>
                                    <div className="flex gap-2">
                                        {/* <p><BsApp /></p> */}
                                        <input type="checkbox" name="checkbox" id="checkbox" />
                                        <p>{order.id}</p>
                                    </div>
                                    <p>{order.date}</p>
                                    <p>{order.amount}</p>
                                    <p>{order.status}</p>

                                    <div className="flex gap-5">
                                        <button onClick={handleOpenPopup} className="text-xl"><FiTruck /></button>
                                        <Link to='/orderDetailPage'><span className="text-xl"><FiFileText /></span></Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <button className="flex float-end my-2 mx-2 border shadow rounded p-1 ">See More <FaArrowRight className="pt-1" /></button>
                </div>
            </div>
            {/* Popup */}
            <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
                <div className="relative bg-white p-6 rounded-lg shadow-lg">
                    <button
                        onClick={handleClosePopup}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        ✕
                    </button>
                    <OrderTrackingPage onClose={handleClosePopup} />
                </div>
            </Popup>
        </div>
    )
}

export default ClientDashboard;