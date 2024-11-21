import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const LandingFooter = () => {
  return (
    <div className="bg-gray-100 border-t h-[60%]">
      {/* Upper Section */}
      <div className="bg-[#d8eacd] w-full py-8 text-center">
        <h3 className="font-bold text-2xl mb-4 text-gray-800">
          Choose fresh, local, and sustainable products!
        </h3>
        <p className="mb-6 text-gray-700">
          Join us today and enjoy fresh, local, and responsible products.
        </p>
        <div className="flex justify-center items-center gap-4">
          <Link to="/newsletter"><button className="px-6 py-2 bg-white border border-gray-300 rounded-md shadow-md ">
            Subscribe to the newsletter
          </button></Link>
         <Link to="/status"><button className="px-6 py-2 bg-white border border-gray-300 rounded-md shadow-md">Explore products
          </button></Link>
        </div>
      </div>

      {/* Contact Section */}
      <div className='bg-[#0d8a2e] w-full h-[50%] pt-[1em] pb-[1em]'>
            <h3 className='font-semibold text-[1.5em] text-center mb-[0.5em] text-white'>Contact Us!</h3>
            <div className='flex justify-center gap-x-[5%]'>
                <p className='text-white'><FontAwesomeIcon icon={faEnvelope} className='text-white mr-[1em]'/>lespotagersdebafou@gmail.com</p>
                <p className='text-white'><FontAwesomeIcon icon={faPhone} className='text-white mr-[1em]'/>693 484 927</p>
                <p className='text-white'><FontAwesomeIcon icon={faLocationDot} className='text-white mr-[1em] '/>BALI, 557 Rue Douala Manga Bell</p>
            </div>
        </div>
    </div>
  )
};

export default LandingFooter;
