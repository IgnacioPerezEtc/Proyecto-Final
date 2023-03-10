import React from "react";
import style from "./Booking.module.css";
import BookingCard from "../BookingCard/BookingCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoomById } from "../../redux/actions";
import { useState } from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Error from "../Error/Error.jsx";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import NavBarDetails from "../NavBarDetails/NavBarDetails";
const Booking = () => {
  const dispatch = useDispatch();
  const roomDetail = useSelector((state) => state.roomDetail);
  const error = useSelector((state) => state.error);
  const infoUser = JSON.parse(localStorage.getItem("user"));
  if (!infoUser) {
    Swal.fire("Sorry, you must to log-in in first to reserve", "error");
    Swal.fire({
      title: "Sorry",
      text: "you must to log-in first to reserve",
    });
    window.setTimeout(() => {
      window.location.href = "/";
    }, 2500);
  }
  const info = JSON.parse(localStorage.getItem(infoUser[0].email));
  const infoDays = JSON.parse(
    localStorage.getItem(`${infoUser[0].email}-days`)
  );

  useEffect(() => {
    if (info) {
      dispatch(getRoomById(info[0].id));
    }
  }, []);

  return (
    <div>
      <NavBarDetails />
      <div className={style.titleContainer}>
        <h2 className={style.blue}>Booking</h2>
        <h2 className={style.red}>Detail</h2>
      </div>

      {roomDetail.hasOwnProperty("hotel") &&
      roomDetail.id === parseInt(info[0].id) ? (
        <div>
          <BookingCard
            key={roomDetail.id}
            id={roomDetail.id}
            name={
              roomDetail.hotel.name[0].toUpperCase() +
              roomDetail.hotel.name.slice(1)
            }
            rating={roomDetail.hotel.rating}
            location={roomDetail.hotel.location}
            num={parseInt(info[0].adults) + parseInt(info[0].children)}
            checkinDate={info[0].check_in}
            checkoutDate={info[0].check_out}
            price={roomDetail.value}
            days={infoDays}
          />
        </div>
      ) : (
        <div className={style.containerLoader}>
          <p className={style.blue2}>Your next Reservations will be here</p>
          <img
            src="https://img.freepik.com/vector-gratis/turistas-felices-eligiendo-hotel-habitacion-reserva-linea-ilustracion-plana_74855-10811.jpg?w=1380&t=st=1675036223~exp=1675036823~hmac=90aac36387831821c356e5386307f0099f52e90d983c23e48db5ab13ac855a78"
            alt=""
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Booking;
