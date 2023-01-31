import React from "react";
import { Link } from "react-router-dom";
import style from "./BookingCard.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { getUrlPayment } from "../../utils";
import { redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dataReservation } from "../../redux/actions";

const BookingCard = (props) => {
    const dispatch = useDispatch();
    const infoUser = (JSON.parse(localStorage.getItem("user")));
    const info = (JSON.parse(localStorage.getItem(infoUser[0].email)));
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
                quantity: props.days,
                unit_price: props.price
            }
        ]
    }
    
    const handlePayment = async (event) => {
        let url = await getUrlPayment(items);
        window.location.replace(url.link);
    }

    const handleModify = async (event) => {
        dispatch(dataReservation(info[0]))
    }

    return(
        <div>
            <Link to={`/rooms/${props.id}`} className={style.link} onClick={handleModify}>Modify</Link>

            <div className={style.container}>

                <h1 className={style.title}>{props.name}</h1>
                <p>{stars}</p>
                <p>{props.location}</p>
                <p>{`$${props.price} night`}</p>
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

                    <div>
                        <p>Total Days</p>
                        <h2>{props.days}</h2>
                    </div>
                </div>

                <div className="clearfix"></div>

                <hr/>

                <div>
                    <div className={style.price}>
                        <h3>Total</h3>
                        <h1>${props.price * props.days}</h1>
                    </div>

                    <button onClick={handlePayment} className={style.createHotel}>Confirm checkout</button>
                </div>
            </div>
        </div>
    )
};

export default BookingCard;