import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaShoppingCart, FaTrash } from "react-icons/fa";
import { apiGetall } from "../../services(client)/products";
import { IoSearch } from "react-icons/io5";
import { LuBarChart2 } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { TbBox } from "react-icons/tb";
import { BsCreditCard } from "react-icons/bs";
import Logo from "../../assets/images/Logo.png";
import { FiSettings } from "react-icons/fi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { BsChevronUp } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";

const GetAll = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [availability, setAvailability] = useState("");
  const [cart, setCart] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiGetall(token);
        const productData = response.data || []; // Default to empty array if no data
        setProducts(productData);
        setFilteredProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [token]);

  const filterProducts = () => {
    let result = products;
    if (category) result = result.filter((p) => p.category === category);
    if (availability)
      result = result.filter(
        (p) => p.available === (availability === "Available")
      );
    setFilteredProducts(result);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCartItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-[#c5e0b5] transition-all duration-300 ${
          isExpanded ? "w-[18vw]" : "w-[5vw]"
        } h-full`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="w-[20vw] h-full">
          <img
            src={Logo}
            alt=""
            className={`m-5 bg-[#c5e0b5] ${isExpanded ? "" : "w-[3vw]"}`}
          />
          <div
            className={`border-2 h-[130vh] w-[20vw] mt-5 rounded-t-2xl bg-[#0D8A2E] border-[#0D8A2E] text-white font-semibold transition-all duration-300 ${
              isExpanded ? "w-[18vw]" : "w-[5vw]"
            } h-full`}
          >
            <div
              className={`flex gap-2 border-2 m-5 p-1 rounded-lg bg-white border-white text-slate-400 ${
                !isExpanded ? "hidden" : ""
              }`}
            >
              <p className="mt-1.5">
                <IoSearch />
              </p>
              {isExpanded && <p>Search</p>}
            </div>
            <div
              className={`flex gap-2 mb-3  hover:bg-[#a6c73a] py-1 px-2 mr-3 hover:rounded-lg ${
                !isExpanded ? "" : ""
              }`}
            >
              <p
                className={`mt-1.5 text-[20px] ${
                  !isExpanded
                    ? "border-2 border-[#095e1f] bg-[#095e1f] rounded-md  py-2 px-2 flex items-center justify-center mt-5 mb-1"
                    : "mt-1.5"
                }`}
              >
                <LuBarChart2 />
              </p>
              {isExpanded && <p className="ml-1 mt-1">Dashboard</p>}
            </div>
            <div
              className={`flex gap-2 mb-3  hover:bg-[#a6c73a] py-1 px-2  mr-3 hover:rounded-lg ${
                !isExpanded ? "" : ""
              }`}
            >
              <p
                className={`mt-1.5 text-[20px] ${
                  !isExpanded
                    ? "border-2 border-[#095e1f] bg-[#095e1f] rounded-md  py-2 px-2"
                    : ""
                }`}
              >
                <FiShoppingCart />
              </p>
              {isExpanded && <p className="pt-1 ml-1">Product Catalog</p>}
            </div>
            <div
              className={`flex gap-2 mb-3 hover:bg-[#a6c73a] py-1 px-2  mr-3 rounded-lg ${
                !isExpanded ? "" : ""
              }`}
            >
              <p
                className={`mt-1.5 text-[20px] ${
                  !isExpanded
                    ? "border-2 border-[#095e1f] bg-[#095e1f] rounded-md  py-2 px-2"
                    : ""
                }`}
              >
                <TbBox />
              </p>
              {isExpanded && <p className="mt-1 ml-1">Order Tracking</p>}
            </div>
            <div
              className={`flex gap-2 mb-3 hover:bg-[#a6c73a] py-1 px-2 mr-3 hover:rounded-lg ${
                !isExpanded ? "" : ""
              }`}
            >
              <p
                className={`mt-1.5 text-[20px] ${
                  !isExpanded
                    ? "border-2 border-[#095e1f] bg-[#095e1f] rounded-md  py-2 px-2"
                    : ""
                }`}
              >
                <BsCreditCard />
              </p>
              {isExpanded && <p className="ml-2">Biling</p>}
            </div>
            <div
              className={`flex gap-2 mb-3 hover:bg-[#a6c73a] py-1 px-2 mr-3 hover:rounded-lg ${
                !isExpanded ? "" : ""
              }`}
            >
              <p
                className={`mt-1.5 text-[20px] ${
                  !isExpanded
                    ? "border-2 border-[#095e1f] bg-[#095e1f] rounded-md  py-2 px-2"
                    : ""
                }`}
              >
                <FaRegFileAlt />
              </p>
              {isExpanded && <p className="ml-1 mt-1">Order List</p>}
            </div>
            <div
              className={`flex gap-2 mb-3 mt-80 hover:bg-[#a6c73a] py-1 px-2 mr-3 hover:rounded-lg ${
                !isExpanded ? "" : ""
              }`}
            >
              <p
                className={`mt-1.5 text-[20px] ${
                  !isExpanded
                    ? "border-2 border-[#095e1f] bg-[#095e1f] rounded-md  py-2 px-2"
                    : ""
                }`}
              >
                <FiSettings />
              </p>
              {isExpanded && <p className="ml-1 mt-1">Account and Settings</p>}
            </div>
            <div
              className={`flex gap-2 ml-2 mb-3 hover:bg-[#a6c73a] hover:py-1 hover:px-2  hover:mr-3 hover:rounded-lg ${
                !isExpanded ? "" : ""
              }`}
            >
              <p
                className={`mt-1.5 text-[20px] ${
                  !isExpanded
                    ? "border-2 border-[#095e1f] bg-[#095e1f] rounded-md  py-2 px-2"
                    : ""
                }`}
              >
                <IoHelpBuoyOutline />
              </p>
              {isExpanded && <p className="ml-1 mt-1">Help and Support</p>}
              {isExpanded && (
                <p className="pt-2 ml-5 mb-6">
                  <BsChevronUp />
                </p>
              )}
            </div>
            <p
              className={`border-b-2 w-[14vw] ml-2 ${
                !isExpanded ? "hidden" : ""
              }`}
            ></p>
            <div
              className={`flex mt-5 ml-2 gap-3 hover:bg-[#a6c73a] hover:py-1 hover:px-2 hover:ml-2 hover:mr-3 hover:rounded-lg ${
                !isExpanded ? "" : ""
              }`}
            >
              <p
                className={`rounded-full border-2 h-12 w-12 ${
                  isExpanded ? "hidden" : ""
                }`}
              ></p>
              {isExpanded && (
                <div>
                  <p>Laurette Fouda</p>
                  <p className="text-[13px] font-light">l.fouda@gmail.com</p>
                </div>
              )}
              {isExpanded && (
                <p className="text-[20px] font-bold mt-3">
                  <MdOutlineLogout />
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex w-full p-5 gap-6">
        {/* Product Catalog */}
        <div className="w-2/3">
          <h2 className="text-2xl font-bold">Product Catalog</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="flex gap-4 mt-4">
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 border rounded text-[#a6c73a]"
            >
              <option value="">Category</option>
              <option value="Fruits">Fruits</option>
              <option value="Vegetables">Vegetables</option>
            </select>
            <select
              onChange={(e) => setAvailability(e.target.value)}
              className="p-2 border rounded text-[#a6c73a]"
            >
              <option value="">Availability</option>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </select>
            <button
              onClick={filterProducts}
              className="p-2 bg-blue-500 text-white rounded"
            >
              Apply Filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
  {Array.isArray(filteredProducts) && filteredProducts.map((product) => (
    <div key={product.id} className="border rounded-lg p-4 shadow-md flex flex-col">
      {/* Image */}
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded" />
      
      {/* Availability on top of Title */}
      <p className={`text-sm font-semibold mt-2 ${product.availability === 'yes' ? 'text-[#0D8A2E]' : 'text-[#a6c73a]'}`}>
        {product.availability === 'yes' ? 'In Stock' : 'Out of Stock'}
      </p>

      {/* Title and Price in the same row */}
      <div className="flex justify-between items-center mt-2">
        <h3 className="font-bold text-lg">{product.title}</h3>
        <p className="text-[#0d8a2e] font-bold text-sm">{product.price} FCFA/kg</p>
      </div>

      {/* Description from API */}
      <p className="text-gray-500 text-sm mt-2">{product.discription}</p>
      
      {/* Add to Cart Button */}
      <button 
        onClick={() => addToCart(product)}
        className="mt-3 p-2 bg-[#0D8A2E] text-white rounded hover:bg-green-600 flex items-center"
      >
        <span className="mr-2">+</span> Add to Cart
      </button>
    </div>
  ))}
</div>

        </div>

        {/* Cart */}
        <div className="w-1/3 border-l-2 p-3">
          <h2 className="text-xl font-bold">My Cart</h2>
          {cart.length > 0 ? (
            <div>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-2 border-b"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p>{item.price * item.quantity} FCFA</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500"
                    >
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="text-green-500"
                    >
                      <FaPlus />
                    </button>
                    <button
                      onClick={() => clearCartItem(item.id)}
                      className="text-gray-500"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
              <p className="mt-4 font-bold">Total: {totalPrice} FCFA</p>
              <button className="mt-2 p-2 bg-blue-500 text-white rounded">
                Checkout
              </button>
            </div>
          ) : (
            <div className="text-center">
              <p>😞 There are no products in your cart yet.</p>
              <p>Select products from the catalog to add to your cart.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetAll;
