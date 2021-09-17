import useAxios from '../../hooks/useAxios';
import {React, useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL, HOTELS, UPLOAD } from "../../constants/api";
import AuthContext from "../../context/AuthContext";

const url = BASE_URL + HOTELS;


const schema = yup.object().shape({
    hotelName: yup
      .string()
      .required("Please enter a hotel name."),
    hotelRating: yup
        .number()
        .required("Please enter a number between 1-5.")
  });

   
    export default function AddHotel() {
        const http = useAxios();
        
        const [auth] = useContext(AuthContext);
        const [file, setFile] = useState()
        const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm({ resolver: yupResolver(schema) });
        
    const submitHotel = async (data) => {
        const formData = new FormData();
        console.log(data)
        formData.append("data", JSON.stringify({Title: data.hotelName, Rating: data.hotelRating, Price: data.hotelPrice, Description: data.hotelDescription}));
        formData.append("files.Image", file);
        console.log(formData)

        try {
            if(auth) {
                await http.post(url, formData)
            }
            
    
        } catch (error){
            console.log(error);
        }
    }

        return (
            <div>
                <form onSubmit={handleSubmit(submitHotel)}>
                    <input {...register("hotelName")} type="text" placeholder="Hotel name"/>
                    {errors.hotelName && <span>{errors.hotelName.message}</span>}

                    <input {...register("hotelRating")} type="text" placeholder="Hotel rating"/>
                    {errors.hotelRating && <span>{errors.hotelRating.message}</span>}

                    <input {...register("hotelPrice")} type="text" placeholder="Hotel price"/>
                    {errors.hotelPrice && <span>{errors.hotelPrice.message}</span>}

                    <input {...register("hotelDescription")} type="text" placeholder="Hotel description"/>
                    {errors.hotelDescription && <span>{errors.hotelDescription.message}</span>}

                    <input {...register}type="file" onChange={(e)=>setFile(e.target.files[0])} />

                    


                    <button type="submit" className="btn-main">Add new hotel</button>
                </form>
                {/* <FileUpload /> */}
            </div>
        )
    }

