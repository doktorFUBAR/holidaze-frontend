import { React, useState } from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import { BASE_URL, MESSAGES } from '../../constants/api';
import Button from "../Common/Button";
import { ImCheckboxChecked } from "react-icons/im";

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
  const [submitMessage, setSubmitMessage] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
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
      setSubmitError(error.toString());
      }

      finally {
        setSubmitting(false)
        reset({})
        setSubmitMessage(true);
      }
     
  };

  return (
    <>
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={submitting}>
        <label className="form__label" for="Name">Full name</label>
        <input {...register("Name")} type="text" placeholder="Your name"/>
        {errors.Name && <span className="form-error">{errors.Name.message}</span>}

        <label className="form__label" for="Email">Email</label>
        <input {...register("Email")} type="text" placeholder="You email"/>
        {errors.Email && <span className="form-error">{errors.Email.message}</span>}

        <label className="form__label" for="Content">Message</label>
        <textarea {...register("Content")} type="text" placeholder="Your message"/>
        {errors.Content && <span className="form-error">{errors.Content.message}</span>}

        <Button disabled={submitting} type="submit" className="btn-main" text={submitting ? "Sending..." : "Send"} />

        {submitMessage ? <p className="form-success"><ImCheckboxChecked /> We have recieved your booking request!</p> : null}
      </fieldset>

    {submitError && <span className="form-error">{submitError}</span>}
    </form>
    </>
  )
}
