import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReservations } from "../../redux/actions";
import ReservationCard from "../ReservationCard/ReservationCard";
import style from "./Reservation.module.css";

const Reservation = () => {
    const dispatch = useDispatch();
    const allReservation = useSelector(state => state.allReservation);
    const infoUser = (JSON.parse(localStorage.getItem("user")));

    useEffect(() => {
        dispatch(getAllReservations(infoUser[0].email));
    }, []);

    if (allReservation.length) {
        return (
            <div>
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
                            ) : (<div>Loading</div>)
                            }
                        </div>
                    )
                })}
            </div>
        )
    }
};

export default Reservation;