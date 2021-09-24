import React, { useState } from 'react'
import Heading from '../Common/Heading'
import HotelCollection from "../Hotels/HotelCollection";
import Statistics from './Statistics';
import Enquiries from "./Enquiries";
import Messages from "./Messages";
import AddHotel from "./AddHotel";

export default function DashboardHome() {
  const [showAdd, setshowAdd] = useState(false);

  return (
    <div>
      <Heading text="Welcome to the Holidaze Dashboard!" />
      <Statistics />
      <HotelCollection />
      <p onClick={() => setshowAdd(!showAdd)}>Add new hotel!</p>
      {showAdd  ? <AddHotel /> : null}
      <div className="dashboard__dual">
        <div className="dashboard__col">
          <Heading text="Booking enquires" />
          <Enquiries />
        </div>
        <div className="dashboard__col">
          <Heading text="Messages" />
          <Messages />
        </div>
      </div>
    </div>
  )
}
