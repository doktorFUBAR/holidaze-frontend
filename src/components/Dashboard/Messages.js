import React, { useEffect, useState } from 'react'
import { BASE_URL, MESSAGES } from "../../constants/api";
import useAxios from '../../hooks/useAxios';
import moment from 'moment';
import { motion } from 'framer-motion';
import { GoChevronDown, GoChevronUp } from "react-icons/go"
import SubHeading from "../Common/SubHeading";

const url = BASE_URL + MESSAGES;

export default function Messages() {
  const http = useAxios();
  const [messages, setMessages] = useState([]);
  const [clicked, setClicked] = useState(false)

  const toggle = (index) => {
    if(clicked === index) {
        return setClicked(null)
    }
    setClicked(index)
  }

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await http.get(url);
            setMessages(response.data);
        } catch (error) {
            console.error(error)
        }
    }; fetchData(); 
}, []);

    // This should ideally be sorted by date, but it works
    const newFirst = [...messages].reverse();
    console.log(newFirst)

    return (
      <>
      <SubHeading text="Messages" />
      <div className="messages">
        {newFirst.map((message, index) => (
            <motion.div
            key={index}
            className="message-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toggle(index)}
            >
                <h2 className="message-card__name">
                    {message.Name}
                    <span>{clicked === index ? <GoChevronUp /> : <GoChevronDown />}</span>
                </h2>
                <h3 className="message-card__date">{moment(message.published_at).format("DD.MM.YYYY - HH:mm")}</h3>
                {clicked === index ? (
                    <div className="full-message">
                        <h4>From: {message.Email}</h4>
                        <p>{message.Content}</p>
                    </div>
                ) : <p className="message-card__excerpt">{`${message.Content}`.substring(0, 40)}...</p>}
            </motion.div>
          ))}
      </div>
      </>
    )
}
