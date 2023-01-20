import HotelCard from '../HotelCard/HotelCard';
import styles from './HotelsCards.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong, faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HotelsCards = () => {
    const hotels = [
        {
            img: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
            title: 'Family Room',
            price: 400,
            guest: 8,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis est quos consequuntur! Nulla cum amet, quaerat blanditiis quo maiores sit soluta, facere, recusandae doloremque in veniam repellat. Quasi, libero?',
        },
        {
            img: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
            title: 'Family Room',
            price: 400,
            guest: 9,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis est quos consequuntur! Nulla cum amet, quaerat blanditiis quo maiores sit soluta, facere, recusandae doloremque in veniam repellat. Quasi, libero?',
        },
        {
            img: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
            title: 'Family Room',
            price: 400,
            guest: 10,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis est quos consequuntur! Nulla cum amet, quaerat blanditiis quo maiores sit soluta, facere, recusandae doloremque in veniam repellat. Quasi, libero?',
        },
        {
            img: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
            title: 'Family Room',
            price: 400,
            guest: 11,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis est quos consequuntur! Nulla cum amet, quaerat blanditiis quo maiores sit soluta, facere, recusandae doloremque in veniam repellat. Quasi, libero?',
        },
        {
            img: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
            title: 'Family Room',
            price: 400,
            guest: 12,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis est quos consequuntur! Nulla cum amet, quaerat blanditiis quo maiores sit soluta, facere, recusandae doloremque in veniam repellat. Quasi, libero?',
        },
        {
            img: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
            title: 'Family Room',
            price: 400,
            guest: 13,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis est quos consequuntur! Nulla cum amet, quaerat blanditiis quo maiores sit soluta, facere, recusandae doloremque in veniam repellat. Quasi, libero?',
        },
        {
            img: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
            title: 'Family Room',
            price: 400,
            guest: 14,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis est quos consequuntur! Nulla cum amet, quaerat blanditiis quo maiores sit soluta, facere, recusandae doloremque in veniam repellat. Quasi, libero?',
        },
        {
            img: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
            title: 'Family Room',
            price: 400,
            guest: 15,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis est quos consequuntur! Nulla cum amet, quaerat blanditiis quo maiores sit soluta, facere, recusandae doloremque in veniam repellat. Quasi, libero?',
        }
    ];

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

                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>

        </div>

    )
}

export default HotelsCards;