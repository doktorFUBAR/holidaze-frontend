import { React, useContext, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import AuthContext from "../../context/AuthContext";
import { RiCloseLine } from "react-icons/ri";
import { CgMenuRightAlt } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import Logo from "../../assets/svg/logo.svg";
import { motion } from "framer-motion";
import MainSearch from "../Search/MainSearch"

export default function Header({ handleClick }) {
  const [auth, setAuth] = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const history = useHistory();

  const logout = () => {
    setAuth(null);
    history.push("/");
  };

  return (
    <div className="header">
      <Link to="/" onClick={() => setOpen(false)}>
        <img className="header__logo" src={Logo} alt="Holidaze logo" />
      </Link>

        <MainSearch />
      
        <div className="header__hamburger" onClick={() => setOpen(!open)}>
          {open ? <RiCloseLine/> : <CgMenuRightAlt />}
        </div>
        <nav>
          <ul className={open ? "header__links--open" : "header__links"}>


            <NavLink to="/places" onClick={() => setOpen(false)} activeClassName="active">
              <li className="header__item">Places</li>
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} activeClassName="active">
              <li className="header__item">Contact</li>
            </NavLink>

          {auth ? (
            <>
              <NavLink to="/dashboard" onClick={() => setOpen(false)} activeClassName="active">
                <li className="header__item">Dashboard</li>
              </NavLink>

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
