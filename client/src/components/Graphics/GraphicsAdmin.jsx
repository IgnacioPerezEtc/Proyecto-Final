import React from "react";
import HotelsReservation from "./HotelsReservation";
import ReservationPerMonth from "./ReservationPerMonth";
import ReservationPerCountry from "./ReservationPerCountry";
import style from "./Graphics.module.css"

const GraphicsAdmin = () => {

  return (
    <div id="dashboard">

      <div className={style.containerG}>
      <HotelsReservation />
      <ReservationPerCountry />

      </div>

      <ReservationPerMonth />

    </div>
  )
}

export default GraphicsAdmin;
