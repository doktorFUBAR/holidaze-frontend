import React, { useState } from 'react'
import Heading from '../components/Common/Heading'
import HotelCollection from "../components/Hotels/HotelCollection";
import Statistics from '../components/Dashboard/Statistics';
import Enquiries from "../components/Dashboard/Enquiries";
import Messages from "../components/Dashboard/Messages";
import AddHotel from "../components/Dashboard/AddHotel";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { motion } from 'framer-motion';

export default function DashboardHome() {
  const [showAdd, setshowAdd] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  return (
    <motion.div 
    className="dashboard"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <Heading text="Welcome to the Holidaze Dashboard!" />
      <Statistics />
      <HotelCollection />
      <h3 className="dashboard__dropdown dropdown-first" onClick={() => setshowAdd(!showAdd)}>Add new hotel {!showAdd ? <GoChevronDown /> : <GoChevronUp />}</h3>
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
    </motion.div>
  )
}
