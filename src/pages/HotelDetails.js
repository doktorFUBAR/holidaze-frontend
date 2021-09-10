import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Loader from "../components/Layout/Loader";

const HOTEL = gql`
  query getHotel($id: ID!) {
    hotel(id: $id) {
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
        src={"http://localhost:1337" + data.hotel.image.url}
        alt={"http://localhost:1337" + data.hotel.image.alternativeText}
      />
      <div className="hotel-card__content">
        <h2>{data.hotel.title}</h2>
        <p className="description">{data.hotel.description}</p>
        <div className="price">
          <span>From </span>
          <span className="price-number">{data.hotel.price} NOK</span>
        </div>
        <div className="rating">{data.hotel.rating}</div>
      </div>
    </div>
  );
}
