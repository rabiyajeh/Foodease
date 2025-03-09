import React from "react";
import { motion } from "framer-motion";

const dishes = [
  { id: 1, name: "Mutton Karahi", description: "Classic delight with fresh mozzarella cheese", price: "$12.99", image: "/images/margherita.jpg", featured: true },
  { id: 2, name: "Shahi daal", description: "Loaded with fresh veggies and cheese", price: "$14.99", image: "/images/veggie_supreme.jpg", featured: false },
  { id: 3, name: "Beef Karahi", description: "Spicy paneer tikka with a twist", price: "$13.49", image: "/images/paneer_tikka.jpg", featured: true },
];

const FeaturedDishes = () => {
  return (
    <section id="menu" className="py-16 bg-gray-100">
      <motion.h2 
        className="text-5xl font-bold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: -40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }}
      >
        🍽️ Featured Dishes
      </motion.h2>

      <div className="container mx-auto px-8 grid md:grid-cols-3 gap-14 justify-center">
        {dishes.map((dish, index) => (
          <motion.div 
            key={dish.id}
            className="relative flex flex-col items-center bg-white p-6 rounded-full shadow-lg w-72 h-72 transform transition-transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Featured Badge */}
            {dish.featured && (
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                ⭐ FEATURED
              </span>
            )}

            {/* Dish Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-md">
              <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
            </div>

            {/* Dish Details */}
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">{dish.name}</h3>
            <p className="text-gray-600 text-sm text-center px-4">{dish.description}</p>
            <p className="text-xl font-bold text-red-500 mt-2">{dish.price}</p>

            {/* Order Now Button */}
            <button className="mt-4 px-5 py-2 bg-red-500 text-white rounded-full font-semibold text-sm transition-transform hover:scale-105 hover:bg-yellow-500">
              Order Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDishes;
