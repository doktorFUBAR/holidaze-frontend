import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Loader from "../Layout/Loader";
import { BASE_URL } from "../../constants/api";
import { GiRoundStar } from "react-icons/gi"

const FEATURED = gql`
  query GetFeatured {
    category(id: 1) {
      places {
        title
        rating
        image {
          url
          alternativeText
        }
        price
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
            <div key={place.id} className="hotel-card">
              <img
                src={BASE_URL+ place.image.url}
                alt={BASE_URL + place.image.alternativeText}
              />
              <div className="hotel-card__content">
                <h2>{place.title}</h2>
                <div className="price">
                  <span>From </span>
                  <span className="price-number">{place.price} NOK</span>
                </div>
                <div className="hotel-card__bottom">
                  <div className="rating"><span className="rating__icon"><GiRoundStar/></span>{place.rating}</div>
                  <div className="featured-badge">Popular</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
