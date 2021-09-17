import React from 'react';
import { motion } from 'framer-motion';

export default function Button(props) {
  return (
    <>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="btn-main">
        {props.text}
    </motion.button>
    </>
  )
}
