import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import RoomCard from "../RoomCard/RoomCard";
import style from "./RoomDetail.module.css";
import Header from "../Header/Header";
import { Keyboard, Autoplay } from "swiper";
// import { useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import { getRoomById, getRooms } from "../../redux/actions";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cleanRoom } from "../../redux/actions";
import FormRoom from "./Form/FormRoom";

const RoomDetail = () => {
  // const location = useLocation();
  // console.log(location.pathname);
  const { id } = useParams();
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservation);
  const rooms = useSelector((state) => state.rooms);
  const roomDetail = useSelector((state) => state.roomDetail);

  useEffect(() => {
    // dispatch(cleanRoom())
    dispatch(getRoomById(id));
    dispatch(getRooms());
  }, [dispatch]);

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
    roomDetail.pictureHome,
  ];

  const [currentSlide, setCurrentSlide] = useState(imgs[0]);

  return (
    <div>
      <Header />
      {roomDetail.hasOwnProperty("hotel") && roomDetail.id === parseInt(id) ? (
        <div className={style.containerRoomDetail}>
          <div className=" text-center d-flex flex-column gap-5">
            <div className={style.containerDates}>
              <div className={style.containerButtonB}>
                <NavLink to={"/rooms"}>
                  <button className={style.backHome}>Rooms</button>
                </NavLink>
              </div>

              <div className={` ${style.containerImgForm} d-flex w-100`}>
                <div className={` ${style.containerPpal}`}>
                  <img
                    src={currentSlide}
                    alt=""
                    className={` ${style.img} mb-3 rounded`}
                  />
                  <Swiper slidesPerView={4} className={style.con}>
                    {imgs?.map((img, index) => {
                      return (
                        <SwiperSlide
                          onClick={() => setCurrentSlide(img)}
                          className={style.conImg}
                          key={index}
                        >
                          <img
                            className={` ${style.imgCar} rounded`}
                            src={img}
                            alt="imgHotel"
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
                <div className={style.containerForm}>
                  <FormRoom />
                </div>
              </div>
              <div
                className={` ${style.containerTitle} d-flex justify-content-between my-5`}
              >
                <p className={` ${style.title} display-3 `}>
                  {roomDetail.hotel.name.charAt(0).toUpperCase() +
                    roomDetail.hotel.name.slice(1)}{" "}
                  - {roomDetail.numRoom}
                </p>
                <p className={` ${style.price} display-3 `}>
                  Price
                  <span>: </span>${roomDetail.value}
                  <span> night</span>
                </p>
              </div>
            </div>
            <div>
              <div>
                <h1 className={style.titleSpec}>specialities</h1>
                {roomDetail.specialties.map((spec) => {
                  return (
                    <span className={style.spanSpec} key={spec}>
                      {spec}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.containerLoader}>
          <img src="https://cdn.dribbble.com/users/118337/screenshots/3831581/building_loader.gif" />
        </div>
      )}
    </div>
  );
};

export default RoomDetail;
