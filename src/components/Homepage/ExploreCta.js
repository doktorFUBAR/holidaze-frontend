import React from 'react'
import { Link } from 'react-router-dom'

export default function ExploreCta() {
    return (
        <div className="cta">
            <h2 className="heading-medium">
                Expierence Bergen your way
            </h2>
            <Link to="/places">
                <button className="btn-main">Explore</button>
            </Link>
        </div>
    )
}
