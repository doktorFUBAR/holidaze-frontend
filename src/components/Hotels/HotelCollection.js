import React from "react";
import { BASE_URL, HOTELS } from "../../constants/api";
import useFetch from "../../hooks/useFetch";
import { GiRoundStar } from "react-icons/gi"
import { Link } from "react-router-dom";

export default function HotelCollection() {
  const { loading, error, data } = useFetch(BASE_URL + HOTELS);
  console.log(BASE_URL+HOTELS)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
      <div className="hotel-grid">
        {data.map((place) => (
          <Link to={`/details/${place.id}`}>
          <div key={place.id} className="hotel-card">
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
             
            </div>
          </div>
          </Link>
        ))}
      </div>
  );
}
