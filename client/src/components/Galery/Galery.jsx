import React, { useState } from "react";
import room from "../../assets/img/room.png";
import lobby from "../../assets/img/lobby.png";
import reception from "../../assets/img/reception.png";
import dining from "../../assets/img/dining.png";
import pool from "../../assets/img/pool.png";
import spa from "../../assets/img/spa.png";
import "./Galery.css";

const Galery = () => {
  const [image, setImage] = useState("All");
  const [optionActive, setOptionActive] = useState("All");

  function handleImage(e) {
    setImage(e.target.value);
    setOptionActive(e.target.value);
  }

  return (
    <div className="container">
      <div className="subcontainer">
        <div className="titleContainer">
          <h2 className="blue">Our</h2>
          <h2 className="red">Gallery</h2>
        </div>
      </div>

      <div className="galleryContainer">
        <div className="buttonContainer">
          <button
            value="All"
            onClick={(e) => handleImage(e)}
            className={
              optionActive === "All" ? "buttonActive" : "buttonInactive"
            }
          >
            ALL
          </button>
          <button
            value={room}
            onClick={(e) => handleImage(e)}
            className={
              optionActive === room ? "buttonActive" : "buttonInactive"
            }
          >
            Room
          </button>
          <button
            value={lobby}
            onClick={(e) => handleImage(e)}
            className={
              optionActive === lobby ? "buttonActive" : "buttonInactive"
            }
          >
            Lobby
          </button>
          <button
            value={reception}
            onClick={(e) => handleImage(e)}
            className={
              optionActive === reception ? "buttonActive" : "buttonInactive"
            }
          >
            Reception
          </button>
          <button
            value={dining}
            onClick={(e) => handleImage(e)}
            className={
              optionActive === dining ? "buttonActive" : "buttonInactive"
            }
          >
            Dining
          </button>
          <button
            value={pool}
            onClick={(e) => handleImage(e)}
            className={
              optionActive === pool ? "buttonActive" : "buttonInactive"
            }
          >
            Pool
          </button>
          <button
            value={spa}
            onClick={(e) => handleImage(e)}
            className={optionActive === spa ? "buttonActive" : "buttonInactive"}
          >
            Spa
          </button>
        </div>

        {image === "All" ? (
          <div className="imgContainer">
            <img src={reception} alt="" />
            <img src={dining} alt="" />
            <img src={spa} alt="" />
            <img src={room} alt="" />
            <img src={pool} alt="" />
            <img src={lobby} alt="" />
          </div>
        ) : (
          <div className="imgContainer2">
            <img src={image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Galery;
