import { IoSearch } from "react-icons/io5";
import { LuBarChart2 } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { TbBox } from "react-icons/tb";
import { BsCreditCard, BsFileEarmarkText } from "react-icons/bs";
import Logo from "../assets/images/Logo.png";
import { FiSettings } from "react-icons/fi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { useState } from "react";

const VendorDashSidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeTab, setActiveTab] = useState("Dashboard");

    const handleActiveTab = (label) => {
        setActiveTab(label);
    };

    return (
        <div
            className={`bg-[#c5e0b5] transition-all duration-300 ${isExpanded ? 'w-[15vw]' : 'w-[5vw]'} h-full flex flex-col items-center`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            <img src={Logo} alt="Logo" className={`my-5 ${isExpanded ? 'w-2/3' : 'w-[3vw]'}`} />

            <div className={`bg-[#0D8A2E] text-white font-semibold w-full transition-all duration-300 ${isExpanded ? 'px-4' : 'px-0'} py-2`}>
                <div className={`flex items-center gap-2 mb-3 ${isExpanded ? 'bg-white text-slate-400 rounded-lg' : 'justify-center'}`}>
                    {isExpanded && <IoSearch className="text-lg" />}
                    {isExpanded && <input type="text" placeholder="Search" className="text-sm w-full py-2" />}
                </div>

                <div className="flex flex-col gap-4 items-center w-full mt-3">
                    <SidebarItem icon={<LuBarChart2 />} label="Dashboard" isExpanded={isExpanded} activeTab={activeTab} handleActiveTab={handleActiveTab} />
                    <SidebarItem icon={<FiShoppingCart />} label="Product Catalog" isExpanded={isExpanded} activeTab={activeTab} handleActiveTab={handleActiveTab} />
                    <SidebarItem icon={<TbBox />} label="Order Tracking" isExpanded={isExpanded} activeTab={activeTab} handleActiveTab={handleActiveTab}/>
                    <SidebarItem icon={<BsCreditCard />} label="Billing" isExpanded={isExpanded} activeTab={activeTab} handleActiveTab={handleActiveTab}/>
                    <SidebarItem icon={<FaRegFileAlt />} label="Order List" isExpanded={isExpanded} activeTab={activeTab} handleActiveTab={handleActiveTab}/>
                    <SidebarItem icon={<FiSettings />} label="Account & Settings" isExpanded={isExpanded} activeTab={activeTab} handleActiveTab={handleActiveTab}/>
                    <SidebarItem icon={<IoHelpBuoyOutline />} label="Help & Support" isExpanded={isExpanded} activeTab={activeTab} handleActiveTab={handleActiveTab}/>
                </div>

                <div className="flex items-center justify-between mt-auto p-4 w-full">
                    {isExpanded && (
                        <div className="text-xs">
                            <p>Laurette Fouda</p>
                            <p>l.fouda@gmail.com</p>
                        </div>
                    )}
                    <MdOutlineLogout className="text-lg" />
                </div>
            </div>
        </div>
    );
};

const SidebarItem = ({ icon, label, isExpanded, activeTab, handleActiveTab }) => (
    <div
        onClick={() => handleActiveTab(label)}
        className={`flex items-center gap-2 p-1 cursor-pointer w-full ${
            isExpanded ? 'px-2 py-1' : 'justify-center'
        } ${activeTab === label ? 'bg-[#a6c73a]' : ''} rounded-lg hover:bg-[#a6c73a]`}
    >
        <div className={`text-lg ${isExpanded ? '' : 'p-2 bg-[#095e1f] rounded-md'}`}>{icon}</div>
        {isExpanded && <p className="text-sm">{label}</p>}
    </div>
);

export default VendorDashSidebar;

