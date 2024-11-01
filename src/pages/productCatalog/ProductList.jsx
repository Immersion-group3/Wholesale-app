import ProductCard from "./ProductCard";

const ProductList =({products}) =>{
  return (
    <div classname="grid grid-cols-3 gap-4">
        <ProductCard/>

    </div>
  );
};

export default ProductList;