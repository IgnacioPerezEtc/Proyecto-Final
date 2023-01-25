import React from "react";
import RoomCard from "../RoomCard/RoomCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const RoomsCards = (props) => {
  return (
    <div className="m-5">
      <p className="fw-bold text-center display-1">
        Our <span className="text-danger"> Room</span>
      </p>

      <p className="container-fluid text-center w-50">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quasi
        aut quo cumque veritatis obcaecati consectetur quas corporis tenetur
        quisquam quos, voluptatem beatae a, ratione illo? Cumque sint corrupti
        similique.
      </p>

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
        {props.rooms.map((room) => {
          return (
            <SwiperSlide key={room.id}>
              <RoomCard 
                id={room.id}
                img={room.pictureHome}
                title={room.numRoom}
                price={room.value}
                guest={room.numPeople}
                specialties={room.specialties}
                maxAdult={room.maxAdult}
                maxChild={room.maxChild}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RoomsCards;
