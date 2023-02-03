import React from "react";
import style from "./ReservationCard.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReservationCard = (props) => {

    const star = props.rating;
    let stars = [];
    for (let i = 0; i < star; i++) {
        stars.push(<FontAwesomeIcon className="text-warning me-2" icon={faStar} />)
    }

    return (
        <div>
            <div className={style.container}>

                <h1 className={style.title}>{props.name}</h1>
                <p>{stars}</p>
                <p>{props.location}</p>
                <p>Accommodation for {props.num} people</p>
                <p>Accommodation for {props.numAdults} adults</p>
                <p>Accommodation for {props.numChildren} children</p>

                <div className={style.checkinContainer}>
                    <div>
                        <p>Check in</p>
                        <h2>{props.checkinDate}</h2>
                    </div>

                    <div>
                        <p>Check out</p>
                        <h2>{props.checkoutDate}</h2>
                    </div>
                </div>

                <div className="clearfix"></div>
            </div>
        </div>
    )
}

export default ReservationCard;