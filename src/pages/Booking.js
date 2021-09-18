import { useQuery, gql } from "@apollo/client";
import Button from "../components/Common/Button";
import Loader from "../components/Layout/Loader";
import { useParams } from 'react-router';
import { React } from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL, BOOKING } from '../constants/api';
import axios from "axios";

const url = BASE_URL + BOOKING;


const schema = yup.object().shape({
    first_name: yup
      .string()
      .required("Please enter your first name."),
    last_name: yup
        .string()
        .required("Please enter your last name"),
    email: yup
        .string()
        .required("Please enter your email"),
    phone: yup
        .number()
        .required("Plase enter your phone number")
  });


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

export default function Booking() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { id } = useParams();
  const { loading, error, data } = useQuery(HOTEL, {
    variables: { id: id },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error...</p>;

  const hotelName = data.place.Title;
  console.log(typeof(hotelName))

  
const submitBooking = async (data) => {
  const formData = new FormData();
  formData.append("data", JSON.stringify({first_name: data.first_name, last_name: data.last_name, email: data.email, phone: data.phone, date_from: data.date_from, date_to: data.date_to, message: data.message, hotel_name: hotelName}));
  console.log(data)


  try {
          await axios.post(url, formData)
      }
      

   catch (error){
      console.log(error);
  }
}

  return (
    <div className="booking">
      <img
        src={data.place.Image[0].url}
        alt={data.place.Image[0].alternativeText}
        className="hotel-details__image"
      />
      <h2>{data.place.Title}</h2>

      <form onSubmit={handleSubmit(submitBooking)}>
                    <input {...register("first_name")} type="text" placeholder="Your first name"/>
                    {errors.first_name && <span>{errors.first_name.message}</span>}

                    <input {...register("last_name")} type="text" placeholder="Your last name"/>
                    {errors.last_name && <span>{errors.last_name.message}</span>}

                    <input {...register("email")} type="text" placeholder="Your email"/>
                    {errors.email && <span>{errors.email.message}</span>}

                    <input {...register("phone")} type="text" placeholder="Your phone number"/>
                    {errors.phone && <span>{errors.phone.message}</span>}

                    <input {...register("date_from")} type="date"/>
                    {errors.date_from && <span>{errors.date_from.message}</span>}

                    <input {...register("date_to")} type="date"/>
                    {errors.date_to && <span>{errors.date_to.message}</span>}

                    <textarea {...register("message")} placeholder="Your message"/>
                    {errors.message && <span>{errors.message.message}</span>}

                    


                    <Button text="Book now" type="submit" />
                </form>

    </div>
  )
}
