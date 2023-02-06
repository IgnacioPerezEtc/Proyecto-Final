import React from "react";
import style from "./Services.module.css";
import restaurant from "../../assets/icons/restaurant.svg";
const Services = () => {
  return (
    <div className={style.containerService}  id="services">
      <div className={style.subcontainer}>
        <div className={style.titleContainer}>
          <h2 className={style.blueOur}>Our</h2>
          <h2 className={style.red}>Service</h2>
        </div>
        <p className={style.descService}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
          viverra
        </p>
        <p className={style.descService}>parturient diam sagittis nec cras.</p>
      </div>
      <div className={style.bodyService}>
        <div className={style.containerCards}>
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
        <div className={style.containerCards}>
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
        <div className={style.containerCards}>
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
        <div className={style.containerCards}>
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
        <div className={style.containerCards}>
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
        <div className={style.containerCards}>
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
        <div className={style.containerCards}>
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
        <div className={style.containerCards}>
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
