import React from "react";
import Categories from "../components/Homepage/Categories";
import ExploreCta from "../components/Homepage/ExploreCta";
import FeaturedPlaces from "../components/Homepage/FeaturedPlaces";
import Hero from "../components/Homepage/Hero";

export default function HomePage() {
  return (
    <div className="home-wrapper">
      <Hero />
      <div className="category-container">
        <h2 className="heading-medium">Sleep the way you want</h2>
        <p className="paragraph u-centered">Choose between hotels, bed &amp; breakfast and guesthouses.</p>
        <Categories />
      </div>
      <ExploreCta />
      <FeaturedPlaces />
    </div>
  );
}