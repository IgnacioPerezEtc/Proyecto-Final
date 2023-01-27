import React from "react";
import { Link } from "react-router-dom";
import style from "./BookingCard.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { getUrlPayment } from "../../utils";
import { redirect } from "react-router-dom";

const BookingCard = (props) => {
    const star = props.rating;
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

    return(
        <div>
            <Link className={style.link}>Modify</Link>

            <div className={style.container}>

                <h1 className={style.title}>{props.name}</h1>
                <p>{stars}</p>
                <p>{props.location}</p>
                <p>Accommodation for {props.num} people</p>

                <div className={style.checkinContainer}>
                    <div>
                        <p>Check in</p>
                        <h2>{props.checkinDate}</h2>
                        <p>{props.checkinHour}</p>
                    </div>

                    <div>
                        <p>Check out</p>
                        <h2>{props.checkoutDate}</h2>
                        <p>{props.checkoutHour}</p>
                    </div>
                </div>

                <div className="clearfix"></div>

                <hr/>

                <div>
                    <div className={style.price}>
                        <h3>Total</h3>
                        <h1>{props.price}</h1>
                    </div>

                    <button onClick={handlePayment} className={style.createHotel}>Confirm checkout</button>
                </div>
            </div>
        </div>
    )
};

export default BookingCard;