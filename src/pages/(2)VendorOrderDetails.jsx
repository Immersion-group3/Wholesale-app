import React, { useState,useEffect } from 'react'
import VendorDashSidebar from '../components/VendorDashSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faDownload } from '@fortawesome/free-solid-svg-icons'
import { dummyOrders } from '../services(vendor)/dummyorders'

const VendorOrderDetails2 = () => {
//    const [orderDetails,setOrderDetails]=useState(null);

//    useEffect(()=>{
//     const fetchOrderDetails = ()=>{
//         setTimeout(()=>{
//             setOrderDetails(dummyOrders[0]);
//         },300);
//     };
//     fetchOrderDetails();
//    },[]);


    return (
        <div>
            <section className='h-[100vh] flex'>
                <div>
                    <VendorDashSidebar />
                </div>
                <div className='h-[100vh] flex-1 px-[3%]'>
                    <div className='h-[15%] border w-full py-[1em] flex '>
                        <div className='flex items-center w-[40%] '>
                            <FontAwesomeIcon icon={faArrowLeftLong} className='text-[1.2em] ' />
                            <h1 className='text-[1.5em] font-semibold ml-[0.5em] text-left'>Order Details</h1>

                        </div>

                        <div className='flex items-center ml-[40%] w-[20%] border'>
                            <p>Vendor Details</p>
                        </div>
                    </div>

                    <div className='h-[15%] border rounded-md mt-[1em] flex mb-[1em]'>
                        <div className='w-[60%] pl-[2em]'>
                            <div className='flex font-semibold'>
                                {/* <p>{`Order ${orderDetails.order[0].orderId}`} </p> */}
                                <p></p>
                            </div>
                            <p className='text-[#f79009]'>Status</p>
                            <div className='flex'>
                                <p className='w-[40%] mr-[20%] bg-[#F9FAFB] p-[0.3em] rounded-lg'>Date created</p>
                                <p className='w-[40%] bg-[#F9FAFB] p-[0.3em] rounded-lg'>Date paid</p>
                            </div>
                        </div>
                        <div className='flex gap-x-[2em] ml-auto mr-auto pt-[1em] '>
                            <button className='bg-[white] text-bold border-black border-2 h-[40%] px-4 rounded-md'><FontAwesomeIcon icon={faDownload} className='mr-[0.5em]' />Export as PDF</button>
                            <button className='bg-[#0d8a2e] text-bold h-[40%] px-4 text-white rounded-md' >Duplicate order</button>
                        </div>
                    </div>

                    <div className='flex h-[30%] w-[100%] gap-x-[1em]'>
                        <div className='border rounded-md w-[50%] flex-col px-[1em]'>
                            <div className='h-[20%] border-b-2'>
                                <h2 className='flex items-baseline font-bold text-[1.2em] text-[#0d8a2e]'>Client and Order</h2>
                            </div>
                            <div className='h-full text-[0.9em]'>
                                <div className='flex mb-[0.3em]'>
                                    <p className='font-medium mr-[0.5em]'>Customer Name :</p>
                                    <p>Hi</p>
                                </div>
                                <div className='flex mb-[0.3em]'>
                                    <p className='font-medium mr-[0.5em]'>Phone Number :</p>
                                    <p>Hi</p>
                                </div>
                                <div className='flex mb-[0.3em]'>
                                    <p className='font-medium mr-[0.5em]'>Email Address:</p>
                                    <p>Hi</p>
                                </div>
                                <div className='flex mb-[0.3em]'>
                                    <p className='font-medium mr-[0.5em]'>Mailing Address:</p>
                                    <p>Hi</p>
                                </div>
                                <div className='flex '>
                                    <p className='font-medium mr-[0.5em]'>Payment Method:</p>
                                    <p>Hi</p>
                                </div>

                            </div>
                        </div>
                        <div className='border rounded-md w-[50%] flex-col px-[1em]'>
                            <div className='h-[20%] border-b-2'>
                                <h2 className='flex items-baseline font-bold text-[1.2em] text-[#0d8a2e]'>Delivery Address</h2>
                            </div>
                            <div className='h-full text-[0.9em]'>
                                <div className='flex mb-[0.3em]'>
                                    <p className='font-medium mr-[0.5em]'>Recipient Name :</p>
                                    <p>Hi</p>
                                </div>
                                <div className='flex mb-[0.3em]'>
                                    <p className='font-medium mr-[0.5em]'>Full Address :</p>
                                    <p>Hi</p>
                                </div>
                                <div className='flex mb-[0.3em]'>
                                    <p className='font-medium mr-[0.5em]'>Special Instructions:</p>
                                    <p>Hi</p>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='flex flex-col h-auto w-[100%] gap-x-[1em] mt-[1em] border px-[1em]'>
                        <div className='h-[20%]'>
                            <h2 className='flex font-bold text-[1.2em] text-[#0d8a2e] border-b-2'>Ordered Items</h2>
                        </div>
                        <table className='text-left h-auto'>
                            <tr className='border'>
                                <th>Product Name</th>
                                <th>Quantity Ordered</th>
                                <th>Unit Price Fcfa</th>
                                <th>Total Price Fcfa</th>
                            </tr>
                            <tr className='border h-[100%]'>
                                <td>Hi</td>
                            </tr>
                        </table>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default VendorOrderDetails2