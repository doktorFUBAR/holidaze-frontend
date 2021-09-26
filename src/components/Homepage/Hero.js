import { React } from "react";
import HeroIMG from "../../assets/3.jpg";
import { HiOutlineChevronDown } from "react-icons/hi"
import Heading from "../Common/Heading";
import SubHeading from "../Common/SubHeading";
import { motion } from "framer-motion";

export default function Hero() {

  return (
    <div className="hero">
      <div className="hero__content">
        <Heading className="hero__title-main" text="Explore Bergen" />
        <SubHeading className="hero__title-sub" text="Find your dream stay" />
        <motion.div
          animate={{ y: "20px" }}
          transition={{ type: "spring", stiffness: 300, duration: 2, repeat: Infinity }}
          className="hero__icon"><HiOutlineChevronDown /></motion.div>
      </div>
      <div className="hero__img-container">
        <img src={HeroIMG} alt="Illustration of woman walking" />
        <div className="img-overlay"></div>
      </div>
    </div>
  );
}
