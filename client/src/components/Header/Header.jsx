import React from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";
import bg from "../../assets/img/header2.jpg";

const Header = (props) => {
  return (
    <div className="container-header">
      <div className="container-img">
        <img src={bg} className="img-bg" alt="background hotel" />
      </div>
      <div className="navBar">
        <NavBar />
      </div>
      <div className="container-title">
        <div className="container-name-hotel">
          <div>
            <h1 className="name-hotel">Your Destiny</h1>
          </div>
          <div className="div-name">
            <hr className="hr" />
          </div>
          <div className="div-off">
            <h2 className="title-off">Up to 60% OFF</h2>
          </div>
          <div className="div-desc">
            <h3 className="title-desc">On Hotel Booking Online</h3>
          </div>
        </div>
        <div className="container-button">
          <button>Booking Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
