import React from "react";
import style from "./Booking.module.css";
import BookingCard from "../BookingCard/BookingCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoomById } from "../../redux/actions";
import { useState } from "react";


const Booking = () => {
    // const dispatch = useDispatch();
    // const roomDetail = useSelector(state => state.roomDetail);
    // const [ info, setInfo ] = useState([]);
    
    // useEffect(async ()=>{
    //     await getDataByLocalStorage();
    //     dispatch(getRoomById(1));
    //     return async () => await console.log(info[0])
    // }, [dispatch])
    
    // function getDataByLocalStorage() {
    //     const data = JSON.parse(localStorage.getItem('habitacion'));
    //     setInfo(data);
    // };    

    return (
        <div>
            <div className={style.titleContainer}>
                <h2 className={style.blue}>Booking</h2>
                <h2 className={style.red}>Detail</h2>
            </div>
            <BookingCard
                name='Carmona Hotel'
                rating={5}
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