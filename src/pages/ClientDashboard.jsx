import { CiBellOn } from "react-icons/ci";
import { FiTruck } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";



const ClientDashboard = () => {
    return (
        <div className="float-right">ClientDashboard
            <div className="flex">
                <div>
                    <p className="text-2xl">Welcome</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                <div className="flex float-end">
                    <CiBellOn className="text-2xl" />
                    <span className="bg-blue-200 h-10 w-15 rounded-full">avatar</span>
                </div>
            </div>

            <div className='flex border shadow-md rounded-lg w-5/6 h-52 p-3 gap-3 pb-3 mb-5'>
                <div className='bg-[#c5e0b5] border shadow-md rounded-lg w-72 h-44'></div>
                <div className=' bg-[#5aaf71] border shadow-md rounded-lg w-72 h-44'></div>
                <div className='bg-[#c2d979] border shadow-md rounded-lg w-72 h-44'></div>
            </div>

            <div className='border shadow-md rounded-md w-5/6 h-96 mb-10'>
                <p className='border-b-2 drop-shadow-sm text-green-950 font-bold text-xl p-3' >All Orders</p>
                <div className='border-b-2 drop-shadow-sm flex justify-around'>
                    <p>Order ID</p>
                    <p>Date</p>
                    <p>Amount(FCFA)</p>
                    <p>Status</p>
                    <p>Quick Actions</p>
                </div>

                <div className='border-b-2 drop-shadow-sm flex gap-3 justify-around'>
                    <p>cmhcjdty</p>
                    <p>12/02/13</p>
                    <p>2,020</p>
                    <p>delivered</p>

                    <div className="flex gap-3">
                        <span className="text-xl"><FiTruck /></span>
                        <span className="text-xl"><FiFileText /></span>
                    </div>
 
                </div>
<button className="flex float-end">See More <FaArrowRight /></button>
            </div>

        </div>
    )
}

export default ClientDashboard;