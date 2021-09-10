import React from "react";
import Explore from "../../assets/svg/explore.svg";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <div className="newsletter__left">
        <h2 className="heading-medium">Explore places just for you</h2>
        <p>
          Our algorithm will suggest places and activities based on your travel
          history. Sign up here to start exploring.
        </p>

        <form className="newsletter__form">
          <input type="text" placeholder="Enter your email" />
          <button className="btn-secondary">Join now</button>
        </form>
      </div>

      <div className="newsletter__right">
        <div className="clip-container">
          <img
            className="clip-img"
            src={Explore}
            alt="Illustration of woman in the woods"
          />
        </div>
      </div>
    </div>
  );
}
