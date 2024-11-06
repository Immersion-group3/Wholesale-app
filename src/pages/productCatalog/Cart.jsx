import { FaShoppingCart } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center border border-gray-300 rounded-lg mt-20 px-3 py-2 mb-7 max-w-sm">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 w-full outline-none text-gray-600"
        />
      </div>

      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
       <div>
        <span className="mr-2"></span>
        <IoIosClose className="cursor-pointer text-gray-500 hover:text-gray-700" />
        <h2 className="text-lg font-bold text-green-800 text-center">My Cart</h2>
        <hr />
        </div>

        <hr />
        <div className="flex flex-col items-center text-center mt-40">
          <FaShoppingCart className="w-16 h-16 mb-4 text-gray-300" />
          <p className="text-2xl">There are no products in your cart yet.</p>
          <p className="text-gray-500">Select items you desire on the left.</p>
        </div>

           <hr className="text-gray-700 mt-52"/> 
         <div className=" flex mt-28">
            
            <div className="flex flex-col justify-between  mt-6">
               <span className="font-semibold text-gray-600">Total Price</span>
               <span className="font-bold text-gray-900">0 Fcfa</span>
            </div>
           <button className="bg-green-600 text-white py-1 px-1 w-full rounded-lg mt-4">
            Checkout
           </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
