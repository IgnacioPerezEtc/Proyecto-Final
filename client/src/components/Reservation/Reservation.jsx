import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReservations } from "../../redux/actions";

const Reservation = () => {
    const dispatch = useDispatch();
    const allReservation = useSelector(state => state.allReservation);

    useEffect(()=>{
        dispatch(getAllReservations());
    }, [dispatch]);

    return (
        <div>Reservation</div>
    )
};

export default Reservation;