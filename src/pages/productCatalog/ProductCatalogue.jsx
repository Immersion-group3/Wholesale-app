import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import {
  apiAllProducts,
  apiAddToCart,
  apiSearch,
} from "../../services/services(allproducts)/product";
import loadingGif from "../../assets/images/loading.gif";
import { MdOutlineDeleteForever } from "react-icons/md";
import { TbArrowBack } from "react-icons/tb";
import VendCheckoutModal from "./vendCheckoutModal";
import { Link } from "react-router-dom";

const ProductCatalogue = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [wholesale, setWholesale] = useState([]);

  const getProducts = async () => {
    try {
      const response = await apiAllProducts();
      const formattedProducts = response.data.map((product) => ({
        id: product._id,
        title: product.title,
        price: Number(product.price),
        stock: product.availability,
        description: product.discription,
        icon: product.icon,
      }));
      console.log("products-->", formattedProducts)
      setProducts(formattedProducts);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);


  const handleSearch = async (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filter = JSON.stringify({
      title: { $regex: query, $options: "i" },
    });
    const response = await apiSearch(filter);
    setProducts(response.data);
  };

  const handleAddToCart = async (productId) => {
    try {
      const payload = { productId, quantity: 1 };
      const response = await apiAddToCart(payload);

      if (response && response.status === 200) {
        const product = products.find((prod) => prod.id === productId);

        if (product) {
          setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === productId);

            if (existingItem) {
              return prevCart.map((item) =>
                item.id === productId
                  ? { ...item, count: item.count + 1 }
                  : item
              );
            } else {
              return [...prevCart, { ...product, count: 1 }];
            }
          });
        }
      } else {
        console.error("Failed to add to cart:", response);
      }
    } catch (error) {
      console.error("Error adding product to cart", error);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem) {
        if (existingItem.count > 1) {
          return prevCart.map((item) =>
            item.id === productId ? { ...item, count: item.count - 1 } : item
          );
        } else {
          return prevCart.filter((item) => item.id !== productId);
        }
      }
      return prevCart;
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <img src={loadingGif} alt="loading" />
      </div>
    );
  }

  return (
    <div className="flex gap-6">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div>
          <h2 className="text-3xl font-semibold mb-2 ml-10">Product Catalog</h2>
          <p className="text-gray-500 mb-4">
            Explore our diverse selection of fresh agricultural produce.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <div className="h-[70vh] w-[60vw] p-4">
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
                <button
                  className="flex items-center font-semibold border border-gray-100 px-4 py-2 rounded-lg"
                  onClick={() => {
                    setStatus("");
                    setDate("");
                    setAmount("");
                  }}>
                  <span className="bg-red-600 text-white p-1 rounded-md mr-2">
                    <TbArrowBack />
                  </span>
                  <span className="text-red-600">Reset</span>
                </button>
              </div>
              <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="border rounded-lg overflow-hidden shadow-sm"
                    >
                      <Link to={`/singleproduct/${product.id}`} className='h-[35vh] w-[15vw]'>
                        <img src={`https://savefiles.org/${product.icon}?shareable_link=503`} alt="" className='h-[30vh] pt-2' />
                      </Link>
                      <div className="p-4">
                        <p className="text-sm text-gray-500 mb-1">
                          {product.stock}
                        </p>
                        <h3 className="text-lg font-semibold">
                          {product.title}
                        </h3>
                        <h3 className="text-lg font-semibold">
                          {product.description}
                        </h3>
                        <p className="text-green-600 font-bold">
                          {product.price} Fcfa
                        </p>
                        <button
                          onClick={() => handleAddToCart(product.id)}
                          className="bg-green-600 text-white py-2 px-4 mt-4 w-full rounded-lg"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="h-[70vh] w-[30vw] flex flex-col gap-1">
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mb-7 max-w-sm">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
                className="ml-2 w-full outline-none text-gray-600"
              />
            </div>

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <div className="flex justify-start gap-28 p-4">
                <IoIosClose className="cursor-pointer text-gray-500 hover:text-gray-700" />
                <h2 className="text-lg font-bold text-green-800">My Cart</h2>
              </div>
              <hr />
              <div className="flex flex-col items-start mt-10 p-4">
                {cart.length === 0 ? (
                  <>
                    <FaShoppingCart className="w-16 h-16 mb-4 text-gray-300" />
                    <p className="text-2xl">
                      There are no products in your cart yet.
                    </p>
                    <p className="text-gray-500">
                      Select items you desire on the left.
                    </p>
                  </>
                ) : (
                  <ul className="w-full">
                    {cart.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center py-3 border-2 p-3"
                      >
                        <span>
                          {item.title} (x{item.count})
                        </span>
                        <span>{item.price * item.count} Fcfa</span>
                        <button
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="text-red-600 ml-4"
                        >
                          <MdOutlineDeleteForever />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <hr className="text-gray-700 mt-10" />

              <div className="flex gap-6 w-full">
                <div className="flex flex-col items-center w-[20%] mt-4">
                  <span className="font-semibold text-sm text-gray-600">
                    Total Price
                  </span>
                  <span className="font-bold text-sm text-gray-900">
                    {calculateTotal()} Fcfa
                  </span>
                </div>
                <div className="w-[70%]">
                  <button
                    onClick={handleCheckout}
                    className="bg-green-600 text-white py-1 px-1 w-full rounded-lg mt-4"
                    disabled={cart.length === 0}
                  >
                    Checkout
                  </button>
                </div>
                {showModal && (
                  <VendCheckoutModal
                    calculateTotal={calculateTotal}
                    onClose={handleModalClose}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalogue;
