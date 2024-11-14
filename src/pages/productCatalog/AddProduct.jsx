
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { FaArrowLeft } from "react-icons/fa";
import { apiAddProduct } from '../../vendorservices/product';


const AddProduct = () => {

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);

      const response = await apiAddProduct(formData);
      console.log(response.data)
      navigate("/productCatalog")
    } catch (error) {
      console.log("error", error)
    }
  };

  return (
    <div>
      <div className='flex'>
        <Sidebar />
        <div className=" flex flex-col gap-1 ml-80 mt-10">
          <div className='flex gap-2'>
            <Link to={"/productcatalog"} className='pt-5'><FaArrowLeft /></Link>
          <h1 className="font-bold text-[2rem]">Add Product</h1>
          </div>
          {/* Card Container for form */}
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-6 border border-black">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
                    name="price" />
                </div>
                
              </div>
              <div>
                  <span className="text-sm  text-black font-extrabold">availability</span>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Enter Price"
                    required
                    name="availability" />
                </div>
              <div>

                <span className="text-sm  text-black font-extrabold">Description</span>
                <textarea name="description" id="description" className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500" type="text"
                  placeholder="discription"
                  required
                ></textarea>
              </div>

              <div>
                <span className="text-sm  text-black font-extrabold">Cover </span>
                <input
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                  type="file"
                  placeholder="Enter URL"
                  name="image" />
              </div>


              <div className="bg-[#0d8a2e] text-white py-2 px-4 rounded-lg hover:bg-green-400 transition duration-300 text-center flex justify-center">
                <button type="submit">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;