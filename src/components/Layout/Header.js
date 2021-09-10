import { React, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import AuthContext from "../../context/AuthContext";

export default function Header({ handleClick }) {
  const [auth, setAuth] = useContext(AuthContext);

  const history = useHistory();

  const logout = () => {
    setAuth(null);
    history.push("/");
  };

  return (
    <div className="header">
      {/* Erstatt med logo */}
      <Link to="/">
        <h1 className="header__logo">Holidaze</h1>
      </Link>
      <nav>
        <ul className="header__links">
          <Link exact to="/">
            <li className="header__item">Home</li>
          </Link>
          <Link to="/places">
            <li className="header__item">Places</li>
          </Link>
          <Link to="/contact">
            <li className="header__item">Contact</li>
          </Link>

          {auth ? (
            <>
              <Link to="/dashboard">
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
