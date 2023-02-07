import React from "react";
import style from "./Commentary.module.css";
import "./Commentary.css"
import user from "../../../src/assets/img/user.png";

const Commentary = () => {
  return (
    <div className={style.containerCommentary} id="services">
      <div className={style.subcontainer}>
        <div className={style.titleContainer}>
          <h2 className="blueComentary">What</h2>
          <h2 className={style.red}> People Say </h2>
        </div>
        <p className="descComment">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
          viverra
        </p>
        <p className="descComment">parturient diam sagittis nec cras.</p>
      </div>
      <div className={style.containerComments}>
        <div className={style.flexUserComment}>
          <div className="containerCards">
            <p className={style.paraf}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
              consectetur amet, diam pellentesque lectus sit morbi.
            </p>
            <span>★★★★★</span>
            <span className={style.arrow}></span>
          </div>
          <img src={user} alt="" />
          <h2 className="h2Commentary">Jane Cooper</h2>
          <h3 className="h2Commentary">@JaneCopper</h3>
        </div>

        <div className={style.flexUserComment}>
          <div className="containerCards">
            <p className={style.paraf}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
              consectetur amet, diam pellentesque lectus sit morbi.
            </p>
            <span>★★★★★</span>
            <span className={style.arrow}></span>
          </div>
          <img src={user} alt="" />
          <h2 className="h2Commentary">Jane Cooper</h2>
          <h3 className="h2Commentary">@JaneCopper</h3>
        </div>
        <div className={style.flexUserComment}>
          <div className="containerCards">
            <p className={style.paraf}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
              consectetur amet, diam pellentesque lectus sit morbi.
            </p>
            <span>★★★★★</span>
            <span className={style.arrow}></span>
          </div>
          <img src={user} alt="" />
          <h2 className="h2Commentary">Jane Cooper</h2>
          <h3 className="h2Commentary">@JaneCopper</h3>
        </div>
      </div>
    </div>
  );
};

export default Commentary;
