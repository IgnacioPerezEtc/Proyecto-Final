import React from "react";
import style from "./Booking.module.css";
import BookingCard from "../BookingCard/BookingCard";

const Booking = () => {
    return (
        <div>
            <div className={style.titleContainer}>
                <h2 className={style.blue}>Booking</h2>
                <h2 className={style.red}>Detail</h2>
            </div>
            <BookingCard
                name='Carmona Hotel'
                location='Colombia, Cali'
                num='2'
                checkinDate='04 feb. 2023'
                checkinHour='15:00 h'
                checkoutDate='06 feb. 2023'
                checkoutHour='12:00 h'
                price='$400'
            />
        </div>
    )
};

export default Booking;