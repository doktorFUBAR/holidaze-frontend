import React from "react";
import { BASE_URL, HOTELS } from "../../constants/api";
import useFetch from "../../hooks/useFetch";

export default function HotelCollection() {
  const { loading, error, data } = useFetch(BASE_URL + HOTELS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div className="featured-section">
      <div className="hotel-grid">
        {data.map((place) => (
          <div key={place.id} className="hotel-card">
            <img
              src={BASE_URL + place.image.formats.thumbnail.url}
              alt={BASE_URL + place.image.alternativeText}
            />
            <div className="hotel-card__content">
              <h2>{place.title}</h2>
              <div className="price">
                <span>From </span>
                <span>{place.price} NOK</span>
              </div>
              <div className="rating">{place.rating}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
