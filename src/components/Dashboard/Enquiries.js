import React, { useEffect, useState } from 'react'
import { BASE_URL, BOOKING } from "../../constants/api";
import useAxios from '../../hooks/useAxios';
import moment from 'moment';
import { motion } from 'framer-motion';
import Heading from "../Common/Heading";

const url = BASE_URL + BOOKING;

export default function Enquiries() {
  const http = useAxios();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await http.get(url);
            setBookings(response.data);
        } catch (error) {
            console.error(error)
        }
    }; fetchData(); 
}, []);

    return (
      <>
      <div className="messages">
      <Heading text="Booking enquires" />
        {bookings.map((booking) => (
            <motion.div
            key={booking.id}
            className="message-card"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.9 }}
            >

                <h2>{booking.hotel_name}</h2>
                <h3 className="message-card__name">{booking.first_name + " " + booking.last_name}</h3>
                <h3 className="message-card__date">{moment(booking.published_at).format("DD.MM.YYYY - HH:mm")}</h3>
                <p className="message-card__excerpt">{booking.email}</p>
                <p className="message-card__excerpt">{booking.phone}</p>
                <p className="message-card__date">{moment(booking.date_from).format("DD.MM.YYYY")}</p>
                <p className="message-card__date">{moment(booking.to).format("DD.MM.YYYY")}</p>
                <p className="message-card__excerpt">{booking.message}</p>
            </motion.div>
          ))}
      </div>
      </>
    )
}
