import React, { useEffect, useState } from 'react'
import { apiDeleteProduct, apiGetSingleProduct } from '../../vendorservices/product';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { FaArrowLeft } from "react-icons/fa6";

const SingleProduct = () => {
  const [product, setProduct] = useState([])
  const { id } = useParams();

  const getProduct = async () => {
    try {
      const response = await apiGetSingleProduct(id);
      console.log(response);
      console.log(response.data);
      setProduct(response.data)
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteProduct(_id)
    } catch (error) {
      console.log('Error deleting advert', error)
    }
  }


  return (
    <div className="h-[100vh]">
      <div className='flex'>
        <Sidebar />
        <div className='flex flex-col'>
          <div className='flex gap-2 ml-3'>
            <p className='pt-2.5'><FaArrowLeft /></p>
            <p className="text-3xl font-semibold mb-2">Product</p>
          </div>
          <div className="flex flex-col h-[100vh] p-10 border shadow-lg w-[40vw] rounded-sm ml-16 text-[14px]">
            {product && (
              <>
                <img src={`https://savefiles.org/${product.icon}?shareable_link=503`} alt={product.title} className=" pt-2 " />
                <p className="pb-3">{product.stock}</p>
                <p className="pb-3">{product.title}</p>
                <p className="pb-3">{product.description}</p>
                <p className="pb-3">{product.price}</p>
                <div className='flex justify-between'>
                  <Link to={`/editproduct/${product.id}`} className="border-2 bg-green-700 border-green-700 p-1 px-7 rounded-lg">Edit</Link>
                  <button onClick={() => handleDelete(product.id)} className="border-2 p-1 px-5 rounded-lg bg-[#dc2626] border-[#dc2626]">Delete</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

export default SingleProduct;