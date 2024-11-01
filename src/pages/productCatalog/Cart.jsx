

const Cart =() => {
  return (
    <div>
        <h2 className="text-lg font-bold">My Cart</h2>
        <p className="text-gray-500">There are no products in your cart yet.</p>
        <p>select items you desire on the left</p>
        <div className="mt-4 text-1g font-bold">Total Price</div>
        <p>0 Fcfa</p>
        <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 w-full">Checkout</button>
    </div>
  );
};

export default Cart;