import React from 'react';
import RoomCard from '../RoomCard/RoomCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay} from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode';

const RoomsCards = () => {
    const rooms = [
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
        <div className='m-5'>
            <p className='fw-bold text-center display-1'>Our <span className='text-danger'> Room</span></p>

            <p className='container-fluid text-center w-50'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quasi aut quo cumque veritatis obcaecati consectetur quas corporis tenetur quisquam quos, voluptatem beatae a, ratione illo? Cumque sint corrupti similique.</p>

            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[Autoplay, Keyboard]}
                autoplay={{
                    delay:3000
                }}
                keyboard={{
                    enabled: true,
                }}
                className="mySwiper m-4 justify-content-center w-100"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        centeredSlides: true
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                        centeredSlides: true
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    }
                }}
            >
                {
                    rooms.map((hotel, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <RoomCard
                                    img={hotel.img}
                                    title={hotel.title}
                                    price={hotel.price}
                                    guest={hotel.guest}
                                    description={hotel.description}
                                />

                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>

        </div>

    )
}

export default RoomsCards;