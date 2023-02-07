import React from "react";
import style from "./Commentary.module.css";
import "./Commentary.css"
import user from "../../../src/assets/img/user.png";
import imgIgna from "../AboutUs/img/fotoIgna.jpg";
import imgRodri from "../AboutUs/img/fotoRodri.jpg"

const Commentary = () => {
  return (
    <div className={style.containerCommentary} id="services">
      <div className={style.subcontainer}>
        <div className={style.titleContainer}>
          <h2 className="blueComentary">What</h2>
          <h2 className={style.red}> People Say </h2>
        </div>
<<<<<<< HEAD
=======
        <p className="descComment">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
          viverra
        </p>
        <p className="descComment">parturient diam sagittis nec cras.</p>
>>>>>>> bbc48f7dd36fd01419faab7911589e96e5df3520
      </div>
      <div className={style.containerComments}>
        <div className={style.flexUserComment}>
          <div className="containerCards">
            <p className={style.paraf}>
            The location is very good and the hotel has an excellent area for guests.
            </p>
            <span>★★★★★</span>
            <span className={style.arrow}></span>
          </div>
          <img src={user} alt="" />
<<<<<<< HEAD
          <h2>Jane Cooper</h2>
=======
          <h2 className="h2Commentary">Jane Cooper</h2>
          <h3 className="h2Commentary">@JaneCopper</h3>
>>>>>>> bbc48f7dd36fd01419faab7911589e96e5df3520
        </div>

        <div className={style.flexUserComment}>
          <div className="containerCards">
            <p className={style.paraf}>
              Very friendly staff, good rooms, breakfast and services offered.
            </p>
            <span>★★★★★</span>
            <span className={style.arrow}></span>
          </div>
<<<<<<< HEAD
          <img src={imgIgna}  className={style.img} alt="" />
          <h2>Ignacio Perez</h2>
=======
          <img src={user} alt="" />
          <h2 className="h2Commentary">Jane Cooper</h2>
          <h3 className="h2Commentary">@JaneCopper</h3>
>>>>>>> bbc48f7dd36fd01419faab7911589e96e5df3520
        </div>
        <div className={style.flexUserComment}>
          <div className="containerCards">
            <p className={style.paraf}>
              What stands out from my stay is the friendliness of the staff, all very friendly.
            </p>
            <span>★★★★★</span>
            <span className={style.arrow}></span>
          </div>
<<<<<<< HEAD
          <img src={imgRodri} className={style.img} alt="" />
          <h2>Rodri Roman</h2>
          
=======
          <img src={user} alt="" />
          <h2 className="h2Commentary">Jane Cooper</h2>
          <h3 className="h2Commentary">@JaneCopper</h3>
>>>>>>> bbc48f7dd36fd01419faab7911589e96e5df3520
        </div>
      </div>
    </div>
  );
};

export default Commentary;
