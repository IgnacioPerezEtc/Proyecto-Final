import React from "react";
import { NavLink } from "react-router-dom";
import style from "./AboutUs.module.css";

const AboutUs = (props) => {
  return (
    <div className={style.containerAboutUs}>
      <div className={style.containerContent}>
        <h1>En construcción</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          totam cum atque. Labore, provident voluptate? At, atque. Quae autem
          culpa accusantium, laudantium, minus possimus odio fuga dolorum saepe
          accusamus esse?
        </p>

        <NavLink to={"/"} className={style.buttonAbout}>
          <button>Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default AboutUs;
