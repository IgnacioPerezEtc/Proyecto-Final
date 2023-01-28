import React from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import bg from "../../assets/img/header2.jpg";
// import bg2 from "../../assets/img/banner.png";
// import bg3 from "../../assets/img/banner2.png";
// import bg4 from "../../assets/img/banner3.png";
// import bg5 from "../../assets/img/bannerp.png";
// import bg6 from "../../assets/img/bannerf.png";
const Header = () => {
  return (
    <div className="container-header">
      <div className="container-img">
      <img src={bg} className="img-bg" alt="background hotel" />
        {/* {location.pathname === "/home" && (
          <img src={bg5} className="img-bg" alt="background hotel" />
        )}
        {location.pathname === "/hotels" && (
          <img src={bg2} className="img-bg" alt="background hotel" />
        )}
        {(location.pathname !== "/hotels" && location.pathname !== "/home") && (
          <img src={bg4} className="img-bg" alt="background hotel" />
        )} */}
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
            <h3 className="title-off">The best website</h3>
          </div>
          <div className="div-desc">
            <h3 className="title-desc">Of Hotel Booking Online</h3>
          </div>
        </div>
        {/* {((location.pathname === "/" || location.pathname === "/hotels") && (
          <div className="container-button">
            <button>Booking Now</button>
          </div>
        )) || (
          <div className="container-button ">
            <button>Home</button>
          </div>
        )} */}
      </div>
      <div>
        <SearchBar />
        {/* {location.pathname === "/hotels" && <SearchBarHotels />} */}
      </div>
    </div>
  );
};

export default Header;
