import React from "react";
import style from "./Admin.module.css";
import { NavLink } from "react-router-dom";
import user from "../../assets/icons/user.png";
import dash from "../../assets/icons/dash.png";
import hotel from "../../assets/icons/hotel.png";
import home from "../../assets/icons/home.png";
import Users from "./Users/Users";
import HotelsAdmin from "./HotelsAdmin/HotelsAdmin";
import RoomsAdmin from "./RoomsAdmin/RoomsAdmin";

const Admin = () => {
  return (
    <div>
      <div>
        <nav className={`${style.navBar} navbar fixed-top`}>
          <div className="container-fluid">
            <button
              className={`${style.buttonNavBar}`}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span
                className={`${style.navBarIcon} navbar-toggler-icon`}
              ></span>
            </button>
            <div
              className={`${style.offCanvas} offcanvas offcanvas-start`}
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className={`${style.offCanvasHeader} offcanvas-header`}>
                <h1
                  className={`${style.offCanvasTitle} offcanvas-title`}
                  id="offcanvasNavbarLabel"
                >
                  Your Destiny
                </h1>
                <button
                  type="button"
                  className={`${style.btnClose} btn-close`}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className={`${style.offCanvasBody} offcanvas-body`}>
                <ul className="navbar-nav justify-content-end flex-grow-1 ">
                  <li className={`${style.navItem} nav-item`}>
                    <img src={dash} alt="" className={style.img} />
                    <a
                      className={`${style.navLink} nav-link active`}
                      aria-current="page"
                      href="#dashboard"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className={`${style.navItem} nav-item`}>
                    <img src={hotel} alt="" className={style.img} />
                    <a
                      className={`${style.navLink} nav-link active`}
                      aria-current="page"
                      href="#hotelsAdmin"
                    >
                      Hotels
                    </a>
                  </li>
                  <li className={`${style.navItem} nav-item`}>
                    <img src={user} alt="" className={style.img} />
                    <a
                      className={`${style.navLink} nav-link active`}
                      aria-current="page"
                      href="#users"
                    >
                      Users
                    </a>
                  </li>

                  <li className={`${style.navItem} nav-item`}>
                    <img src={home} alt="" className={style.img} />
                    <NavLink
                      className={`${style.navLink} nav-link active`}
                      aria-current="page"
                      to="/home"
                    >
                      Back to Home
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <NavLink className={`${style.navLink} navbar-brand`} to={"/home"}>
              Home
            </NavLink>
          </div>
        </nav>
      </div>
      <div className={style.containerInfo}>
        <HotelsAdmin />
        <RoomsAdmin/>
        <Users />

      </div>
    </div>
  );
};

export default Admin;
