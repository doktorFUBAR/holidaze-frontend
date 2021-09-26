import { motion } from 'framer-motion'
import React from 'react'
import NotFound from "../assets/svg/404.svg"

export default function NoMatch() {
  return (
    <motion.div
    className="no-match"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <h1>404</h1>
      <img src={NotFound} alt="404, Nothing here"/>
      <p>Seems like there is nothing here.</p>
    </motion.div>
  )
}
