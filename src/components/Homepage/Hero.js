import { React, useState } from "react";
import HeroIMG from "../../assets/3.jpg";
import MainSearch from "../Search/MainSearch";

export default function Hero() {
  const [showSearch, setShowSearch] = useState(false);

  const displaySearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title-main">Explore Bergen</h1>
        <h2 className="hero__title-sub">Find your dream stay</h2>

          {/* <div className="show-search">
            <MainSearch />
          </div> */}
      </div>
      <div className="hero__img-container">
        <img src={HeroIMG} alt="Illustration of woman walking" />
        <div className="img-overlay"></div>
      </div>
    </div>
  );
}
