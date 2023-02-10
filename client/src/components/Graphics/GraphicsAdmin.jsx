import React from "react";
import HotelsReservation from "./HotelsReservation";
import ReservationPerMonth from "./ReservationPerMonth";
import ReservationPerCountry from "./ReservationPerCountry";


const GraphicsAdmin = () => {

  return (
    <div id="dashboard">
      <div className="container d-flex flex-column align-items-center gap-5">
        <HotelsReservation />
        <ReservationPerCountry />
        <ReservationPerMonth />
      </div>

    </div>
  )
}

export default GraphicsAdmin;
