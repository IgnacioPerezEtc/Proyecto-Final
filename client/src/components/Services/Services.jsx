import React from "react";
import style from "./Services.module.css";
import restaurant from "../../assets/icons/restaurant.svg"
const Services = () => {
  return (
    <div className={style.bodyService}>
      <div className={style.serviceContainer}>
        <div>
            <div className={style.imageContainer}>
              <img className={style.img} src={restaurant} alt="" />  
            </div>
             
        </div>
        <h3 className={style.title}>Restaurant</h3>
        <p className={style.paraf}>Lorem ipsum dolor sit amet, consectetur </p>
      </div>
      <div className={style.serviceContainer}>
        <div>
            <div className={style.imageContainer}>
              <img className={style.img} src={restaurant} alt="" />  
            </div>
             
        </div>
        <h3 className={style.title}>Restaurant</h3>
        <p className={style.paraf}>Lorem ipsum dolor sit amet, consectetur </p>
      </div>
      <div className={style.serviceContainer}>
        <div>
            <div className={style.imageContainer}>
              <img className={style.img} src={restaurant} alt="" />  
            </div>
             
        </div>
        <h3 className={style.title}>Restaurant</h3>
        <p className={style.paraf}>Lorem ipsum dolor sit amet, consectetur </p>
      </div>
      <div className={style.serviceContainer}>
        <div>
            <div className={style.imageContainer}>
              <img className={style.img} src={restaurant} alt="" />  
            </div>
             
        </div>
        <h3 className={style.title}>Restaurant</h3>
        <p className={style.paraf}>Lorem ipsum dolor sit amet, consectetur </p>
      </div>
    </div>
  );
};
export default Services;
