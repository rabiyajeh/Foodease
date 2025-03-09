import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaStar, FaShippingFast, FaLeaf } from "react-icons/fa";

const features = [
  { id: 1, icon: <FaClock size={40} />, title: "Fast Delivery", description: "We ensure quick and hot delivery at your doorstep." },
  { id: 2, icon: <FaStar size={40} />, title: "Top Quality", description: "Our chefs prepare food with premium ingredients." },
  { id: 3, icon: <FaShippingFast size={40} />, title: "Easy Ordering", description: "Seamless ordering experience with secure payments." },
  { id: 4, icon: <FaLeaf size={40} />, title: "Fresh Ingredients", description: "We use only fresh and organic ingredients." },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-gray-100">
      <motion.h2 
        className="text-5xl font-bold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: -40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }}
      >
        Why Choose Us? 💡
      </motion.h2>

      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
        {features.map((feature, index) => (
          <motion.div 
            key={feature.id}
            className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <div className="w-20 h-20 flex items-center justify-center bg-red-500 text-white rounded-full shadow-md mb-4">
              {feature.icon}
            </div>

            {/* Feature Details */}
            <h3 className="text-2xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
