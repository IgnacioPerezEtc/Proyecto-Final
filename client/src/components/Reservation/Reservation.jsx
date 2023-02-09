import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReservations } from "../../redux/actions";
import ReservationCard from "../ReservationCard/ReservationCard";
import style from "./Reservation.module.css";
import Error from "../Error/Error";
import NavBarDetails from "../NavBarDetails/NavBarDetails";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
const Reservation = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const allReservation = useSelector((state) => state.allReservation);
  const infoUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(getAllReservations(infoUser[0].email));
  }, []);
  if (error) {
    return (
      <div>
        <div>
          <NavBarDetails />
        </div> <div className={style.flexContainer}>
            <h2 className={style.blue}>Reservation</h2>
        <h2 className={style.red}>History</h2>
            </div>
        <div className={style.containerLoader}>
          <p className={style.blue2}>Your Reservation History will be here,</p>
          <img
            src="https://img.freepik.com/vector-gratis/turistas-felices-eligiendo-hotel-habitacion-reserva-linea-ilustracion-plana_74855-10811.jpg?w=1380&t=st=1675036223~exp=1675036823~hmac=90aac36387831821c356e5386307f0099f52e90d983c23e48db5ab13ac855a78"
            alt=""
          />
        </div>
        <Footer />
      </div>
    );
  }
  if (allReservation.length) {
    return (
      <div>
        <div>
          <NavBarDetails />
        </div>
        <div className={style.titleContainer}>
          <h2 className={style.blue}>Reservation</h2>
          <h2 className={style.red}>History</h2>
        </div>
        {allReservation?.map((reservation, index) => {
          return (
            <div>
              {reservation.hasOwnProperty("room") ? (
                <ReservationCard
                  key={index}
                  id={reservation.id}
                  name={
                    reservation.room.hotel.name[0].toUpperCase() +
                    reservation.room.hotel.name.slice(1)
                  }
                  rating={reservation.room.hotel.rating}
                  location={reservation.room.hotel.location}
                  num={reservation.people}
                  numAdults={reservation.adults}
                  numChildren={reservation.children}
                  checkinDate={reservation.startDate}
                  checkoutDate={reservation.endDate}
                />
              ) : (
                <div>Loading</div>
              )}
            </div>
          );
        })}<Footer />
      </div>
    );
  }

};

export default Reservation;
