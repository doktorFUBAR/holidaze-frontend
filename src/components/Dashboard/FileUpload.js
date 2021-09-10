import axios from 'axios';
import React, { useState } from 'react'
import { BASE_URL, UPLOAD } from '../../constants/api';

const url = BASE_URL + UPLOAD;


export default function FileUpload() {
    const [files, setFiles] = useState()

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(files)

        const data = new FormData();
        data.append("files", files);

        const res = await axios({
            method: "POST",
            url: url,
            data,
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjMwOTM3ODU4LCJleHAiOjE2MzM1Mjk4NTh9.7hkYRLxNjnAlVTzRZQUYxgFiLFDCn5XhYltn8iU53NI",
                },
        })

        console.log(res)

    }

    return (
        <div className="file-upload">
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={(e)=>setFiles(e.target.files[0])} />
                <button>Upload image</button>
            </form>
        </div>
    )
}
