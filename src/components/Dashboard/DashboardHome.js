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

  return (
    <div className="dashboard">
      <Heading text="Welcome to the Holidaze Dashboard!" />
      <Statistics />
      <HotelCollection />
      <h3 className="dashboard__dropdown" onClick={() => setshowAdd(!showAdd)}>Add new hotel! {!showAdd ? <GoChevronDown /> : <GoChevronUp />}</h3>
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
