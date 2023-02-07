import React from "react";
import { NavLink } from "react-router-dom";
import style from "./AboutUs.module.css";
import fotoIgna from "./img/fotoIgna.jpg";
import fotoSanti from "./img/fotoSanti.jpg";
import fotoLili from "./img/fotoLili.jpg";
import fotoLauti from "./img/fotoLauti.jpeg";
import fotoRodri from "./img/fotoRodri.jpg";
import fotoDavid from "./img/fotoDavid.jpg";
import fotoGabi from "./img/fotoGabi.jpg";
import gitHub from "./img/github.svg";
import fotoAnonimous from "./img/fotoAnonimous.png";
import NavBarDetails from "../NavBarDetails/NavBarDetails.jsx";
const AboutUs = (props) => {
  return (
    <div>
      <NavBarDetails />
      <div className={style.flexContainer}>
        <h1 className={style.title}>About us</h1>
      </div>
      <div className={style.flexContainer}>
      </div>

      <div className={style.containerAboutUs}>
        <div className={style.containerUs}>
          <div className={style.imgContainer}>
            <img className={style.imageUs} src={fotoIgna} alt="" />
          </div>
          <div>
            <h2 className={style.name}>Ignacio Perez Etchegaray</h2>
          </div>
          <div className={style.iconContainer}>
            <a
              href="https://www.linkedin.com/in/ignacio-p%C3%A9rez-etchegaray-0858b724a/"
              target={"_blank"}
            >
              <img
                className={style.iconImage}
                src="http://cdn.onlinewebfonts.com/svg/img_24845.png"
              />
            </a>
            <a
              href="https://github.com/IgnacioPerezEtc"
              target={"_blank"}
            > <img className={style.iconGitHub} src={gitHub} /></a>
           
          </div>
        </div>
        <div className={style.containerUs}>
          <div className={style.imgContainer}>
            <img className={style.imageUs} src={fotoSanti} alt="" />
          </div>
          <div>
            <h2 className={style.name}>Santiago Carmona</h2>
          </div>
          <div className={style.iconContainer}>
            <a
              href="https://www.linkedin.com/in/santiago-carmona-osorio-b3252825b/"
              target={"_blank"}
            >
              <img
                className={style.iconImage}
                src="http://cdn.onlinewebfonts.com/svg/img_24845.png"
              />
            </a>
            <a
              href="https://github.com/SCarmona02"
              target={"_blank"}
            > <img className={style.iconGitHub} src={gitHub} /></a>
           
          </div>
        </div>
        <div className={style.containerUs}>
          <div className={style.imgContainer}>
            <img className={style.imageUs} src={fotoLili} alt="" />
          </div>
          <div>
            <h2 className={style.name}>Liliana Arias</h2>
          </div>
          <div className={style.iconContainer}>
            <a
              href="https://www.linkedin.com/in/liliana-arias-rivera-ab8aa7252/"
              target={"_blank"}
            >
              <img
                className={style.iconImage}
                src="http://cdn.onlinewebfonts.com/svg/img_24845.png"
              />
            </a>
            <a
              href="https://github.com/Nina1823"
              target={"_blank"}
            ><img className={style.iconGitHub} src={gitHub} /></a>
            
          </div>
        </div>
        <div className={style.containerUs}>
          <div className={style.imgContainer}>
            <img className={style.imageUs} src={fotoLauti} alt="" />
          </div>
          <div>
            <h2 className={style.name}>Lautaro Tejada</h2>
          </div>
          <div className={style.iconContainer}>
            <a
              href="https://www.linkedin.com/in/lautaro-tejada-733b47264/"
              target={"_blank"}
            >
              <img
                className={style.iconImage}
                src="http://cdn.onlinewebfonts.com/svg/img_24845.png"
              />
            </a>
            <a
              href="https://github.com/lauti3314"
              target={"_blank"}
            >
                 <img className={style.iconGitHub} src={gitHub} />
            </a>
         
          </div>
        </div>
      </div>
      <div className={style.containerAboutUs}>
        <div className={style.containerUs}>
          <div className={style.imgContainer}>
            <img className={style.imageUs} src={fotoRodri} alt="" />
          </div>
          <div>
            <h2 className={style.name}>Rodrigo Roman</h2>
          </div>
          <div className={style.iconContainer}>
            <a
              href="https://www.linkedin.com/in/rodrigo-roman-0a58811b0/"
              target={"_blank"}
            >
              <img
                className={style.iconImage}
                src="http://cdn.onlinewebfonts.com/svg/img_24845.png"
              />
            </a>
            <a
              href="https://github.com/Rodri7Roman"
              target={"_blank"}
            >
               <img className={style.iconGitHub} src={gitHub} />
            </a>
           
          </div>
        </div>
        <div className={style.containerUs}>
          <div className={style.imgContainer}>
            <img className={style.imageUs} src={fotoAnonimous} alt="" />
          </div>
          <div>
            <h2 className={style.name}>Carlos Valer</h2>
          </div>
          <div className={style.iconContainer}>
            <img
              className={style.iconImage}
              src="http://cdn.onlinewebfonts.com/svg/img_24845.png"
            />
            <a href="https://github.com/cvp30" target={"_blank"}>
              <img className={style.iconGitHub} src={gitHub} />
            </a>
          </div>
        </div>
        <div className={style.containerUs}>
          <div className={style.imgContainer}>
            <img className={style.imageUs} src={fotoDavid} alt="" />
          </div>
          <div>
            <h2 className={style.name}>David Ruales</h2>
          </div>
          <div className={style.iconContainer}>
            <a
              href="https://www.linkedin.com/in/david-ruales-aa8119246/"
              target={"_blank"}
            >
              <img
                className={style.iconImage}
                src="http://cdn.onlinewebfonts.com/svg/img_24845.png"
              />
            </a>
            <a href="https://github.com/Ruales1138" target={"_blank"}>
              <img className={style.iconGitHub} src={gitHub} />
            </a>
          </div>
        </div>
        <div className={style.containerUs}>
          <div className={style.imgContainer}>
            <img className={style.imageUs} src={fotoGabi} alt="" />
          </div>
          <div>
            <h2 className={style.name}>Gabriel Bustos</h2>
          </div>
          <div className={style.iconContainer}>
            <a
              href="https://www.linkedin.com/in/gabriel-bustos-a0ab8b221/"
              target={"_blank"}
            >
              <img
                className={style.iconImage}
                src="http://cdn.onlinewebfonts.com/svg/img_24845.png"
              />
            </a>
            <a href="https://github.com/GabrielBustos0905" target={"_blank"}>
              <img className={style.iconGitHub} src={gitHub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
