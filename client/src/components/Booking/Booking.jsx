import React from "react";
import { Link } from "react-router-dom";
import style from "./Booking.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { getUrlPayment } from "../../utils";
import { redirect } from "react-router-dom";

const Booking = () => {

    const star = 5;
    let stars = [];
    for (let i = 0; i < star; i++) {
        stars.push(<FontAwesomeIcon className="text-warning me-2" icon={faStar} />)
    }

    const items = {
        products: [
            {
                id: 1,
                title: "Carmona Hotel",
                description: "Accomodation for 2 people",
                quantity: 1,
                unit_price: 400
            }
        ]
    }
    

    const handlePayment = async (event) => {
        let url = await getUrlPayment(items);
        console.log(url);
        window.location.replace(url.link);
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

                <div className="clearfix"></div>

                <hr/>

                <div>
                    <div className={style.price}>
                        <h3>Total</h3>
                        <h1>$400</h1>
                    </div>

                    <button onClick={handlePayment} className={style.createHotel}>Confirm checkout</button>
                </div>
            </div>
        </div>
    )
};

export default Booking;