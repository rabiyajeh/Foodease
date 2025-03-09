import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [totalPrice, setTotalPrice] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    paymentMethod: "Credit Card",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cart]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    setCart([]);
    navigate("/order-confirmation");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      {/* Header */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6 flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
        <button
          onClick={() => navigate("/cart")}
          className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
        >
          Back to Cart
        </button>
      </div>

      {/* Cart Summary */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between border-b py-3">
                <p className="text-lg">{item.name} x {item.quantity}</p>
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className="flex justify-between mt-4 text-xl font-bold">
              <p>Total:</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>

      {/* Billing & Shipping Form */}
      <form onSubmit={handleCheckout} className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Billing & Shipping Info</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
          className="w-full p-3 border rounded-lg mt-4"
        />

        <div className="grid grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            placeholder="ZIP Code"
            required
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Payment Method */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">Payment Method</h2>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Easypaisa">Easypaisa</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>
        </div>

        {/* Checkout Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-green-500 text-white p-3 rounded-lg text-xl font-semibold hover:bg-green-600 transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
