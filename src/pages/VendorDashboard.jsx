import { IoIosNotificationsOutline } from "react-icons/io";
import Sidebar from '../components/Sidebar';
import Chart from "../assets/images/Chart.jpg"
import { BsArrowUp } from "react-icons/bs";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdArrowDown } from "react-icons/io";
import { BsApp } from "react-icons/bs";
import Line from '../assets/images/Line.png';
import Line2 from '../assets/images/Line2.png'
import { useEffect, useState } from "react";

const VendorDashboard = () => {
  const [orders, setOrders] = useState([]);

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
    <div>
      <div className='flex w-full'>
        <Sidebar />
        <div className="ml-32 mt-10">
          <div className="flex">
            <div>
              <p className='text-[1.5rem] font-semibold'>Welcome, Laurette</p>
              <p className='text-[13px] text-[#5e697a]'>Id varius fringilla porttitor viverra egestas enim et urna. Sodales</p>
            </div>
            <div className="flex ml-96 gap-3">
              <p className="text-[30px] pt-3"><IoIosNotificationsOutline /></p>
              <p className="rounded-full border-2 h-12 w-12"></p>
            </div>
          </div>
          <div className="flex gap-5 border-2 p-3 px-5 rounded-xl shadow-sm mt-12">
            <div className="border-2 w-[19vw] h-[24vh] rounded-xl bg-[#c5e0b5] border-[#c5e0b5]">
              <div className="w-[16vw] flex flex-col mt-3 ml-5">
                <p className="text-[13px] text-white font-semibold">Current Orders</p>
                <p className="text-[30px] font-semibold font-sans text-[#0d8a2e] mt-3">06</p>
                <div className="flex gap-1">
                  <p className="pt-1 text-[12px] mt-4 text-[#0d8a2e]"><BsArrowUp /></p>
                  <p className="text-[12px] mt-4 text-[#0d8a2e]">40%</p>
                  <p className="text-[10px] mt-4 text-white">vs last month</p>

                  {/* Wrapping the image in a div with the same background color */}
                  <div className="w-20 h-10 ml-5 bg-[#c5e0b5] flex items-center justify-center">
                    <img src={Line2} alt="" className="w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2 w-[19vw] h-[24vh] rounded-xl bg-[#5aaf71] border-[#5aaf71]">
              <div className="w-[16vw] flex flex-col mt-3 ml-5">
                <p className="text-[13px] text-white font-semibold">Total Expenses (FCFA)</p>
                <p className="text-[30px] font-semibold font-sans text-[#0d8a2e] mt-3">719 500</p>
                <div className="flex gap-1">
                  <p className="pt-1 text-[12px] mt-4 text-[#0d8a2e]"><BsArrowUp /></p>
                  <p className="text-[12px] mt-4 text-[#0d8a2e]">12%</p>
                  <p className="text-[10px] mt-4 text-white">vs last month</p>
                  <img src={Line} alt="" className="text-[30px] w-20 h-10 ml-5" />
                </div>
              </div>
            </div>
            <div className="border-2 w-[19vw] h-[24vh] rounded-xl bg-[#c2d979] border-[#c2d979]">
              <div className="w-[16vw] flex flex-col mt-3 ml-5">
                <p className="text-[13px] text-white font-semibold">Outstanding Invoices</p>
                <p className="text-[30px] font-semibold font-sans text-[#0d8a2e] mt-3">03</p>
                <div className="flex gap-1">
                  <p className="pt-1 text-[12px] mt-4 text-[#0d8a2e]"><BsArrowUp /></p>
                  <p className="text-[12px] mt-4 text-[#0d8a2e]">10%</p>
                  <p className="text-[10px] mt-4 text-white">vs last month</p>
                  <img src={Line2} alt="" className="text-[30px] w-20 h-10 ml-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 h-[43%] mt-6 rounded-xl">
            <p className="flex text-[17px] font-bold text-[#0d8a2e] mt-5 ml-5">All Orders</p>
            <p className="border-b-2 h-6"></p>
            <div className="flex items-center justify-around pt-2 text-[13px] font-bold text-gray-600">
              <div className="flex gap-2">
                <p className="text-[18px] pt-"><BsApp /></p>
                <p>Order ID</p>
                <p className="pt-1"><IoMdArrowDown /></p>
              </div>
              <p>Date</p>
              <p>Amount (FCFA)</p>
              <p>Status</p>
              <p>Quick actions</p>
            </div>
            <p className="border-b-2 h-3"></p>
            <div>
            <p className="border-b-2 h-14"></p>
            <p className="border-b-2 h-14"></p>
            <p className="border-b-2 h-14"></p>
            <p className="border-b-2 h-14"></p>
            </div>
            {
              orders.map((order) => (
                <div key={order.id}>
                   <div>
                    <p><BsApp /></p>
                    <p>{order.id}</p>
                   </div>
                   <p>{order.date}</p>
                   <p>{order.amount}</p>
                   <p>{order.status}</p>
                </div>
              ))
            }
          </div>
        </div>

      </div>


    </div>
  )
}

export default VendorDashboard;