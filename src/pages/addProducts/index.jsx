import React from 'react'
import Sidebar from '../../components/Sidebar';


const AddProducts = () => {
  return (
    <div>
      <div className='flex'>
        <Sidebar />
        <div>
          <div>
            <p className='text-[1.5rem] font-semibold'>Product Catalogue</p>
            <p className='text-[13px] text-[#5e697a]'>Id varius fringilla porttitor viverra egestas enim et urna. Sodales</p>
          </div>
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
          <div className='grid grid-cols-3 border-2 w-[17rem] h-[15rem] ml-3'>
            <div>
              <p>image</p>
              <p>availability</p>
              <div className='flex gap-4'>
                <p>title</p>
                <p>kilogram</p>
              </div>
              <p>Description</p>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProducts;