import React from 'react'
import { BASE_URL, MESSAGES } from "../../constants/api";
import useFetch from "../../hooks/useFetch";

export default function Messages() {
  const { loading, error, data } = useFetch(BASE_URL + MESSAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="messages">
      {data.map((message) => (
          <div key={message.id} className="message-card">
            <div className="message-card__content">
              <h2>{message.title}</h2>
              <h3>{message.email}</h3>
              <p>{message.message}</p>
            </div>
          </div>
        ))}
    </div>
  )
}
