

const ProductCard= () =>{
  return (
    <div className="border rounded-lg p-4 shawdow-md">
        <img className="w-full h-32 object-cover rounded-md " src="" alt="" />
        <h3 className="font-semibold mt-2">productName</h3>
        <p className="text-sm text-gray-700 font-bold">price</p>
        <p className="text-sm"></p>
        <button className="mt-2 bg-green-500 text-white py-1 px-2 rounded-lg hover:bg-gray-600">Add to Cart</button> 
    </div>
  );
};

export default ProductCard;