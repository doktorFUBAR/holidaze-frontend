import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Loader from "../components/Layout/Loader";
import { BASE_URL } from "../constants/api";

const HOTEL = gql`
  query getHotel($id: ID!) {
    place(id: $id) {
      title
      description
      image {
        url
        alternativeText
      }
      rating
      price
      id
    }
  }
`;

export default function HotelDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(HOTEL, {
    variables: { id: id },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error...</p>;

  return (
    <div className="hotel-details">
      <img
        src={BASE_URL + data.place.image.url}
        alt={BASE_URL + data.place.image.alternativeText}
      />
      <div className="hotel-card__content">
        <h2>{data.place.title}</h2>
        <p className="description">{data.place.description}</p>
        <div className="price">
          <span>From </span>
          <span className="price-number">{data.place.price} NOK</span>
        </div>
        <div className="rating">{data.place.rating}</div>
      </div>
    </div>
  );
}
