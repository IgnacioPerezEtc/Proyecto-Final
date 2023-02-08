import React from "react";
import HotelsReservation from "./HotelsReservation";
import ReservationPerMonth from "./ReservationPerMonth";
import ReservationPerCountry from "./ReservationPerCountry";

const BookingData = () => {

  return (
    <div style={{width:'700px', height:'500px', border:"1px solid black"}}>
      
      {/* <HotelsReservation/> */}
      {/* <ReservationPerMonth /> */}
      <ReservationPerCountry />
    </div>
  )
}

export default BookingData;
