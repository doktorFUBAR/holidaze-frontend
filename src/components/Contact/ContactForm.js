import { React, useState } from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import { BASE_URL } from '../../constants/api';

const url = BASE_URL;

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email address.")
    .email("Please enter a valid email address"),
  name: yup.string().required("Your name is required"),
  message: yup.string().required("Please write a message"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setSubmitError(null);

    console.log(data);

    try {
      const res = await axios.post(url, {
        //identifier: data.email,
        //password: data.password,
      });
      console.log("response", res.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setSubmitting(false);
     
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="modal__right">
      {submitError && <p>{submitError}</p>}
      <h2 className="heading-medium">Login</h2>
      <fieldset disabled={submitting}>
        {" "}
        <input
          {...register("email")}
          type="text"
          placeholder="Your email"
        />
        {errors.email && <span>{errors.email.message}</span>}

        <input
          {...register("name")}
          type="text"
          placeholder="Your name"
        />
        {errors.name && <span>{errors.name.message}</span>}

        <textarea
          {...register("message")}
          placeholder="Your message"
        />
        {errors.message && <span>{errors.message.message}</span>}

        <button type="submit" className="btn-main">
          {submitting ? "Sending..." : "Login"}
        </button>
      </fieldset>
      </form>
  )
}
