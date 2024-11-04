import { RxReset } from "react-icons/rx"

const Filter =() =>{
  return (
    <div className="flex space-x-4">
        {/* category box  */}
        <div>
          <label className="block text-sm font-medium">Category</label>
          <select className="mt-1 block w-full border border-gray-300 rounded-md">
            <option value="all">All</option>
            <option value="Vegetables">Vegetables</option>
            <option value="fruits">Fruits</option>
            <option value="cereals">Cereals</option>
        </select>
     </div>

     {/* availability box */}
     <div className="mb-4">
        <label className="block text-sm font-medium">Availability</label>
        <select className="block w-full mt-1 border border-gray-300 rounded-md">
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="Out of Stock"></option>
        </select>

     </div>  
 
        <button className="flex items-center space-x-2 px-1 py-1 border border-gray-300 rounded-lg shadow-sm hover:shadow-md"> 
        <div className="bg-red-500 text-white p-1 rounded-md">
        <RxReset size={13} />
      </div>
      <span className="text-red-500 font-medium">Reset</span>
    </button>


    
      
     
    </div>
  );
};

export default Filter;