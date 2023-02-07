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
          <h3 className={style.title}>Maps</h3>
          <p className={style.paraf}>
          You can find your hotel more precisely, with the streets that appear on the map. {" "}
          </p>
        </div>
        <div className="containerCardsServices">
          <div>
            <div className={style.imageContainer}>
              <img className={style.img} src={restaurant} alt="" />
            </div>
          </div>
          <h3 className={style.title}>Favorites</h3>
          <p className={style.paraf}>
          You can add the hotels that most appeal to you to a favorites list.{" "}
          </p>
        </div>
        <div className="containerCardsServices">
          <div>
            <div className={style.imageContainer}>
              <img className={style.img} src={restaurant} alt="" />
            </div>
          </div>
          <h3 className={style.title}>Payment</h3>
          <p className={style.paraf}>
          We have a payment gateway so you can make your payments more securely.{" "}
          </p>
        </div>
        <div className="containerCardsServices">
          <div>
            <div className={style.imageContainer}>
              <img className={style.img} src={restaurant} alt="" />
            </div>
          </div>
          <h3 className={style.title}>History reservation</h3>
          <p className={style.paraf}>
          You have a reservation history so you don't forget your check in/out.{" "}
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
          <h3 className={style.title}>Dark Mode</h3>
          <p className={style.paraf}>
          You can change the screen mode as you like.{" "}
          </p>
        </div>
        <div className="containerCardsServices">
          <div>
            <div className={style.imageContainer}>
              <img className={style.img} src={restaurant} alt="" />
            </div>
          </div>
          <h3 className={style.title}>Email confirmation</h3>
          <p className={style.paraf}>
          We have an email notice to notify you that your purchase is made.{" "}
          </p>
        </div>
        <div className="containerCardsServices">
          <div>
            <div className={style.imageContainer}>
              <img className={style.img} src={restaurant} alt="" />
            </div>
          </div>
          <h3 className={style.title}>View Rooms</h3>
          <p className={style.paraf}>
          You can view each available room with its specialties without prior reservation.{" "}
          </p>
        </div>
        <div className="containerCardsServices">
          <div>
            <div className={style.imageContainer}>
              <img className={style.img} src={restaurant} alt="" />
            </div>
          </div>
          <h3 className={style.title}>Chat Bot</h3>
          <p className={style.paraf}>
          We have a chat bot so you can answer your questions.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
