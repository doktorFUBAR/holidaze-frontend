import React from "react";
import Categories from "../components/Homepage/Categories";
import FeaturedPlaces from "../components/Homepage/FeaturedPlaces";
import Hero from "../components/Homepage/Hero";
import Newsletter from "../components/Homepage/Newsletter";

export default function HomePage() {
  return (
    <div className="home-wrapper">
      <Hero />
      <div className="category-container">
        <h2 className="heading-medium">Sleep the way you want</h2>
        <Categories />
      </div>
      <Newsletter />
      <FeaturedPlaces />
    </div>
  );
}
