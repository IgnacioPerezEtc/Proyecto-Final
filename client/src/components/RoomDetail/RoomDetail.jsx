import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import RoomCard from '../RoomCard/RoomCard'

import { Keyboard, Autoplay} from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const RoomDetail = () => {

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

    const imgs = [
        "https://swiperjs.com/demos/images/nature-1.jpg",
        "https://swiperjs.com/demos/images/nature-2.jpg",
        "https://swiperjs.com/demos/images/nature-3.jpg",
        "https://swiperjs.com/demos/images/nature-4.jpg",
        "https://swiperjs.com/demos/images/nature-5.jpg",
        "https://swiperjs.com/demos/images/nature-6.jpg",
        "https://swiperjs.com/demos/images/nature-7.jpg",
        "https://swiperjs.com/demos/images/nature-8.jpg",
        "https://swiperjs.com/demos/images/nature-9.jpg",
        "https://swiperjs.com/demos/images/nature-10.jpg",
    ]

    const [currentSlide, setCurrentSlide] = useState(imgs[0]);


    return (
        <div className="container text-center my-5 d-flex flex-column gap-5">
            <p style={{ color: '#F28E13' }} className="display-3 fw-bold mb-5"> Room </p>

            <div className="d-flex justify-content-between my-5">
                <p className="display-3 fw-bold">Family Room</p>
                <p className="display-3 fw-bold">
                    Price
                    <span style={{ color: '#F28E13' }}> : </span>
                    799$
                    <span className="h1" style={{ color: '#F28E13' }}> night</span>
                </p>
            </div>

            <div className="d-flex w-100">
                <div className=" w-50 pe-5">
                    <img src={currentSlide} alt="" className=" mb-3 h-75 w-100 rounded" />
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        className="w-100 display-4"
                    >
                        {
                            imgs?.map((img, index) => {
                                return (
                                    <SwiperSlide onClick={() => setCurrentSlide(img)} className="" key={index}>
                                        <img className="w-100 rounded" src={img} alt="imgHotel" />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>

                <div className=" w-50 ">
                    <Form className="container w-75 bg-primary d-flex flex-column align-content-center gap-5 rounded p-5">
                        <Form.Control style={{ fontSize: '16px' }} className="my-4 p-3" input="date" placeholder="Check In" />
                        <Form.Control style={{ fontSize: '16px' }} className="my-4 p-3" input="date" placeholder="Check Out" />
                        <Form.Control style={{ fontSize: '16px' }} className="my-4 p-3" input="date" placeholder="Children" />
                        <Form.Control style={{ fontSize: '16px' }} className="my-4 p-3" input="date" placeholder="Adults" />

                        <Button style={{ backgroundColor: '#F28E13', fontSize: '16px' }} className="w-100 p-5 mb-5" type="submit" value="submit">
                            Booking Now
                        </Button>
                    </Form>
                </div>
            </div>

            <div className="d-flex gap-5">
                <Link className="text-decoration-none h1 text-secondary">Description</Link>
                <Link className="text-decoration-none h1 text-secondary">Aditional Information</Link>
                <Link className="text-decoration-none h1 text-secondary">Review</Link>
                <Link className="text-decoration-none h1 text-secondary">Prining Plans</Link>
            </div>

            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non officiis in amet odit molestiae cum aut obcaecati possimus maxime laudantium eaque, ea aspernatur necessitatibus voluptas modi earum id. Sapiente.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, eaque esse incidunt tempore aliquid? Dolor nostrum dicta laudantium nobis officiis deserunt rem vero maiores vel animi, corporis perferendis architecto.
                </p>
            </div>

            <div>
                <p className='fw-bold text-center display-1'>Our <span style={{ color: '#F28E13' }}> Room</span></p>

                <Swiper
                    freeMode={true}
                    grabCursor={true}
                    modules={[Autoplay, Keyboard]}
                    autoplay={{
                        delay: 3000
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

        </div>
    )
}

export default RoomDetail;