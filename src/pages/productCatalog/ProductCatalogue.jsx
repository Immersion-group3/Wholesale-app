
import Filter from "./Filter";
import ProductList from "./Cart";
import Cart from "./ProductList";
import Sidebar from "../../components/Sidebar";


const ProductCatalogue = () => {

  return (
    <div className="flex">
      <Sidebar/>

      <aside className="w-1/4 p-4 bg-green-50">
         <Cart/>
      </aside>
    
  
      <section className="flex p-4">
        <div>
        <h1 className="text-2xl font-bold mb-2">Product Catalogue</h1>
        <p className="text-gray-500">Explore our diverse selection of fresh Agricultural produce</p>

        {/* filter sec */}
       <div className="flex items-center justify-between mb-4">

        <Filter />


       </div>
       </div>
        <ProductList/>
     
      </section>

      



    </div>
  )
}

export default ProductCatalogue;