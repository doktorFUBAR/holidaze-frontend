import { React, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import AuthContext from "../../context/AuthContext";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri"

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
        <h1 className="header__logo">Holidaze</h1>
      </Link>
      
        <div className="header__hamburger" onClick={() => setOpen(!open)}>
          {open? <RiCloseLine/> : <RiMenu4Line />}
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
                <button className="circular-btn-main" onClick={logout}>
                  <IoLogOutOutline />
                </button>
              </li>
            </>
          ) : (
            <li>
              <button className="circular-btn-main" onClick={handleClick}>
                <AiOutlineUser />
              </button>
            </li>
          )}
         </ul>
      </nav>
    </div>
  );
}
