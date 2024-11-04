import { IoSearch } from "react-icons/io5";
import { LuBarChart2 } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { TbBox } from "react-icons/tb";
import { BsCreditCard } from "react-icons/bs";
import { BsFileEarmarkText } from "react-icons/bs";
import Logo from "../assets/images/Logo.png"
import { FiSettings } from "react-icons/fi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { BsChevronUp } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div 
    className={`bg-[#c5e0b5] transition-all duration-300 ${isExpanded ? 'w-[20vw]' : 'w-[5vw]'} h-full`} 
    onMouseEnter={() => setIsExpanded(true)} onMouseLeave={() => setIsExpanded(false)}>
        <div className="w-[20vw] h-full">
            <img src={Logo} alt="" className="m-5 bg-[#c5e0b5]"/>
            <div className={`border-2 h-[130vh] w-[20vw] mt-5 rounded-t-3xl bg-[#0D8A2E] border-[#0D8A2E] text-white font-semibold transition-all duration-300 ${isExpanded ? 'w-[20vw]' : 'w-[5vw]'} h-full`}>
                <div className={`flex gap-2 border-2 m-5 p-1 rounded-lg bg-white text-slate-400 ${!isExpanded ? 'hidden' : ''}`}>
                    <p className="mt-1.5"><IoSearch /></p>
                    <p>Search</p>
                </div>
                <div className={`flex gap-2 ml-6 mb-3 ${!isExpanded ? '' : ''}`}>
                    <p className="mt-1.5 text-[20px]"><LuBarChart2 /></p>
                    {isExpanded && <p className="ml-1 mt-1">Dashboard</p>}
                </div>
                <div className={`flex gap-2 ml-6 mb-3 ${!isExpanded ? '' : ''}`}>
                    <p className="mt-1.5 text-[20px] "><FiShoppingCart /></p>
                    {isExpanded && <p className="pt-1 ml-1">Product Catalog</p>}
                </div>
                <div className={`flex gap-2 ml-6 mb-3 ${!isExpanded ? '' : ''}`}>
                    <p className="mt-1.5 text-[20px]"><TbBox /></p>
                    {isExpanded && <p className="mt-1 ml-1">Order Tracking</p>}
                </div>
                <div className={`flex gap-2 ml-6 mb-3 ${!isExpanded ? '' : ''}`}>
                    <p className="mt-1.5 font-semibold"><BsCreditCard /></p>
                    {isExpanded && <p className="ml-2">Biling</p>}
                </div>
                <div className={`flex gap-2 ml-6 mb-3 ${!isExpanded ? '' : ''}`}>
                    <p className="mt-1.5 text-[18px]"><FaRegFileAlt /></p>
                    {isExpanded && <p className="ml-1 mt-1">Order List</p>}
                </div>
                <div className={`flex gap-2 ml-6 mb-3 mt-80 ${!isExpanded ? '' : ''}`}>
                    <p className="mt-1.5 text-[20px]"><FiSettings /></p>
                    {isExpanded && <p className="ml-1 mt-1">Account and Settings</p>}
                </div>
                <div className={`flex gap-2 ml-6 mb-3 ${!isExpanded ? '' : ''}`}>
                    <p className="mt-1.5 text-[20px]"><IoHelpBuoyOutline /></p>
                    {isExpanded && <p className="ml-1 mt-1">Help and Support</p>}
                    {isExpanded && <p className="pt-2 ml-10 mb-6"><BsChevronUp /></p>}
                </div>
                <p className={`border-b-2 w-[18vw] ml-2 ${!isExpanded ? 'hidden' : ''}`}></p>
                <div className={`flex mt-5 ml-3 gap-3 ${!isExpanded ? '' : ''}`}>
                    <p className={`rounded-full border-2 h-12 w-12 ${isExpanded ? 'hidden' : ''}`}></p>
                    {isExpanded && 
                    (<div>
                        <p>Laurette Fouda</p>
                        <p className="text-[13px] font-light">l.fouda@gmail.com</p>
                    </div> )}
                    <p className={`text-[20px] font-bold mt-3 ${isExpanded ? 'ml-7' : 'ml-0'}`}><MdOutlineLogout /></p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Sidebar;