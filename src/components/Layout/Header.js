import { React, useContext, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import AuthContext from "../../context/AuthContext";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Logo from "../../assets/svg/logo.svg";
import SmallLogo from "../../assets/svg/logo-small.svg";
import { motion } from "framer-motion";
import MainSearch from "../Search/MainSearch"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


export default function Header({ handleClick }) {
  const [auth, setAuth] = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const history = useHistory();

  const logout = () => {
    setAuth(null);
    history.push("/");
  };

  return (
    <div className="header">
      <Link to="/" onClick={() => setOpen(false)}>
        <img className="header__logo" src={SmallLogo} srcSet={`${SmallLogo}, 360w ${Logo} 1100w`} alt="Holidaze logo" />
      </Link>
        
        <MainSearch />
      
        <div className="header__hamburger" onClick={() => setOpen(!open)}>
          {open ? <RiCloseLine/> : <HiOutlineMenuAlt4 />}
        </div>

        <nav>
          <ul className={open ? "header__links--open" : "header__links"}>
              <motion.li
                variants={ variants }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="header__item">
                <NavLink exact to="/" onClick={() => setOpen(false)} activeClassName="active">
                  Home
                </NavLink>
              </motion.li>
            

              <motion.li
                variants={ variants }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="header__item">
                <NavLink to="/places" onClick={() => setOpen(false)} activeClassName="active">
                  Places
                </NavLink>
              </motion.li>
            
              <motion.li
                variants={ variants }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="header__item">
                <NavLink to="/contact" onClick={() => setOpen(false)} activeClassName="active">
                  Contact
                </NavLink>
              </motion.li>

          {auth ? (
            <>
                <motion.li
                  variants={ variants }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="header__item">
                  <NavLink to="/dashboard" onClick={() => setOpen(false)} activeClassName="active">
                    Dashboard
                  </NavLink>
                </motion.li>

              <li>
                <motion.button className="circular-btn-main"
                onClick={logout}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >
                  <IoLogOutOutline />
                </motion.button>
              </li>
            </>
          ) : (
            <li>
              <motion.button className="circular-btn-main"
              onClick={handleClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
                <AiOutlineUser />
              </motion.button>
            </li>
          )}
         </ul>
      </nav>
    </div>
  );
}
