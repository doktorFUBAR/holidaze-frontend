import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Loader from "../Layout/Loader";
import { GiRoundStar } from "react-icons/gi"
import { motion } from "framer-motion";

const FEATURED = gql`
  query GetFeatured {
    category(id: 1) {
      places {
        Title
        Rating
        Image {
          url
          alternativeText
        }
        Price
        id
      }
    }
  }
`;

export default function FeaturedPlaces() {
  const { loading, error, data } = useQuery(FEATURED);

  if (loading) return <Loader />;
  if (error) return <p>Error</p>;

  return (
    <div className="featured-section">
      <h2 className="heading-medium">Popular Places</h2>
      <div className="hotel-grid">
        {data.category.places.map((place) => (
          <Link to={`/details/${place.id}`}>
            <motion.div
            key={place.id}
            className="hotel-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            >
            <div className="hotel-card__image-wrapper">
              <img
                src={place.Image[0].url}
                alt={place.Image[0].alternativeText}
              />
               <div className="rating"><span className="rating__icon"><GiRoundStar/></span>{place.Rating}</div>
            </div>
              <div className="hotel-card__content">
                <h2>{place.Title}</h2>
                <div className="price">
                  <span>From </span>
                  <span className="price-number">{place.Price} NOK</span>
                </div>
                <div className="hotel-card__bottom">
                  <div className="featured-badge">Popular</div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
