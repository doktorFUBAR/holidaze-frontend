import React, { useState } from 'react'
import Heading from '../Common/Heading'
import HotelCollection from "../Hotels/HotelCollection";
import Statistics from './Statistics';
import Enquiries from "./Enquiries";
import Messages from "./Messages";
import AddHotel from "./AddHotel";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export default function DashboardHome() {
  const [showAdd, setshowAdd] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  return (
    <div className="dashboard">
      <Heading text="Welcome to the Holidaze Dashboard!" />
      <Statistics />
      <HotelCollection />
      <h3 className="dashboard__dropdown" onClick={() => setshowAdd(!showAdd)}>Add new hotel {!showAdd ? <GoChevronDown /> : <GoChevronUp />}</h3>
      {showAdd  ? <AddHotel /> : null}
      <div className="dashboard__dual">
        <div className="dashboard__col">
        <h3 className="dashboard__dropdown" onClick={() => setShowBooking(!showBooking)}>See booking enquiries {!showBooking ? <GoChevronDown /> : <GoChevronUp />}</h3>
          {showBooking ? <Enquiries /> : null}
        </div>
        <div className="dashboard__col">
        <h3 className="dashboard__dropdown" onClick={() => setShowMessages(!showMessages)}>Read messages {!showMessages ? <GoChevronDown /> : <GoChevronUp />}</h3>
          {showMessages ? <Messages /> : null}
        </div>
      </div>
    </div>
  )
}
