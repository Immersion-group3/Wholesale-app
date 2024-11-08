import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import { useEffect,useState } from "react";
import { apiAllProducts } from "../../services/services(allproducts)/product";
import loadingGif from '../../assets/images/loading.gif'
// const products = [
//   {
//     id: 1,
//     name: "Butternut",
//     price: "2500 Fcfa / Kg",
//     stock: "8 kg available",
//     image: "path/to/butternut.jpg",
//   },
//   {
//     id: 2,
//     name: "Carotte jaune",
//     price: "1800 Fcfa / Kg",
//     stock: "Out of stock",
//     image: "path/to/carrot.jpg",
//   },
//   {
//     id: 3,
//     name: "Céleri branche",
//     price: "850 Fcfa/Kg",
//     stock: "6 kg available",
//     image: "path/to/celery.jpg",
//   },
//   {
//     id: 4,
//     name: "Courgette ancienne",
//     price: "1200 Fcfa/Kg",
//     stock: "150 kg available",
//     image: "path/to/courgette.jpg",
//   },
//   {
//     id: 5,
//     name: "Hairicot vert",
//     price: "900 Fcfa/Kg",
//     stock: "85 kg available",
//     image: "path/to/hairicot.jpg",
//   },
//   {
//     id: 6,
//     name: "Pleurote fraiche",
//     price: "1500 Fcfa/Kg",
//     stock: "20 trays disponibles",
//     image: "path/to/pleurote.jpg",
//   },
// ];




const ProductCatalogue = () => {
  const [products, setProducts] = useState([]);
const [loading ,setLoading] = useState(true);

  const getProducts= async()=>{
    try {
      const response = await apiAllProducts();
      setProducts(response.data)
      
    } catch (error) {
      console.error("error fetching product",error)
    }finally{
      setLoading(false)
    }
  }
   useEffect(() =>{
    getProducts();
   },[])

   if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <img src={loadingGif} alt="loading" />
      </div>
    );
  }
    


  return (
    <div className="flex gap-6">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Product Catalog</h2>
          <p className="text-gray-500 mb-4">
            Explore our diverse selection of fresh agricultural produce.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          {/* Filters Section */}
          <div className="h-[70vh] w-[60vw] p-4">
            {/* <div className="h-[70vh] w-[70vw] bg-slate-400 p-4"> */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <select className="border p-2 rounded w-36">
                  <option>Category</option>
                  <option value="all">All</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Fruits">Fruits</option>
                  <option value="Cereals">Cereals</option>
                </select>
                <select className="border p-2 rounded w-36">
                  <option>Availability</option>
                  <option value="all">All</option>
                  <option value="available">Available</option>
                  <option value="out-of-stock">Out of stock</option>
                </select>
                <button className="text-red-600">Reset</button>
              </div>
              <div className="w-full">
                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="border rounded-lg overflow-hidden shadow-sm"
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-32 w-full object-cover"
                      />
                      <div className="p-4">
                        <p className="text-sm text-gray-500 mb-1">
                          {product.stock}
                        </p>
                        <h3 className="text-lg font-semibold">
                          {product.title}
                        </h3>
                        <h3 className="text-lg font-semibold">
                          {product.discription}
                        </h3>
                        <p className="text-green-600 font-bold">
                          {product.price}
                        </p>
                        <button className="bg-green-600 text-white py-2 px-4 mt-4 w-full rounded-lg">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Additional Section */}
          <div className="h-[70vh] w-[30vw]  flex flex-col gap-1">
            {/* <div className="h-[70vh] w-[30vw] bg-zinc-500 flex flex-col gap-4"> */}
            <div className="flex items-center border border-gray-300 rounded-lg  px-3 py-2 mb-7 max-w-sm">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="ml-2 w-full outline-none text-gray-600"
              />
            </div>

            {/* Cart section */}
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <div className="flex justify-start gap-28 p-4">
                <div>
                  <IoIosClose className="cursor-pointer text-gray-500 hover:text-gray-700" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-green-800">
                    My Cart
                  </h2>
                </div>
              </div>
              <hr />
              <div className="flex flex-col items-center text-center mt-10 p-16">
                <FaShoppingCart className="w-16 h-16 mb-4 text-gray-300" />
                <p className="text-2xl">
                  There are no products in your cart yet.
                </p>
                <p className="text-gray-500">
                  Select items you desire on the left.
                </p>
              </div>
              <hr className="text-gray-700 mt-10" />

              <div className="flex gap-6 w-full">
                <div className="flex  flex-col items-center w-[20%] mt-4 ">
                  <span className="font-semibold text-sm text-gray-600">
                    Total Price
                  </span>
                  <span className="font-bold text-sm text-gray-900">
                    0 Fcfa
                  </span>
                </div>
                <div className="w-[70%]">
                  <button className="bg-green-600 text-white py-1 px-1 w-full rounded-lg mt-4">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalogue;
