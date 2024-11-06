import React from 'react';

const products = [
  { id: 1, name: 'Butternut', price: '2500 Fcfa / Kg', stock: '8 kg available', image: 'path/to/butternut.jpg' },
  { id: 2, name: 'Carotte jaune', price: '1800 Fcfa / Kg', stock: 'Out of stock', image: 'path/to/carrot.jpg' },
  { id: 3, name: 'Céleri branche', price: '850 Fcfa/Kg', stock: '6 kg available', image: 'path/to/celery.jpg' },
  { id: 4, name: 'Courgette ancienne', price: '1200 Fcfa/Kg', stock: '150 kg available', image: 'path/to/courgette.jpg' },
  { id: 5, name: 'Hairicot vert', price: '900 Fcfa/Kg', stock: '85 kg available', image: 'path/to/hairicot.jpg' },
  { id: 6, name: 'pleurote fraiche', price: '1500 Fcfa/Kg', stock: '20 trays disponibles', image: 'path/to/pleurote.jpg' },

];

const ProductCatalog =() =>{
  return (
    <div className="flex-1 p-6">
      <h2 className="text-3xl font-semibold mb-2">Product Catalog</h2>
      <p className="text-gray-500 mb-4">Explore our diverse selection of fresh Agricultural produce.</p>
      
      <div className="flex items-center space-x-4 mb-6">
        <select className="border p-2 rounded w-36">
          <option>Category</option>
          <option value="all">All</option>
            <option value="Vegetables">Vegetables</option>
            <option value="fruits">Fruits</option>
            <option value="cereals">Cereals</option>

        </select>
        <select className="border p-2 rounded w-36">
          <option>Availability</option>
          <option value="all">All</option>
            <option value="available">Available</option>
            <option value="Out of Stock">Out of stock</option>

        </select>
        <button className="text-red-600">Reset</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 1g:grid-cols-4 1g:grid-cols-5 1g:grid-cols-6 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm">
            <img src={product.image} alt={product.name} className="h-32 w-full object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">{product.stock}</p>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-green-600 font-bold">{product.price}</p>
              <button className="bg-green-600 text-white py-2 px-4 mt-4 w-full rounded-lg">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog;
