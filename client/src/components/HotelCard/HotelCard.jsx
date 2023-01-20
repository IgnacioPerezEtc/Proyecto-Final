import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './HotelCard.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'

const HotelCard = ({ img, title, price, guest, description }) => {
    return (
        <Card className={`${styles.Card}  p-2 h-75`}>
            <Card.Img className='w-100 h-50' variant="top" src={img} />
            <Card.Body className="d-flex flex-column gap-3">
                <div className='d-flex justify-content-between'>
                    <h2 className="fw-bold text-dark">{title}</h2>
                    <p className='bg-primary fs-5 rounded p-2 text-white'>${price}</p>
                </div>
                <div className={`${styles.Data} d-flex justify-content-between`}>
                    <p><FontAwesomeIcon icon={faBed} /> {guest} guest</p>

                    {/* <p>asdass</p> */}
                </div>
                <Card.Text className={`${styles.Text} fs-5`}>
                    {description}
                </Card.Text>

                <Card.Text className="mb-5">
                    <Link to='/details' className={`${styles.Link} fs-5 text-danger fw-bold`}>
                        Booking -{'>'}
                    </Link>
                </Card.Text>
            </Card.Body>
        </Card>
    )

}

export default HotelCard;