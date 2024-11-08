import { FaArrowLeft } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";


const ClientOrderDetails = () => {
    return (
        <div>ClientOrderDetails
            <div>
                <div className="flex ">
                    <div className="flex">
                        <FaArrowLeft />
                        <p>Order Details</p>
                    </div>

                    <div className="flex mr-[45rem]">
                        <span>avtr</span>
                        <p>Laurette Fouda</p>
                        <p>info@gmailcom</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>

            <div className="border shadow-md rounded-md h-36 w-6/12 mb-3">
                <div className="flex gap-5">
                    <p>Order #97-76651-65</p>
                    <button className="border shadow rounded-sm h-8 w-40 p-1 text-sm"><BsDownload />Export as PDF</button>
                    <button className="border shadow rounded-sm h-8 w-40 p-1 text-sm">Duplicate Order</button>
                </div>
                <div className="flex gap-3">
                    <p className="text-sm">Order Placed On:</p>
                    <p className="text-sm">Paid on:</p>
                    <p className="text-sm">Modified on:</p>
                </div>
            </div>


            {/* Client Order and Delivery Address */}
            <div className="flex gap-2 mb-8">
                <div className="border shadow-sm rounded-md h-56 w-3/12 p-3">
                    <div className="flex gap-24">
                        <p className="text-xl">Client and Order</p>
                        <button className="border shadow rounded p-1">Edit</button>
                    </div>
                    <p>Customer Name:</p>
                    <p>Email Address:</p>
                    <p>Mailing Address:</p>
                    <p>Payment Method:</p>
                </div>

                <div className="border shadow-sm rounded-md h-56 w-3/12 p-3">
                    <div className="flex gap-24">
                        <p className="text-xl">Delivery Address</p>
                        <button className="border shadow rounded  p-1">Edit</button>
                    </div>
                    <p>Recipient Name:</p>
                    <p>Full Address:</p>
                    <p>Special Instructions:</p>
                </div>
            </div>

<div className="border shadow-sm rounded-md mb-10 h-96 w-6/12">
<p>Ordered Items</p>
<div>
    <p></p>
</div>
</div>


        </div>

    )
}

export default ClientOrderDetails;