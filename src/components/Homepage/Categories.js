import React from "react";
import Hotels from "../../assets/hotels.jpg";
import BnB from "../../assets/bnb.jpg";
import Guesthouses from "../../assets/guesthouses.jpg";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Categories() {
  return (
    <div className="categories">
      <div className="slider-container">

        <div className="category">
        <Link to="/places">
          <div className="category-img-container">
            <img className="categories__image" src={Hotels} alt="Hotels" />
          </div>
          <h5 className="category-title">
            Hotels{" "}
            <span className="arrow-icon">
              <HiOutlineArrowNarrowRight />
            </span>
          </h5>
        </Link>
        </div>
 
        <div className="category">
        <Link to="/places">
          <div className="category-img-container">
            <img
              className="categories__image"
              src={BnB}
              alt="Bed and breakfast"
            />
          </div>
          <h5 className="category-title">
            Bed &amp; Breakfast{" "}
            <span className="arrow-icon">
              <HiOutlineArrowNarrowRight />
            </span>
          </h5>
          </Link>
        </div>

        <div className="category">
        <Link to="/places">
          <div className="category-img-container">
            <img
              className="categories__image"
              src={Guesthouses}
              alt="Guesthouses"
            />
          </div>
          <h5 className="category-title">
            Guesthouses{" "}
            <span className="arrow-icon">
              <HiOutlineArrowNarrowRight />
            </span>
          </h5>
          </Link>
        </div>

      </div>
    </div>
  );
}
