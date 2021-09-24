import React from 'react'
import HotelCollection from "../Hotels/HotelCollection"
import Statistics from './Statistics'

export default function DashboardHome() {
  return (
    <div>
      <Statistics />
      <HotelCollection />
    </div>
  )
}
