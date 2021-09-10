import axios from 'axios';
import {React, useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL, HOTELS, UPLOAD } from "../../constants/api";
import AuthContext from "../../context/AuthContext";
import FileUpload from './FileUpload';
//import FileUpload from './FileUpload';

const url = BASE_URL + HOTELS;
const uploadURL = BASE_URL + UPLOAD;

const schema = yup.object().shape({
    hotelName: yup
      .string()
      .required("Please enter a hotel name."),
    hotelRating: yup
        .number()
        .required("Please enter a number between 1-5.")
  });

   
    export default function AddHotel() {
        const [file, setFile] = useState()
        const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm({ resolver: yupResolver(schema) });
        
          const [auth, setAuth] = useContext(AuthContext);
        
    const submitHotel = async (data) => {
        const formData = new FormData();
        console.log(data)
        formData.append("data", JSON.stringify({title: data.hotelName, rating: data.hotelRating}));
        formData.append("files.image", file);
        console.log(formData)

        try {
            const response = await fetch (url, {
                method: 'POST',
                headers: {
                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjMwOTM3ODU4LCJleHAiOjE2MzM1Mjk4NTh9.7hkYRLxNjnAlVTzRZQUYxgFiLFDCn5XhYltn8iU53NI"
                },
                body: formData
            })
    
            const data = await response.json();
            console.log("data", data);
    
        } catch (error){
            console.log(error);
        }

/*         try {
            const res = await axios.post({
                method: "POST",
                url: url,
                data: formData,
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjMwOTM3ODU4LCJleHAiOjE2MzM1Mjk4NTh9.7hkYRLxNjnAlVTzRZQUYxgFiLFDCn5XhYltn8iU53NI",
                    },
            })
            
        console.log(res.data)
        }catch (error) {
            console.log("error", error);
        } */
    }

        return (
            <div>
                <form onSubmit={handleSubmit(submitHotel)}>
                    <input {...register("hotelName")} type="text" placeholder="Hotel name"/>
                    {errors.hotelName && <span>{errors.hotelName.message}</span>}

                    <input {...register("hotelRating")} type="text" placeholder="Hotel rating"/>
                    {errors.hotelRating && <span>{errors.hotelRating.message}</span>}

                    <input {...register}type="file" onChange={(e)=>setFile(e.target.files[0])} />

                    


                    <button type="submit" className="btn-main">Add new hotel</button>
                </form>
                {/* <FileUpload /> */}
            </div>
        )
    }

