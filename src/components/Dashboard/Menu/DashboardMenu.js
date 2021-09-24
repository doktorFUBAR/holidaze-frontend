import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai"
import { IoMdAddCircle } from "react-icons/io"
import { FaInbox } from "react-icons/fa"
import {RiHotelFill } from "react-icons/ri"
import AuthContext from '../../../context/AuthContext'
import Avatar from "../../../assets/svg/avatar.svg";
import { BASE_URL, MESSAGES } from '../../../constants/api'
import useAxios from '../../../hooks/useAxios'

const url = BASE_URL + MESSAGES;

export default function DashboardMenu() {
  const http = useAxios();
  const [auth] = useContext(AuthContext);
  const [messages, setMessages] = useState(null)

  const getMessages = async () => {
    try {
      const res = await http.get(url);
      setMessages(res.data.length)
    } catch(error) {
      console.log(error)
    }
  }

  getMessages();

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
        <Link to="/dashboard/add-hotel">
          <li><IoMdAddCircle /> Add hotel</li>
        </Link>
        <Link to="/dashboard/messages">
          <li><FaInbox /> Messages <span className="notifcation">{messages}</span></li>
        </Link>
        <Link to="/dashboard/booking-requests">
          <li><RiHotelFill /> Booking</li>
        </Link>
        </ul>
      </nav>
    </div>
  )
}
