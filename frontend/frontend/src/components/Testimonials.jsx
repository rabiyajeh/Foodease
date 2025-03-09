import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { motion } from "framer-motion";

const reviews = [
  { id: 1, name: "John Doe", feedback: "Absolutely amazing service! My food arrived hot and fresh.", image: "/images/user1.jpg" },
  { id: 2, name: "Sarah Smith", feedback: "The flavors were incredible, and delivery was super fast!", image: "/images/user2.jpg" },
  { id: 3, name: "Michael Brown", feedback: "I love how easy it is to order my favorite meals here!", image: "/images/user3.jpg" },
  { id: 4, name: "Emma Wilson", feedback: "The best food delivery experience I've ever had!", image: "/images/user4.jpg" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-16 bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white">
      {/* Floating Stars for Aesthetic */}
      <motion.div
        className="absolute top-0 left-1/3 w-24 h-24 bg-white/10 blur-2xl rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.h2 
        className="text-5xl font-bold text-center mb-12 tracking-wide"
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        What Our Customers Say ✨
      </motion.h2>

      <div className="max-w-5xl mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={true}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="w-full"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="max-w-md">
              <motion.div 
                className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center transform transition-transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.6 }}
              >
                {/* User Image */}
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>

                {/* Feedback */}
                <p className="text-lg italic text-gray-200 mt-6">"{review.feedback}"</p>
                <h3 className="text-2xl font-semibold mt-4 text-gray-100">{review.name}</h3>

                {/* Floating Stars Animation */}
                <motion.div 
                  className="absolute -top-6 left-6 text-yellow-400 text-2xl"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >⭐</motion.div>

                <motion.div 
                  className="absolute -top-6 right-6 text-yellow-400 text-2xl"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >⭐</motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
