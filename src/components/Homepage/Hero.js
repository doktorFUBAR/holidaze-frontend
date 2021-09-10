import { React, useState } from "react";
import { Link } from "react-router-dom";
import HeroSVG from "../../assets/svg/hero.svg";
import MainSearch from "../Search/MainSearch";
import { FiSearch } from "react-icons/fi";

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
        <div className="input-group">
          <Link to="/hotels" className="btn-main">
            Explore now
          </Link>
          <span className="or-separate">Or</span>
          <button className="btn-main" onClick={displaySearch}>
            <FiSearch />
          </button>
          <div className={showSearch ? "show-search" : null}>
            <MainSearch />
          </div>
        </div>
      </div>
      <div className="img-gradient">
        <img src={HeroSVG} alt="Illustration of woman walking" />
      </div>
    </div>
  );
}
