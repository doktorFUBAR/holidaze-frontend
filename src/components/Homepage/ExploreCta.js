import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Common/Button';

export default function ExploreCta() {
    return (
        <div className="cta">
            <h2 className="heading-medium">
                Expierence Bergen your way
            </h2>
            <Link to="/places">
                <Button text="Explore" />
            </Link>
        </div>
    )
}
