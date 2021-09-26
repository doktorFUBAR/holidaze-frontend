import useAxios from '../../hooks/useAxios';
import {React, useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL, HOTELS } from "../../constants/api";
import AuthContext from "../../context/AuthContext";
import Button from "../Common/Button";
import { ImCheckboxChecked } from "react-icons/im";
import SubHeading from "../Common/SubHeading";

const url = BASE_URL + HOTELS;


const schema = yup.object().shape({
    hotelName: yup
      .string()
      .required("Please enter a hotel name."),
    hotelName: yup
        .string()
        .required("Please enter an address."),
    hotelRating: yup
        .number()
        .required("Please enter a number between 1-5."),
    hotelPrice: yup
        .number()
        .required("Please enter a price."),
    hotelDescription: yup
        .string()
        .required("Please enter a description."),
  });

   
    export default function AddHotel() {
        const http = useAxios();
        
        const [auth] = useContext(AuthContext);
        const [file, setFile] = useState()

        const [submitting, setSubmitting] = useState(false);
        const [submitError, setSubmitError] = useState(null);
        const [submitMessage, setSubmitMessage] = useState(false);

        const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
          } = useForm({ resolver: yupResolver(schema) });
        
    const submitHotel = async (data) => {
        const formData = new FormData();
        console.log(data)
        formData.append("data", JSON.stringify({Title: data.hotelName, Address: data.hotelAddress, Rating: data.hotelRating, Price: data.hotelPrice, Description: data.hotelDescription}));
        formData.append("files.Image", file);
        console.log(formData)
        setSubmitting(true);
        setSubmitError(null);

        try {
            if(auth) {
                await http.post(url, formData)
            }
            
    
        } catch (error){
            console.log(error);

        } finally {
            setSubmitting(false)
            reset({})
            setSubmitMessage(true);
        }
    }

        return (
            <div>
                <SubHeading text="Add new hotel" />
                <form className="form" onSubmit={handleSubmit(submitHotel)}>
                    <fieldset disabled={submitting}>
                        <label className="form__label" for="hotelName">Name</label>
                        <input {...register("hotelName")} type="text" placeholder="Hotel name"/>
                        {errors.hotelName && <span className="form-error">{errors.hotelName.message}</span>}

                        <label className="form__label" for="hotelName">Address</label>
                        <input {...register("hotelAddress")} type="text" placeholder="Hotel address"/>
                        {errors.hotelAddress && <span className="form-error">{errors.hotelAddress.message}</span>}

                        <label className="form__label" for="hotelRating">Rating (1-5)</label>
                        <input {...register("hotelRating")} type="text" placeholder="Hotel rating"/>
                        {errors.hotelRating && <span className="form-error">{errors.hotelRating.message}</span>}

                        <label className="form__label" for="hotelPrice">Price</label>
                        <input {...register("hotelPrice")} type="text" placeholder="Hotel price"/>
                        {errors.hotelPrice && <span className="form-error">{errors.hotelPrice.message}</span>}

                        <label className="form__label" for="hotelDescription">Description</label>
                        <input {...register("hotelDescription")} type="text" placeholder="Hotel description"/>
                        {errors.hotelDescription && <span className="form-error">{errors.hotelDescription.message}</span>}

                        <label className="form__label" for="Image">Image</label>
                        <input {...register("Image")}type="file" onChange={(e)=>setFile(e.target.files[0])} />

                        <Button disabled={submitting} type="submit" className="btn-main" text={submitting ? "Adding..." : "Add hotel"} />

                        {submitMessage ? <p className="form-success"><ImCheckboxChecked /> We have recieved your booking request!</p> : null}
                    </fieldset>
                </form>
            </div>
        )
    }

