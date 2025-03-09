import React from "react";
import HeroSlider from "../components/HeroSlider";
import Promotions from "../components/Promotions";
import SearchBar from "../components/SearchBar";
import FeaturedDishes from "../components/FeaturedDishes";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <SearchBar />
      <FeaturedDishes />
      <Promotions />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
