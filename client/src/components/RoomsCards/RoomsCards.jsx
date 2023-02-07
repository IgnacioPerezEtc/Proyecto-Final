import React from "react";
import "./RoomCards.css";
import HotelCard from "../HotelCard/HotelCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { useLocation } from "react-router-dom";

const RoomsCards = (props) => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/home" ? (
        <div className="m-5">
          <p className="fw-bold text-center display-1">
            Our <span className="text-danger">Hotels</span>
          </p>

<<<<<<< HEAD
          
=======
          <p className="descRoomsCard">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quasi aut quo cumque veritatis obcaecati consectetur quas corporis
            tenetur quisquam quos, voluptatem beatae a, ratione illo? Cumque
            sint corrupti similique.
          </p>
>>>>>>> bbc48f7dd36fd01419faab7911589e96e5df3520

          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[Autoplay, Keyboard]}
            autoplay={{
              delay: 3000,
            }}
            keyboard={{
              enabled: true,
            }}
            className="mySwiper m-4 justify-content-center w-100"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
                centeredSlides: true,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 15,
                centeredSlides: true,
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
              },
            }}
          >
            {props.hotels.map((hotel) => {
              return (
                <SwiperSlide key={hotel.id}>
                  <HotelCard
                    id={hotel.id}
                    name={hotel.name}
                    image={hotel.pictureHome}
                    category={hotel.category}
                    languages={hotel.languages}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : (
        <div>
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[Autoplay, Keyboard]}
            autoplay={{
              delay: 3000,
            }}
            keyboard={{
              enabled: true,
            }}
            className="mySwiper m-4 justify-content-center w-100"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
                centeredSlides: true,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 15,
                centeredSlides: true,
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
              },
            }}
          >
            <SwiperSlide key={props.showRoom.id}>
              <HotelCard
                id={hotel.id}
                name={hotel.name}
                image={hotel.pictureHome}
                category={hotel.category}
                languages={hotel.languages}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default RoomsCards;
