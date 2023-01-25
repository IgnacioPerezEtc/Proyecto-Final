import React from "react";
import "./NavBar.css";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = (props) => {
  const location = useLocation();
  return (
    <div className="container-navbar">
      <nav className="container-nav">
        <div>
          <ul className="ul-nav">
            <li>
              <a href="/home" className="link-landing">
                Home
              </a>
            </li>
            <li>
              <NavLink to={"/hotels"} className="link-landing">
                Hotels
              </NavLink>
            </li>
            {location.pathname === "/home" ? (
              <li>
                <a href="#services" className="link-landing">
                  Services
                </a>
              </li>
            ) : (
              <li>
                <NavLink to={"/home"} className="link-landing">
                  Services
                </NavLink>
              </li>
            )}

            <li>
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
