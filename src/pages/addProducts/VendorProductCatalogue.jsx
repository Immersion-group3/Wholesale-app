import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';

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

const VendorProductCatalogue = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await apiAllProducts();
      const formattedProducts = response.data.map((product) => ({
        id: product._id,
        title: product.title,
        price: Number(product.price),
        stock: product.availability,
        description: product.description, // corrected
        image: product.image, // added
      }));
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='flex'>
        <Sidebar />
        <div className="flex flex-col w-full ml-10">
          <div className=''>
            <h2 className="text-3xl font-semibold mb-2">Product Catalog</h2>
            <p className="text-gray-500 mb-7">
              Explore our diverse selection of fresh agricultural produce.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            {/* Filters Section */}
            <div className="w-[60vw] pb-8">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <select className="border p-2 px-10 rounded-lg shadow-sm">
                    <option>Category</option>
                    <option value="all">All</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Cereals">Cereals</option>
                  </select>
                  <select className="border p-2 px-10 rounded-lg shadow-sm">
                    <option>Availability</option>
                    <option value="all">All</option>
                    <option value="available">Available</option>
                    <option value="out-of-stock">Out of stock</option>
                  </select>
                  <button className="text-red-600 border-2 p-1 px-5 rounded-lg">Reset</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">

            {/* Product Grid */}
            <div className="grid grid-cols-3 gap-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden shadow-sm h-[20rem] w-[18rem]"
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
    </div>
  )
}

export default VendorProductCatalogue;