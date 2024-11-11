import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { useEffect, useState } from "react";


const ClientOrderDetails = () => {
    // const [orders, setOrders] = useState([]);
    // const getProducts = async () => {
    //     const response = apiGetOrders();
    //     console.log (response.data)
    //     setOrders(response.data);
    // }
    // useEffect(() => {
    //     getOrders();
    // },[])


    return (
        <div className="ml-6">
            {/* ClientOrderDetails */}
            <div>
                <div className="flex pt-7">
                    <div className="flex gap-3">
                        <Link to="/clientdash">
                            <FaArrowLeft className="mt-2" />
                        </Link>
                        <p className="text-2xl font-semibold">Order Details</p>
                    </div>

                    <div className="flex items-center gap-3 ml-96">
                        <span className="h-10 w-10 shadow rounded-full">avtr</span>
                        <div>
                            <p>Laurette Fouda</p>
                            <p>info@gmail.com</p>
                        </div>
                    </div>
                </div>
                <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>

            <div className="border shadow-md rounded-lg h-36 w-[60%] mb-5 p-2">
                <div className="flex gap-5">
                    <p className="font-semibold text-xl">Order #97-76651-65</p>
                    <div className="flex ml-60 gap-3">
                        <button className="flex items-center justify-center border shadow rounded-lg h-8 w-40 p-1 text-sm">
                            <BsDownload className="mr-2" />
                            Export as PDF
                        </button>
                        <button className="border shadow rounded-lg h-8 w-40 p-1 text-sm text-white bg-[#0b7427]">Duplicate Order</button>
                    </div>
                </div>
                <div className="flex gap-3 pt-20">
                    <p className="text-sm">Order Placed On:</p>
                    <p className="text-sm">Paid on:</p>
                    <p className="text-sm">Modified on:</p>
                </div>
            </div>


            {/* Client Order and Delivery Address */}
            <div className="flex gap-6 mb-8">
                <div className="border shadow-sm rounded-md h-56 w-[29%] p-3">
                    <div className="flex gap-24 border-b-[1px]">
                        <p className="text-xl text-[#a6c73a] font-bold">Client and Order</p>
                        <button className="border shadow rounded-md mb-1 p-2">Edit</button>
                    </div>
                    <p>Customer Name:</p>
                    <p>Email Address:</p>
                    <p>Mailing Address:</p>
                    <p>Payment Method:</p>
                </div>

                <div className="border shadow-sm rounded-md h-56 w-[29%] p-3">
                    <div className="flex gap-24 border-b-[1px]">
                        <p className="text-xl text-[#a6c73a] font-bold">Delivery Address</p>
                        <button className="border shadow rounded-md mb-1 p-2">Edit</button>
                    </div>
                    <p>Recipient Name:</p>
                    <p>Full Address:</p>
                    <p>Special Instructions:</p>
                    <p className="text-sm border p-1 m-1">We are located on the 3rd floor, apartment 12B</p>
                </div>
            </div>

            <div className="border shadow-sm rounded-md mb-10 h-96 w-[60%]">
                <p className="text-xl text-[#a6c73a] font-bold border-b-[1px] p-2 ">Ordered Items</p>
                <div className=" flex justify-around border-b-[1px] p-2 font-semibold text-[#475467]">

                    <p>Product Name</p>
                    <p>Quantity Ordered</p>
                    <p>Unit Price (Fcfa)</p>
                    <p>Total Price (Fcfa)</p>

                </div>

                <div className="grid grid-cols-4 border-b-[1px] p-2 text-center">
                    <p>Hi</p>
                    <p>Hi</p>
                    <p>Hi</p>
                    <p>Hi</p>

                    {/* {
                        getProducts.map((product, index) =>
                        console.log();
                    return)
                    } */}

                </div>
                <div className="grid grid-cols-4 border-b-[1px] p-2 text-center">
                    <div></div>
                    <div></div>
                    <div className="text-[#a6c73a] font-semibold">Subtotal:</div>
                    <div></div>
                </div>

                <div className="grid grid-cols-4 border-b-[1px] p-2 text-center">
                    <div></div>
                    <div></div>
                    <div className="text-[#a6c73a] font-semibold">Delivery:</div>
                    <div></div>
                </div>
                <div className="grid grid-cols-4 border-b-[1px] p-2 text-center">
                    <div></div>
                    <div></div>
                    <div className="text-[#a6c73a] font-semibold">Total:</div>
                    <div></div>
                </div>

            </div>


        </div>

    )
}

export default ClientOrderDetails;