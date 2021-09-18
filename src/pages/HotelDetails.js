import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Loader from "../components/Layout/Loader";
import Button from "../components/Common/Button";
import { GiRoundStar } from "react-icons/gi"

const HOTEL = gql`
  query getHotel($id: ID!) {
    place(id: $id) {
      Title
      Description
      Image {
        url
        alternativeText
      }
      Rating
      Price
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
        src={data.place.Image[0].url}
        alt={data.place.Image[0].alternativeText}
        className="hotel-details__image"
      />
      <div className="hotel-card__content">
        <h2>{data.place.Title}</h2>
        <p className="hotel-details__description">{data.place.Description}</p>
        <div className="hotel-details__price">
          <span>From </span>
          <span className="price-number">{data.place.Price} NOK</span>
        </div>
        <div className="rating"><span className="rating__icon"><GiRoundStar/></span>{data.place.Rating}</div>
        <Link to={`/booking/${data.place.id}`}>
          <Button text="Book now"/>
        </Link>
      </div>
    </div>
  );
}
