import { CiBellOn } from "react-icons/ci";
import { FiTruck } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import { FaArrowUp } from "react-icons/fa6";
import Chart from "../assets/images/_Chart.png"

const ClientDashboard = () => {
    return (
        <div className="flex gap-10" >

            <Sidebar />

            <div className="float-right mb-10">
                <div className="flex mb-5">
                    <div>
                        <p className="text-2xl">Welcome</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex ml-96">
                        <CiBellOn className="text-4xl" />
                        <span className="bg-slate-50 shadow-md h-16 w-16 rounded-full">avatar</span>
                    </div>
                </div>

                <div className='flex border shadow-md rounded-lg w-max h-52 p-3 gap-3 pb-3 mb-10'>
                    <div className='bg-[#c5e0b5] border shadow-md rounded-lg w-72 h-44 p-2'>
                        <p className="text-white">Current Orders</p>
                        <p className="text-green-800 text-5xl">06</p>
                        <div className="flex pt-10">
                            <p className="text-green-800 font-bold text-sm"><FaArrowUp />40%</p>
                            <p className="text-white text-sm ">vs last month</p>
                            <img src={Chart} alt="" className="" />
                        </div>
                    </div>
                    <div className=' bg-[#5aaf71] border shadow-md rounded-lg w-72 h-44 p-2'>
                        <p className="text-white">Total Expenses (FCFA)</p>
                        <p className="text-[#c5e0b5] text-5xl">719 500</p>
                        <div className="flex pt-10">
                            <p className="text-green-800 font-bold text-sm"><FaArrowUp />12%</p>
                            <p className="text-white text-sm ">vs last month</p>
                            <img src={Chart} alt=""  className="text-white"/>

                        </div>
                    </div>
                    <div className='bg-[#c2d979] border shadow-md rounded-lg w-72 h-44 p-2'>
                    <p className="text-white">Outstanding Invoices</p>
                        <p className="text-green-800 text-5xl">03</p>
                        <div className="flex pt-10 ">
                            <p className="text-green-800 font-bold text-sm"><FaArrowUp />10%</p>
                            <p className="text-white text-sm ">vs last month</p>
                            <img src={Chart} alt=""  className="text-white"/>

                        </div>
                    </div>
                </div>

                <div className='border shadow-md rounded-lg w-auto h-3/6 mb-10'>
                    <p className='border-b-2 drop-shadow-sm text-green-950 font-bold text-xl p-3' >All Orders</p>
                    <div className='border-b-2 drop-shadow-sm flex justify-between p-2'>
                        <div className="flex gap-2">
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <p>Order ID</p>
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
                            <span className="text-xl"><FiTruck /></span>
                            <span className="text-xl"><FiFileText /></span>
                        </div>

                    </div>
                    <button className="flex float-end my-2 mx-2 border shadow rounded p-1 ">See More <FaArrowRight className="pt-1" /></button>
                </div>
            </div>

        </div>
    )
}

export default ClientDashboard;