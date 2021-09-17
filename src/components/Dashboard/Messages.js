import React, { useEffect, useState } from 'react'
import { BASE_URL, MESSAGES } from "../../constants/api";
import useAxios from '../../hooks/useAxios';

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



console.log(messages)

    return (
      <>
      <div className="messages">
        {messages.map((message) => (
            <div key={message.id} className="message-card">
              <div className="message-card__content">
                <h2>{message.Name}</h2>
                <h3>{message.Email}</h3>
                <p>{message.Message}</p>
              </div>
            </div>
          ))}
      </div>
      </>
    )
}
