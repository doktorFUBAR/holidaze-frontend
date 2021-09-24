import React from 'react'
import Heading from '../Common/Heading'
import HotelCollection from "../Hotels/HotelCollection";
import Statistics from './Statistics';
import Enquiries from "./Enquiries";
import Messages from "./Messages";

export default function DashboardHome() {
  return (
    <div>
      <Heading text="Welcome to the Holidaze Dashboard!" />
      <Statistics />
      <HotelCollection />
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
