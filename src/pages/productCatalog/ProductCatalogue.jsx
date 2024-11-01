
import Filter from "./Filter";
import ProductList from "./Cart";
import Cart from "./ProductList";
import Sidebar from "../../components/Sidebar";


const ProductCatalogue = () => {

  return (
    <div className="flex">
      <Sidebar/>
      <section className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-2">Product Catalogue</h1>
        <p className="text-gray-500">Explore our diverse selection of fresh Agricultural produce</p>
        <ProductList/>
      </section>

      <aside className="w-1/4 p-4 bg-green-50">
         <Cart/>
      </aside>



    </div>
  )
}

export default ProductCatalogue;