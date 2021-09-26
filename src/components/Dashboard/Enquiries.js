import React, { useEffect, useState } from "react";
import { BASE_URL, BOOKING } from "../../constants/api";
import useAxios from "../../hooks/useAxios";
import moment from "moment";
import { motion } from "framer-motion";
import SubHeading from "../Common/SubHeading";
import { GiPlainCircle } from "react-icons/gi";

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
        console.error(error);
      }
    }
    fetchData();
  });

  return (
    <>
      <div className="bookings">
        <SubHeading text="Booking enquires" />
        {bookings.map((booking) => (
          <motion.div
            key={booking.id}
            className="bookings__card"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.9 }}
          >
            <table className="bookings__table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Status</th>
                  <th>Period</th>
                  <th>Request by</th>
                  <th>Message</th>
                </tr>
              </thead>

              <tr>
                <th>
                  <h3>{booking.hotel_name}</h3>
                  <p className="bookings-card__date">
                    {moment(booking.published_at).format("DD.MM.YYYY - HH:mm")}
                  </p>
                </th>
                <th className="bookings__status">
                  <GiPlainCircle /> Confirmed
                </th>
                <th>
                  <span>From: </span>{" "}
                  <p className="bookings-card__date">
                    {moment(booking.date_from).format("DD.MM.YYYY")}
                  </p>
                  <span>To: </span>{" "}
                  <p className="bookings-card__date">
                    {moment(booking.to).format("DD.MM.YYYY")}
                  </p>
                </th>
                <th>
                  <p className="bookings-card__name">
                    {booking.first_name + " " + booking.last_name}
                  </p>
                  <p className="bookings-card__excerpt">{booking.email}</p>
                  <p className="bookings-card__excerpt">{booking.phone}</p>
                </th>
                <th>
                  <p className="bookings-card__excerpt">{booking.message}</p>
                </th>
              </tr>
            </table>
          </motion.div>
        ))}
      </div>
    </>
  );
}
