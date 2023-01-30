import React from "react";
import "./NavBar.css";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import user from "../../assets/icons/user.png";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { logOut } from "../../redux/actions";


const NavBar = (props) => {
  const location = useLocation();
  const [login, setLogin] = useState(false);

  const [info, setInfo] = useState(localStorage.getItem("user"));
  useEffect(() => {
    if (info) {
      setLogin(true);
    }
  });

  return (
    <div className="container-navbar">
      <nav className="container-nav">
        <div>
          <ul className="ul-nav">
            <li className="dropdown">
              <a
                href="#services"
                className="link-landing dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={user} alt="" width={"24px"} height="24px" />
              </a>

              <ul className="dropdown-menu">
                <li>
                  {login === false ? (
                    <a className="dropdown-item" href="/">
                      Log-in
                    </a>
                  ) : (
                    <a onClick={logOut} className="dropdown-item" href="/">
                      Log-Out
                    </a>
                  )}
                </li>
                <hr />
                <li>
                  <a className="dropdown-item" href="/Booking">
                    My reservations
                  </a>
                </li>
              </ul>
            </li>
            <li className="pages">
              <a href="/home" className="link-landing">
                Home
              </a>
            </li>
            <li className="pages">
              <a href="/rooms" className="link-landing">
                Rooms
              </a>
            </li>
            <li className="pages">
              <NavLink to={"/hotels"} className="link-landing">
                Hotels
              </NavLink>
            </li>

            <li className="pages">
              <NavLink to={"/aboutUs"} className="link-landing">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="ul-nav-redes">
            <li>
              <a href="https:/www.instagram.com" target={"_blank"}>
                <button>
                  <img src={instagram} alt="logo instagram" />
                </button>
              </a>
            </li>
            <li>
              <a href="https:/www.facebook.com" target={"_blank"}>
                <button>
                  <img src={facebook} alt="logo facebook" />
                </button>
              </a>
            </li>
            <li>
              <a href="https:/www.youtube.com" target={"_blank"}>
                <button>
                  <img src={youtube} alt="logo youtube" />
                </button>
              </a>
            </li>
            <li>
              <a href="https:/www.twitter.com" target={"_blank"}>
                <button>
                  <img src={twitter} alt="logo twitter" />
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
