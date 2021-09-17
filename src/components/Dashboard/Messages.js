import React, { useEffect, useState } from 'react'
import { BASE_URL, MESSAGES } from "../../constants/api";
import useAxios from '../../hooks/useAxios';
import moment from 'moment';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const url = BASE_URL + MESSAGES;

export default function Messages() {
  const http = useAxios();
  const [messages, setMessages] = useState([]);

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

    return (
      <>
      <div className="messages">
        {messages.map((message) => (
            <motion.div
            key={message.id}
            className="message-card"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.9 }}
            >
            
                <h2 className="message-card__name">{message.Name}</h2>
                <h3 className="message-card__date">{moment(message.published_at).format("DD.MM.YYYY - HH:mm")}</h3>
                <p className="message-card__excerpt">{message.Content.substring(0, 30)}...</p>
            </motion.div>
          ))}
      </div>
      </>
    )
}
