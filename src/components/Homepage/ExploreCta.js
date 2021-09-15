import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

export default function ExploreCta() {
    return (
        <div className="cta">
            <h2 className="heading-medium">
                Expierence Bergen your way
            </h2>
            <Link to="/places">
                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn-main">Explore</motion.button>
            </Link>
        </div>
    )
}
