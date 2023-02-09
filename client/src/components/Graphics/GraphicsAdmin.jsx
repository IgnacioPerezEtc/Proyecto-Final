import React from "react";
import HotelsReservation from "./HotelsReservation";
import ReservationPerMonth from "./ReservationPerMonth";
import ReservationPerCountry from "./ReservationPerCountry";

const GraphicsAdmin = () => {

  return (
    <div>

      <div className="d-flex mb-5 gap-5">
      <HotelsReservation />
      <ReservationPerCountry />

      </div>

      <ReservationPerMonth />

    </div>
  )
}

export default GraphicsAdmin;
