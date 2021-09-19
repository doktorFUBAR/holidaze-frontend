import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai"
import { IoMdAddCircle } from "react-icons/io"
import { FaInbox } from "react-icons/fa"
import {RiHotelFill } from "react-icons/ri"
import AuthContext from '../../../context/AuthContext'
import Avatar from "../../../assets/svg/avatar.svg";


export default function DashboardMenu() {
  const [auth] = useContext(AuthContext);
  return (
    <div className="dashboard__menu">
      <img src={Avatar} alt="Standard avatar illustration" />
      <h2>{auth.user.username}</h2>
      <h3>{auth.user.email}</h3>
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
