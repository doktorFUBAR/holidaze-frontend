import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Loader from "../components/Layout/Loader";
import Button from "../components/Common/Button";
import { GiRoundStar } from "react-icons/gi"
import { TiArrowBackOutline } from "react-icons/ti"
import { AiOutlineWifi, AiFillClockCircle } from "react-icons/ai"
import { MdFreeBreakfast } from "react-icons/md"
import Heading from "../components/Common/Heading"

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
    <>
    <div className="hotel-details">
    <Link to="/places">
          <Button text={<TiArrowBackOutline />} />
      </Link>
      <img
        src={data.place.Image[0].url}
        alt={data.place.Image[0].alternativeText}
        className="hotel-details__image"
      />
      <div className="hotel-card__content">
        <Heading text={data.place.Title} />
        <p className="hotel-details__description">{data.place.Description}</p>
        <article className="hotel-details__amenities">
        <div className="hotel-details__col">
          <AiFillClockCircle />
          <div>Check in: 15:00</div>
          <div>Check out: 12:00</div>
          </div>
        <div className="hotel-details__col"><AiOutlineWifi/> Free Wifi</div>
        <div className="hotel-details__col"><MdFreeBreakfast/> Breakfast included</div>
        </article>
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

    </>
  );
}
