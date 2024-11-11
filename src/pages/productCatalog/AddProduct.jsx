




const AddProduct = () => {
 
  return (
    <div>
      <section className=" flex justify-center items-center flex-col gap-1">
      
        <h1 className="font-bold">Add Product</h1>
         {/* Card Container for form */}
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-6 border border-black">
          <form className="flex flex-col gap-3">
            <div className="flex gap-3"> 
            <div>
              <span className="text-sm text-black font-extrabold">Title</span>
              <input
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Enter Title"
                required
                name="title" />
            </div>
            <div>
              <span className="text-sm  text-black font-extrabold">price</span>
              <input
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Enter Price"
                required
                name="price"/>
            </div>
            </div>
            <div>

              <span className="text-sm  text-black font-extrabold">Cover Image</span>
              <input
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                type="file"
                placeholder="Enter URL"
                name="cover"/>
            
            </div>

            <div>
              <span className="text-sm  text-black font-extrabold">Description</span>
              <textarea name="summary" id="summary" className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500" type="text"
                placeholder="Description"
                required
                ></textarea>
            </div>

            
            <div className="bg-green-800 text-white py-2 px-4 rounded-lg hover:bg-green-400 transition duration-300 text-center flex justify-center">
              <button type="submit">Add Product</button>
            </div>
          </form>
        </div>
        
      </section>
      </div>
  );
}

export default AddProduct;