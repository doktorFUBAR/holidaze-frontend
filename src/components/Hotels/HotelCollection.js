import React from "react";
import { BASE_URL, HOTELS } from "../../constants/api";
import useFetch from "../../hooks/useFetch";

export default function HotelCollection() {
  const { loading, error, data } = useFetch(BASE_URL + HOTELS);
  console.log(BASE_URL+HOTELS)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
      <div className="hotel-grid">
        {data.map((place) => (
          <div key={place.id} className="hotel-card">
            <img
              src={place.Image[0].url}
              alt={place.Image[0].alternativeText}
            />
            <div className="hotel-card__content">
              <h2>{place.Title}</h2>
              <div className="price">
                <span>From </span>
                <span>{place.Price} NOK</span>
              </div>
              <div className="rating">{place.Rating}</div>
            </div>
          </div>
        ))}
      </div>
  );
}
