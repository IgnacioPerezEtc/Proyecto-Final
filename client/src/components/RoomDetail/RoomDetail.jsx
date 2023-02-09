import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import RoomCard from "../RoomCard/RoomCard";
import style from "./RoomDetail.module.css";
import Header from "../Header/Header";
import NavBarDetails from "../NavBarDetails/NavBarDetails";
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
import { getHotelById } from "../../redux/actions";
import HotelDetail from "../HotelDetail/HotelDetail";
import Footer from "../Footer/Footer";

const RoomDetail = () => {
  // const location = useLocation();
  // console.log(location.pathname);
  const { id } = useParams();
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservation);
  const roomDetail = useSelector((state) => state.roomDetail);
  const hotelDetail = useSelector((state) => state.hotelDetail);
  // console.log(roomDetail);

  useEffect(() => {
    // dispatch(cleanRoom())
    dispatch(getRoomById(id));
  }, [dispatch]);

  let imgs = [];
  if (roomDetail.pictureHome && roomDetail.pictureDetail) {
    imgs = roomDetail.pictureDetail;
    imgs.push(roomDetail.pictureHome);
  }

  const [currentSlide, setCurrentSlide] = useState(imgs[0]);

  return (
    <div>
      <NavBarDetails />
      {roomDetail.hasOwnProperty("hotel") && roomDetail.id === parseInt(id) ? (
        <div className={style.containerRoomDetail}>
          <div>
            <div className={style.containerDates}>
              <div
                className={` ${style.containerTitle} d-flex justify-content-between`}
              >
                <p className={` ${style.title}`}>
                  {roomDetail.numRoom} by{" "}
                  {roomDetail.hotel.name.charAt(0).toUpperCase() +
                    roomDetail.hotel.name.slice(1)}{" "}
                </p>
                <p className={`${style.price}`}>
                  ${roomDetail.value}
                  <span> per night</span>
                </p>
              </div>
              <div className={` ${style.containerImgForm} d-flex`}>
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
            </div>

            <div className={style.containerInfo}>
              <div className={style.containerSpecialties}>
                <h2 className={style.titleSpec}>Specialities</h2>
                <ul className={style.ulSpec}>
                  {roomDetail.specialties.map((spec) => {
                    return (
                      <li className={style.off} key={spec}>
                        {spec.charAt(0).toUpperCase() + spec.slice(1)}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className={style.containerCondSpec}>
                <h2>Room conditions</h2>
                <ul className={style.ulCondiciones}>
                
                  <li>
                    <span className={style.iconChildren}></span>
                    <p className={style.paddingMax}>
                      {roomDetail.maxChild} Max Children
                    </p>
                  </li>
                  <li>
                    <span className={style.iconAdults}></span>
                    <p className={style.paddingMax}>
                      {roomDetail.maxAdult} Max Adults
                    </p>
                  </li>
                  <li>
                    <span className={style.iconPeople}></span>
                    <p className={style.paddingMax}>
                      {roomDetail.numPeople} Max People
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.containerDescription}>
              <h2 className={style.titleDescription}>Description</h2>
              <p className={style.description}>{roomDetail.description}</p>
            </div>
          </div>
          <div>
            <HotelDetail id={roomDetail.hotelId} />
          </div>
        </div>
      ) : (
        <div className={style.containerLoader}>
          <img src="https://cdn.dribbble.com/users/118337/screenshots/3831581/building_loader.gif" />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default RoomDetail;
