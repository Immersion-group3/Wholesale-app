import { FaSearch } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Cart = () => {
  return (
    <div className="flex flex-col">

      <div className="flex items-center border border-gray-300 rounded-lg mt-20 px-3 py-2 w-64 mb-7">
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
        <AiOutlineClose className="cursor-pointer text-gray-500 hover:text-gray-700" />
        <h2 className="text-lg font-bold text-green-800 text-center">My Cart</h2>
        <hr />
        </div>

      <div>
        <p className="text-gray-300">There are no products in your cart yet.</p>
        <p>Select items you desire on the left.</p> 
        <hr />
      </div>

      <div className="mt-40 text-lg"> {/* Changed "text-1g" to "text-lg" */}
        Total Price
      </div>
      <p>0 Fcfa</p>
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 w-full">
        Checkout
      </button>
    </div>

    </div> 
  );
};

export default Cart;