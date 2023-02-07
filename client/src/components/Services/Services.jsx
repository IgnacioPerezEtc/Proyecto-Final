import React from "react";
import style from "./Services.module.css";
import "./Services.css"
import restaurant from "../../assets/icons/restaurant.svg";
const Services = () => {
  return (
    <div className={style.containerService}  id="services">
      <div className={style.subcontainer}>
        <div className={style.titleContainer}>
          <h2 className="blueOur">Our</h2>
          <h2 className={style.red}>Service</h2>
        </div>
        <p className="descService">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
          viverra
        </p>
        <p className="descService">parturient diam sagittis nec cras.</p>
      </div>
      <div className={style.bodyService}>
        <div className="containerCardsServices">
          <div>
            <div className={style.imageContainer}>
              <img className={style.img} src={restaurant} alt="" />
            </div>
          </div>
          <h3 className={style.title}>Restaurant</h3>
          <p className={style.paraf}>
            Lorem ipsum dolor sit amet, consectetur{" "}
          </p>
        </div>
        <div className="containerCardsServices">
          <div>
            <div className={style.imageContainer}>
              <img className={style.img} src={restaurant} alt="" />
            </div>
          </div>
          <h3 className={style.title}>Restaurant</h3>
          <p className={style.paraf}>
            Lorem ipsum dolor sit amet, consectetur{" "}
          </p>
        </div>
        <div className="containerCardsServices">
          <div>
            <div className={style.imageContainer}>
              <img className={style.img} src={restaurant} alt="" />
            </div>
          </div>
          <h3 className={style.title}>Restaurant</h3>
          <p className={style.paraf}>
            Lorem ipsum dolor sit amet, consectetur{" "}
          </p>
        </div>
        <div className="containerCardsServices">
          <div>
            <div className={style.imageContainer}>
              <img className={style.img} src={restaurant} alt="" />
            </div>
          </div>
          <h3 className={style.title}>Restaurant</h3>
          <p className={style.paraf}>
            Lorem ipsum dolor sit amet, consectetur{" "}
          </p>
        </div>
      </div>
      <div className={style.bodyService} id="services">
        <div className="containerCardsServices">
          <div>
            <div className={style.imageContainer}>
              <img className={style.img} src={restaurant} alt="" />
            </div>
          </div>
          <h3 className={style.title}>Restaurant</h3>
          <p className={style.paraf}>
            Lorem ipsum dolor sit amet, consectetur{" "}
          </p>
        </div>
        <div className="containerCardsServices">
          <div>
            <div className={style.imageContainer}>
              <img className={style.img} src={restaurant} alt="" />
            </div>
          </div>
          <h3 className={style.title}>Restaurant</h3>
          <p className={style.paraf}>
            Lorem ipsum dolor sit amet, consectetur{" "}
          </p>
        </div>
        <div className="containerCardsServices">
          <div>
            <div className={style.imageContainer}>
              <img className={style.img} src={restaurant} alt="" />
            </div>
          </div>
          <h3 className={style.title}>Restaurant</h3>
          <p className={style.paraf}>
            Lorem ipsum dolor sit amet, consectetur{" "}
          </p>
        </div>
        <div className="containerCardsServices">
          <div>
            <div className={style.imageContainer}>
              <img className={style.img} src={restaurant} alt="" />
            </div>
          </div>
          <h3 className={style.title}>Restaurant</h3>
          <p className={style.paraf}>
            Lorem ipsum dolor sit amet, consectetur{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
