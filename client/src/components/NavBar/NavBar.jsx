import React from "react";
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
import style from "./NavBar.module.css";

const NavBar = (props) => {
  const location = useLocation();
  const [login, setLogin] = useState(false);
  const [themeState, setThemeState] = useState(localStorage.getItem("theme"));
  const [info, setInfo] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    if (info) {
      setLogin(true);
    }
  });
  function darkMode() {
    localStorage.setItem("theme", "dark");
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
  }
  function lightMode() {
    localStorage.setItem("theme", "light");
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
  }
  if (localStorage.getItem("theme") == "light") {
    lightMode();
  } else {
    darkMode();
  }

  const handleChecked = (event) => {
    if (event.target.checked === true) {
      setThemeState("dark");
      darkMode();
    } else {
      setThemeState("light");
      lightMode();
    }
  };

  return (
    <div className={style.containerNavbar}>
      <nav className={style.containerNav}>
        <div>
          <ul className={style.ulNavRedes}>
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
        <div>
          <ul className={style.ulNav}>
            <li className={style.pages}>
              <a href="/home" className={style.linkLanding}>
                Home
              </a>
            </li>
            <li className={style.pages}>
              <a href="/rooms" className={style.linkLanding}>
                Rooms
              </a>
            </li>
            <li className={style.pages}>
              <NavLink to={"/hotels"} className={style.linkLanding}>
                Hotels
              </NavLink>
            </li>
            <li className={style.pages}>
              <NavLink to={"/aboutUs"} className={style.linkLanding}>
                About Us
              </NavLink>
            </li>

            <li className={style.pages}>
              <input
                type="checkbox"
                checked={themeState === "dark" ? true : false}
                name="darkMode"
                value={localStorage.getItem("theme")}
                id={`switch`}
                className={style.switch}
                onClick={(e) => handleChecked(e)}
              />
              <label htmlFor={`switch`} className={style.lbl}></label>
            </li>

            <li className="dropdown">
              <a
                className={`${style.linkLanding} dropdown-toggle`}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {login === false ? (
                  <img src={user} alt="" width={"24px"} height="24px" />
                ) : (
                  <img
                    id={style.img}
                    src={
                      JSON.parse(localStorage.getItem("user"))[0].img || user
                    }
                    alt=""
                    width={"34px"}
                    height="34px"
                  />
                )}
              </a>

              <ul className={`${style.ulProfile} dropdown-menu dropdown-menu-lg-end`}>
                <li className={style.liProfile}>
                  {login === false ? (
                    ""
                  ) : (
                    <a className="dropdown-item" href="/userProfile">
                      User Profile
                    </a>
                  )}
                </li>
                <hr />
                <li className={style.liProfile}>
                  <NavLink to={"/favorites"} className="dropdown-item">
                    Favorites
                  </NavLink>
                </li>
                <hr />
                {info && info[0].admin === true ? (
                  <div>
                    <li className={style.liProfile}>
                      <a
                        className={`${style.itemDrop} dropdown-item`}
                        href="/admin"
                      >
                        Dashboard
                      </a>
                    </li>
                    <hr />
                  </div>
                ) : (
                  ""
                )}
                <li className={style.liProfile}>
                  <a className="dropdown-item" href="/Booking">
                    My reservations
                  </a>
                </li>
                <hr />
                <li className={style.liProfile}>
                  <a
                    className={`${style.itemDrop} dropdown-item`}
                    href="/Reservationhistory"
                  >
                    Reservation History
                  </a>
                </li>
                <hr />
                <li className={style.liProfile}>
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
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
