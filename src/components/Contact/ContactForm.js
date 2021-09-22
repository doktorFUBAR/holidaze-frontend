import { React, useState } from 'react'
import { set, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import { BASE_URL, MESSAGES } from '../../constants/api';
import Button from "../Common/Button";

const url = BASE_URL + MESSAGES;

const schema = yup.object().shape({
  Email: yup
    .string()
    .required("Please enter your email address.")
    .email("Please enter a valid email address"),
  Name: yup.string().required("Your name is required"),
  Content: yup.string().required("Please write a message"),
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
    const formData = new FormData();
    console.log(data)
    formData.append("data", JSON.stringify({Name: data.Name, Email: data.Email, Content: data.Content}));
    console.log(formData)
    setSubmitting(true);
    setSubmitError(null);

    console.log(data);

    try {
      await axios.post(url, data)
      } catch (error){
      console.log(error);
      }
      finally {
        setSubmitting(false)
      }
     
  };

  return (
    <>
    <form className="contact-us__form" onSubmit={handleSubmit(onSubmit)}>
      <label className="contact-us__label" for="Name">Full name</label>
      <input {...register("Name")} type="text" placeholder="Your name"/>
      {errors.Name && <span className="form-error">{errors.Name.message}</span>}

      <label className="contact-us__label" for="Email">Email</label>
      <input {...register("Email")} type="text" placeholder="You email"/>
      {errors.Email && <span className="form-error">{errors.Email.message}</span>}

      <label className="contact-us__label" for="Content">Message</label>
      <textarea {...register("Content")} type="text" placeholder="Your message"/>
      {errors.Content && <span className="form-error">{errors.Content.message}</span>}

        <Button type="submit" className="btn-main" text={submitting ? "Sending..." : "Send"} />
    </form>
    </>
  )
}
