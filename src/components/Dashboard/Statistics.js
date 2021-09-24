import React, {useState} from 'react';
import { BASE_URL, MESSAGES, HOTELS, BOOKING } from '../../constants/api';
import useAxios from '../../hooks/useAxios';
import { RiHotelBedLine } from "react-icons/ri";
import { AiOutlineMessage, AiOutlineShopping } from "react-icons/ai"


const placesURL = BASE_URL + HOTELS;
const bookingsURL = BASE_URL + BOOKING;
const messageURL = BASE_URL + MESSAGES;

export default function Statistics() {
  const http = useAxios();
  const [places, setPlaces] = useState(null)
  const [bookings, setBookings] = useState(null)
  const [messages, setMessages] = useState(null)

  const getData = async () => {
    try {
      const placesData = await http.get(placesURL);
      setPlaces(placesData.data.length)

      const bookingsData = await http.get(bookingsURL);
      setBookings(bookingsData.data.length)

      const messagesData = await http.get(messageURL);
      setMessages(messagesData.data.length)

      
    } catch(error) {
      console.log(error)
    }
  }

  getData();

  return (
    <div className="dashboard-statistics">
      <div className="dashboard-statistics__col">
        <h2>{places}</h2>
        Places to stay
        <RiHotelBedLine />
      </div>

      <div className="dashboard-statistics__col">
        <h2>{bookings}</h2>
        Number of bookings
        <AiOutlineShopping />
      </div>

      <div className="dashboard-statistics__col">
        <h2>{messages}</h2>
        Messages received
        <AiOutlineMessage />
      </div>
    </div>
  )
}
