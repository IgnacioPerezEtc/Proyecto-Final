import React from "react";
import { Link } from "react-router-dom";
import style from "./Booking.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons';

const Booking = () => {

    const star = 5;
    let stars = [];
    for (let i = 0; i < star; i++) {
        stars.push(<FontAwesomeIcon className="text-warning me-2" icon={faStar} />)
    }

    return (
        <div>
            <div className={style.titleContainer}>
                <h2 className={style.blue}>Booking</h2>
                <h2 className={style.red}>Detail</h2>
            </div>

            <Link className={style.link}>Modify</Link>

            <div className={style.container}>

                <h1 className={style.title}>Carmona Hotel</h1>
                <p>{stars}</p>
                <p>Medellin</p>
                <p>Accommodation for 2 people</p>

                <div className={style.checkinContainer}>
                    <div>
                        <p>Check in</p>
                        <h2>04 feb. 2023</h2>
                        <p>15:00 h</p>
                    </div>

                    <div>
                        <p>Check out</p>
                        <h2>06 feb. 2023</h2>
                        <p>12:00 h</p>
                    </div>
                </div>

                <div class="clearfix"></div>

                <hr/>

                <div className={style.price}>
                    <h3>Total</h3>
                    <h1>$400</h1>
                </div>
            </div>
        </div>
    )
};

export default Booking;