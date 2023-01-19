import React from "react";
import style from "./Footer.module.css";
import icon from "./img/icon.png";
import message from "./img/message.png";
import mobile from "./img/mobile.png";
import location from "./img/location.png";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
const Footer = () => {
  return (
    <div className={style.bodyFooter}>
      <footer className={style.footer}>
      <div className={style.firstflexContainer}>
          <div>
            <h3 className={style.FirstTitle}>
              <img src={icon} className={style.Firsticon} alt="" />
              Your Destiny
            </h3>
            <br />
          </div>
          <div>
            <p className={style.param}>
              Lorem ipsum dolor sit amet, consectetur{" "}
            </p>
          </div>

          <div className={style.iconContainer}>
            <div className={style.iconsContainer}>
              <img className={style.icon} src={instagram} alt="" />
              <img className={style.iconFacebook} src={facebook} alt="" />
              <img className={style.icon} src={youtube} alt="" />
              <img className={style.icon} src={twitter} alt="" />
            </div>
          </div>
          <div>
            <input
              className={style.input}
              type="text"
              placeholder="your email adress"
            />
          </div>
          {/* <h3 className={style.titles}>Usefull Link</h3>
          <h3 className={style.titles}>Services</h3>
          <h3 className={style.titles}>Reach Us</h3> */}
        </div>
        <div className={style.flexContainer}>
          <div>
            <ul>
              <h3 className={style.titleList}>Usefull link</h3>
              <li className={style.list}>Gallery</li>
              <li className={style.list}>Blogs</li>
              <li className={style.list}>About</li>
              <li className={style.list}>Image</li>
              <li className={style.list}>Rooms</li>
            </ul>
          </div>
          </div>
          <div>
            <ul>
              <h3 className={style.titleList}>Services</h3>
              <li className={style.list}>Restaurant</li>
              <li className={style.list}>Coffe shop</li>
              <li className={style.list}>Car wash</li>
              <li className={style.list}>Cycle Rent</li>
              <li className={style.list}>Car Rent</li>
            </ul>
          </div>
          <div>
            <ul className={style.liContainer}>
              <h3 className={style.titleList}>Reach Us</h3>
              <div className={style.flex}>
                <img  src={message} className={style.icons} alt="" />
                <li className={style.list}>6391 Elgin St.</li>
              </div>

              <div className={style.flex}>
                <img src={mobile} className={style.icons} alt="" />{" "}
                <li className={style.list}>(239) 555-0108</li>
              </div>

              <div className={style.flex}>
                <img src={location} className={style.icons} alt="" />{" "}
                <li className={style.list}>
                  6391 Elgin St. Celina, Delaware 10299
                </li>
              </div>
            </ul>
          </div>
        
      </footer>
    </div>
  );
};
export default Footer;
