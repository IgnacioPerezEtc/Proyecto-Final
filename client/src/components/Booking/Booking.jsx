import React from "react";
import style from "./Booking.module.css";
import BookingCard from "../BookingCard/BookingCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoomById } from "../../redux/actions";
import { useState } from "react";


const Booking = () => {
    const dispatch = useDispatch();
    const roomDetail = useSelector(state => state.roomDetail);
    const [ info, setInfo ] = useState(JSON.parse(localStorage.getItem("room")));
    
    useEffect(() => {
        dispatch(getRoomById(info[0].id));
      }, []);

    return (
        <div>
            {roomDetail.hasOwnProperty("hotel") && roomDetail.id === parseInt(info[0].id) ? (
                <div>
            <div className={style.titleContainer}>
                <h2 className={style.blue}>Booking</h2>
                <h2 className={style.red}>Detail</h2>
            </div>
            <BookingCard
                name={roomDetail.hotel.name[0].toUpperCase() + roomDetail.hotel.name.slice(1)}
                rating={roomDetail.hotel.rating}
                location={roomDetail.hotel.location}
                num={parseInt(info[0].adults) + parseInt(info[0].children)}
                checkinDate={info[0].check_in}
                checkoutDate={info[0].check_out}
                price={roomDetail.value}
            />
            </div>): <div className={style.containerLoader}>
          <img src="https://cdn.dribbble.com/users/118337/screenshots/3831581/building_loader.gif" />
        </div>}
        </div>
    )
};

export default Booking;