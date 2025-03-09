import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-red-500">FoodEase</Link>
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="text-gray-700 hover:text-red-500">Home</Link></li>
          <li><Link to="/menu" className="text-gray-700 hover:text-red-500">Menu</Link></li>
          <li><Link to="/about" className="text-gray-700 hover:text-red-500">About</Link></li>
          <li><Link to="/contact" className="text-gray-700 hover:text-red-500">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
