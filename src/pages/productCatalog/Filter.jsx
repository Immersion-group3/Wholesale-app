

const Filter =() =>{
  return (
    <div>
        <h2 className="mb-2 font-semibold">Filters</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Category</label>
          <select className="mt-1 block w-full border border-gray-300 rounded-md">
            <option value="all">All</option>
            <option value="Vegetables">Vegetables</option>
            <option value="fruits">Fruits</option>
            <option value="cereals">Cereals</option>
        </select>
     </div>
     <div className="mb-4">
        <label className="block text-sm font-medium">Availability</label>
        <select className="block w-full mt-1 border border-gray-300 rounded-md">
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="Out of Stock"></option>
        </select>
        <button className="mt-4 text-red-500">Reset</button>
     </div>
    </div>
  );
};

export default Filter;