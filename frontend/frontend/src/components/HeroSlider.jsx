import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Delicious Pizza",
    description: "Fresh ingredients, fast delivery!",
    image: "/images/pizza.jpg",
  },
  {
    id: 2,
    title: "Juicy Burgers",
    description: "Tasty, crispy, and juicy!",
    image: "/images/burger.jpg",
  },
  {
    id: 3,
    title: "Tasty Pasta",
    description: "Authentic Italian flavors!",
    image: "/images/pasta.jpg",
  },
];

const HeroSlider = () => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[500px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative flex items-center justify-center h-[500px] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="text-white text-center z-10">
                <h2 className="text-4xl font-bold">{slide.title}</h2>
                <p className="text-lg mt-2">{slide.description}</p>
                <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                  Order Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
