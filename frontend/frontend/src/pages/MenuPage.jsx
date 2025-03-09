import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaSearch, FaFilter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    const items = [
      { id: 1, name: "Classic Burger", price: 9.99, img: "/images/burger.jpg", category: "Burgers" },
      { id: 2, name: "Cheese Pizza", price: 12.99, img: "/images/pizza.jpg", category: "Pizzas" },
      { id: 3, name: "Pasta Alfredo", price: 10.99, img: "/images/pasta.jpg", category: "Pasta" },
      { id: 4, name: "Tacos", price: 8.99, img: "/images/tacos.jpg", category: "Tacos" },
      { id: 5, name: "Grilled Chicken", price: 11.99, img: "/images/chicken.jpg", category: "Special" },
    ];
    setMenuItems(items);
    setFilteredItems(items);
  }, []);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }];
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterItems(query, selectedCategory);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterItems(searchQuery, category);
  };

  const filterItems = (query, category) => {
    let filtered = menuItems.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
    if (category !== "All") {
      filtered = filtered.filter((item) => item.category === category);
    }
    setFilteredItems(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      {/* Header */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-6 flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Menu</h1>
        <button
          onClick={() => navigate("/cart")}
          className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          <FaShoppingCart className="mr-2" />
          Cart ({cart.length})
        </button>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-5xl flex items-center bg-white p-4 rounded-xl shadow-lg mb-6">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search for food..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-2 outline-none"
        />
      </div>

      {/* Filter Buttons */}
      <div className="w-full max-w-5xl flex justify-center space-x-4 mb-6">
        {["All", "Burgers", "Pizzas", "Pasta", "Tacos", "Special"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              selectedCategory === category
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Today's Special Section */}
      <div className="w-full max-w-5xl bg-yellow-100 shadow-lg rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔥 Today's Special</h2>
        <div className="flex flex-wrap gap-6">
          {menuItems
            .filter((item) => item.category === "Special")
            .map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transition transform hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-yellow-500"
                />
                <h2 className="mt-4 text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600 mt-2">${item.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-red-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transition transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-gray-200"
              />
              <h2 className="mt-4 text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600 mt-2">${item.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(item)}
                className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-red-600 transition"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">No items found.</p>
        )}
      </div>

      {/* Footer Button */}
      <button
        onClick={() => navigate("/cart")}
        className="mt-8 bg-gray-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-600 transition w-full max-w-md"
      >
        Go to Cart
      </button>
    </div>
  );
};

export default MenuPage;
