import { React, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import AuthContext from "../../context/AuthContext";
import { RiCloseLine } from "react-icons/ri";
import { CgMenuRightAlt } from "react-icons/cg";
import Logo from "../../assets/svg/logo.svg";
import { motion } from "framer-motion";

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
      {/* Erstatt med logo */}
      <Link to="/" onClick={() => setOpen(false)}>
        <img className="header__logo" src={Logo} alt="Holidaze logo" />
      </Link>
      
        <div className="header__hamburger" onClick={() => setOpen(!open)}>
          {open? <RiCloseLine/> : <CgMenuRightAlt />}
        </div>
        <nav>
          <ul className={open ? "header__links--open" : "header__links"}>
            <Link exact to="/" onClick={() => setOpen(false)}>
              <li className="header__item">Home</li>
            </Link>
            <Link to="/places" onClick={() => setOpen(false)}>
              <li className="header__item">Places</li>
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              <li className="header__item">Contact</li>
            </Link>

          {auth ? (
            <>
              <Link to="/dashboard" onClick={() => setOpen(false)}>
                <li className="header__item">Dashboard</li>
              </Link>

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
