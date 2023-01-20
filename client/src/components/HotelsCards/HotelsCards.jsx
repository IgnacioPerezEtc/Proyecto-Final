import HotelCard from '../HotelCard/HotelCard';
import styles from './HotelsCards.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong, faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HotelsCards = ({ hotels }) => {


    return (
        <div className='d-flex w-100 justify-content-center'>
            <Carousel variant="dark" className=' w-25'>
                {
                    hotels.map(hotel => {
                        return (
                            <Carousel.Item>
                                <HotelCard
                                    img={hotel.img}
                                    title={hotel.title}
                                    price={hotel.price}
                                    guest={hotel.guest}
                                    description={hotel.description}
                                />

                                {/* <Carousel.Caption>
                                    <h5>Hotel item</h5>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>

        </div>

        // <div className={`${styles.Cards} m-4 w-100 d-flex flex-wrap gap-4 justify-content-center`}>
        //     {
        //         hotels.map( hotel => {
        //             return(
        //                 <HotelCard 
        //                     img={hotel.img}
        //                     title={hotel.title}
        //                     price= {hotel.price}
        //                     guest = {hotel.guest}
        //                     description = {hotel.description}
        //                 />
        //             )
        //         })
        //     }
        // </div>
    )
}

export default HotelsCards;