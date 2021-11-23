import { motion } from "framer-motion";
import React from "react";
import Categories from "../components/Homepage/Categories";
import ExploreCta from "../components/Homepage/ExploreCta";
import FeaturedPlaces from "../components/Homepage/FeaturedPlaces";
import Hero from "../components/Homepage/Hero";

export default function HomePage() {
  return (
    <motion.div
      className="home-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <FeaturedPlaces />
      <div className="category-container">
        <h2 className="heading-medium">Sleep the way you want</h2>
        <p className="paragraph u-centered">
          Choose between hotels, bed &amp; breakfast and guesthouses.
        </p>
        <Categories />
      </div>
      <ExploreCta />
    </motion.div>
  );
}
