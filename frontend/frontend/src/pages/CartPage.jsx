import React, { useState, useEffect } from "react";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl flex overflow-hidden">
        <div className="w-1/3 bg-gray-200 p-10 flex flex-col justify-center items-center">
          <FaShoppingCart className="text-6xl text-red-600" />
          <h2 className="text-2xl font-semibold mt-4">Your Shopping Cart</h2>
          <p className="text-sm text-gray-600 mt-2 text-center">
            This is a clean and responsive shopping cart layout with a modern UI design.
          </p>
        </div>
        <div className="w-2/3 p-10">
          {cartItems.length === 0 ? (
            <p className="text-xl text-gray-700 text-center">Your cart is empty.</p>
          ) : (
            <div>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-3">Item</th>
                    <th className="py-3">Qty</th>
                    <th className="py-3">Price</th>
                    <th className="py-3">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-4 flex items-center">
                        <img src={item.img} alt={item.name} className="w-12 h-12 object-cover rounded mr-4" />
                        {item.name}
                      </td>
                      <td className="py-4">
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                          className="w-16 text-center border rounded p-1"
                        />
                      </td>
                      <td className="py-4">${item.price.toFixed(2)}</td>
                      <td className="py-4">
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-6 text-right">
                <h2 className="text-2xl font-semibold">Total: ${calculateTotal()}</h2>
                <button
                  onClick={handleCheckout}
                  className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
          <button
            onClick={() => navigate("/menu")}
            className="mt-6 bg-gray-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-600 w-full"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
