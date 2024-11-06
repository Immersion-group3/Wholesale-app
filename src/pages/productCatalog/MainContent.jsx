import Sidebar from '../../components/Sidebar';
import ProductCatalog from './ProductCatalog/ProductCatalogue';
import Cart from'./ProductCatalog/Cart';



const MainContent= () =>{
  return (
    <div className='flex flex-row h-screen bg-gray-50'>

        <Sidebar/>

        <div>
            <ProductCatalog/>
            <Cart/>
        </div>  
    </div>
  );
}

export default MainContent