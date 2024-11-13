import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faDownload } from '@fortawesome/free-solid-svg-icons';
import { apiVendorGetOrders } from '../services(vendor)/getOrders';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { apiGetClientDetails } from '../services(vendor)/clientDetails';
import Sidebar from '../components/Sidebar';

const VendorOrderDetails2 = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [clientDetails, setClientDetails] = useState({
    client_id: "",
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrderDetails = async () => {
    try {
      const token =localStorage.getItem("authToken");
      const fetchOrderDetails = await apiVendorGetOrders()(
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const ordersData = fetchOrderDetails.data || [];
      setOrderDetails(ordersData);
    } catch (error) {
      console.error("Could not fetch order details! Please try again.");
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  // const fetchClientDetails = async () => {
  //   try {
  //     const token =localStorage.getItem("authToken");
  //     const fetchClientDetails = await apiGetClientDetails(
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     const clientData = fetchClientDetails.data || {};
  //     setClientDetails(clientData);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Could not get client details!");
  //     setError("Error fetching client details");
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchClientDetails();

  // }, []);

  return (
    <div>
      <section className='h-[100vh] flex'>
        <Sidebar/>
        <div className='h-[100vh] flex-1 px-8 py-4 bg-gray-50'>
          <div className='flex items-center justify-between mb-6'>
            <div className='flex items-center'>
              <Link to="/vendordash2"><FontAwesomeIcon icon={faArrowLeftLong} className='text-xl text-gray-600' /></Link>
              <h1 className='text-2xl font-semibold ml-3 text-gray-700'>Order Details</h1>
            </div>
            <div className='flex items-center space-x-6'>
              <IoIosNotificationsOutline className="text-3xl text-gray-500" />
              <div className="rounded-full border-2 h-10 w-10 bg-gray-300"></div>
            </div>
          </div>

          {/* Loading and Error States */}
          
              <div className='flex space-x-6 mb-6'>
                <div className='bg-white rounded-lg shadow-md p-4 w-1/2'>
                  <h3 className='text-xl font-semibold text-[#0d8a2e] border-b pb-2 mb-4'>Client and Order</h3>
                  <div className='text-sm text-gray-700 space-y-2'>
                    <p><span className='font-medium'>Customer Name:</span> </p>
                    <p><span className='font-medium'>Phone Number:</span> </p>
                    <p><span className='font-medium'>Email Address:</span></p>
                    <p><span className='font-medium'>Mailing Address:</span> </p>
                    <p><span className='font-medium'>Payment Method:</span></p>
                  </div>
                </div>
                <div className='bg-white rounded-lg shadow-md p-4 w-1/2'>
                  <h3 className='text-xl font-semibold text-[#0d8a2e] border-b pb-2 mb-4'>Delivery Address</h3>
                  <div className='text-sm text-gray-700 space-y-2'>
                    <p><span className='font-medium'>Recipient Name:</span></p>
                    <p><span className='font-medium'>Full Address:</span> </p>
                    <p><span className='font-medium'>Special Instructions:</span> Located on the 3rd floor, apartment 12B</p>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-md p-4'>
                <h3 className='text-xl font-semibold text-[#0d8a2e] border-b pb-2 mb-4'>Ordered Items</h3>
                <table className='w-full text-left'>
                  <thead>
                    <tr className='bg-gray-100'>
                      <th className='p-2'>Product Name</th>
                      <th className='p-2'>Quantity Ordered</th>
                      <th className='p-2'>Unit Price (Fcfa)</th>
                      <th className='p-2'>Total Price (Fcfa)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-t'>
                      <td className='p-2'>Carrots</td>
                      <td className='p-2'>3kg</td>
                      <td className='p-2'>1500</td>
                      <td className='p-2'>4500</td>
                    </tr>
                    {/* Repeat for other items as necessary */}
                  </tbody>
                </table>
              </div>

          
        </div>
      </section>
    </div>
  );
};

export default VendorOrderDetails2;
