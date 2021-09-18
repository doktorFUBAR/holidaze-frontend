import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai"
import { IoMdAddCircle } from "react-icons/io"
import { FaInbox } from "react-icons/fa"
import {RiHotelFill } from "react-icons/ri"


export default function DashboardMenu() {
  return (
    <div className="dashboard__menu">
      <nav>
        <ul>
        <Link to="/dashboard">
          <li><AiFillHome /> Dashboard</li>
        </Link>
        <Link to="/add-hotel">
          <li><IoMdAddCircle /> Add hotel</li>
        </Link>
        <Link to="/messages">
          <li><FaInbox /> Messages</li>
        </Link>
        <Link to="/booking-requests">
          <li><RiHotelFill /> Booking</li>
        </Link>
        </ul>
      </nav>
    </div>
  )
}
