import React from 'react'
import NotFound from "../assets/svg/404.svg"

export default function NoMatch() {
  return (
    <div className="no-match">
      <h1>404</h1>
      <img src={NotFound} alt="404, Nothing here"/>
      <p>Seems like there is nothing here.</p>
    </div>
  )
}
