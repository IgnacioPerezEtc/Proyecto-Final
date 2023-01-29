import React from "react";
import { Link } from "react-router-dom";
import style from "./BookingCard.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { getUrlPayment } from "../../utils";
import { signInWithGoogle } from "../../fireBase/Firebase";

const BookingCard = (props) => {

    const star = props.rating;
    let stars = [];
    for (let i = 0; i < star; i++) {
        stars.push(<FontAwesomeIcon className="text-warning me-2" icon={faStar} />)
    }

    const items = {
        products: [
            {
                id: props.id,
                title: props.name,
                description: `Accomodation for ${props.num} people`,
                quantity: 1,
                unit_price: props.price
            }
        ]
    }
    
    const handlePayment = async (event) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if(user) {
            let url = await getUrlPayment(items);
            window.location.replace(url.link);
        } 
        else {
            signInWithGoogle();
        }
    };

    const modify = () => {
        window.location.replace(`/rooms/${props.id}`)
    };

    return(
        <div>
            <Link className={style.link} onClick={modify}>Modify</Link>

            <div className={style.container}>

                <h1 className={style.title}>{props.name}</h1>
                <p>{stars}</p>
                <p>{props.location}</p>
                <p>Accommodation for {props.num} people</p>

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

                <hr/>

                <div>
                    <div className={style.price}>
                        <h3>Total</h3>
                        <h1>${props.price}</h1>
                    </div>

                    <button onClick={handlePayment} className={style.createHotel}>Confirm checkout</button>
                </div>
            </div>
        </div>
    )
};

export default BookingCard;