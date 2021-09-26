import { useQuery, gql } from "@apollo/client";
import Button from "../components/Common/Button";
import Loader from "../components/Layout/Loader";
import { useParams } from "react-router";
import { React, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL, BOOKING } from "../constants/api";
import axios from "axios";
import { ImCheckboxChecked } from "react-icons/im";
import Heading from "../components/Common/Heading";
import { motion } from "framer-motion";

const url = BASE_URL + BOOKING;

const schema = yup.object().shape({
  first_name: yup.string().required("Please enter your first name."),
  last_name: yup.string().required("Please enter your last name"),
  email: yup.string().required("Please enter your email"),
  phone: yup
    .number()
    .required("Please enter your phone number")
    .positive()
    .integer(),
  date_from: yup.date().required("A check-in date is required"),
  date_to: yup.date().required("A check-out date is required"),
  message: yup.string().required("Please enter a message"),
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
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitMessage, setSubmitMessage] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { id } = useParams();
  const { loading, error, data } = useQuery(HOTEL, {
    variables: { id: id },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error...</p>;

  const hotelName = data.place.Title;

  const submitBooking = async (data) => {
    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        date_from: data.date_from,
        date_to: data.date_to,
        message: data.message,
        hotel_name: hotelName,
      })
    );

    setSubmitting(true);
    setSubmitError(null);

    try {
      await axios.post(url, formData);
    } catch (error) {
      setSubmitError(error.toString());
    } finally {
      setSubmitting(false);
      reset({});
      setSubmitMessage(true);
    }
  };

  return (
    <motion.div
      className="booking"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className="booking__header">
        <img
          src={data.place.Image[0].url}
          alt={data.place.Image[0].alternativeText}
          className="hotel-details__image"
        />

        <Heading text={`Book ${data.place.Title} now!`} />
      </header>

      <form onSubmit={handleSubmit(submitBooking)} className="form">
        <fieldset disabled={submitting}>
          <label for="first_name" className="form__label">
            First name
          </label>
          <input
            {...register("first_name")}
            type="text"
            placeholder="Your first name"
          />
          {errors.first_name && (
            <span className="form-error">{errors.first_name.message}</span>
          )}

          <label for="last_name" className="form__label">
            Last name
          </label>
          <input
            {...register("last_name")}
            type="text"
            placeholder="Your last name"
          />
          {errors.last_name && (
            <span className="form-error">{errors.last_name.message}</span>
          )}

          <label for="email" className="form__label">
            Email
          </label>
          <input {...register("email")} type="text" placeholder="Your email" />
          {errors.email && (
            <span className="form-error">{errors.email.message}</span>
          )}

          <label for="phone" className="form__label">
            Phone
          </label>
          <input
            {...register("phone")}
            type="text"
            placeholder="Your phone number"
          />
          {errors.phone && (
            <span className="form-error">{errors.phone.message}</span>
          )}

          <label for="date_from" className="form__label">
            Check-in
          </label>
          <input {...register("date_from")} type="date" />
          {errors.date_from && (
            <span className="form-error">{errors.date_from.message}</span>
          )}

          <label for="date_to" className="form__label">
            Check-out
          </label>
          <input {...register("date_to")} type="date" />
          {errors.date_to && (
            <span className="form-error">{errors.date_to.message}</span>
          )}

          <label for="message" className="form__label">
            Message
          </label>
          <textarea {...register("message")} placeholder="Your message" />
          {errors.message && (
            <span className="form-error">{errors.message.message}</span>
          )}

          <Button
            disabled={submitting}
            type="submit"
            className="btn-main"
            text={submitting ? "Sending..." : "Book now"}
          />
          {submitMessage ? (
            <p className="form-success">
              <ImCheckboxChecked /> Thank you for contacting us!
            </p>
          ) : null}
        </fieldset>
        {submitError && <span className="form-error">{submitError}</span>}
      </form>
    </motion.div>
  );
}
