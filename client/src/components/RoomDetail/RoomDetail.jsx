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

  // const imgs = [
  //   roomDetail.pictureHome,
  //   "https://swiperjs.com/demos/images/nature-1.jpg",
  //   "https://swiperjs.com/demos/images/nature-2.jpg",
  //   "https://swiperjs.com/demos/images/nature-3.jpg",
  //   "https://swiperjs.com/demos/images/nature-4.jpg",
  //   "https://swiperjs.com/demos/images/nature-5.jpg",
  //   "https://swiperjs.com/demos/images/nature-6.jpg",
  //   "https://swiperjs.com/demos/images/nature-7.jpg",
  //   "https://swiperjs.com/demos/images/nature-8.jpg",
  //   "https://swiperjs.com/demos/images/nature-9.jpg",
  //   "https://swiperjs.com/demos/images/nature-10.jpg",
  // ];

  // const [currentSlide, setCurrentSlide] = useState(imgs[0]);

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
                <div className={` w-50 pe-5`}>
                  <img
                    src={roomDetail.pictureHome}
                    alt=""
                    className={` ${style.img} mb-3 rounded`}
                  />
                  {/* <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    className="w-100 display-4"
                  >
                    {imgs?.map((img, index) => {
                      return (
                        <SwiperSlide
                          onClick={() => setCurrentSlide(img)}
                          className=""
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
                  </Swiper> */}
                </div>
                <FormRoom />
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

            {/* <div className="d-flex gap-5">
            <Link className="text-decoration-none h1 text-secondary">
              Specialties
            </Link>
            <Link className="text-decoration-none h1 text-secondary">
              Aditional Information
            </Link>
            <Link className="text-decoration-none h1 text-secondary">
              Review
            </Link>
            <Link className="text-decoration-none h1 text-secondary">
              Prining Plans
            </Link>
          </div> */}
            <div>
              <ul>
                {roomDetail.specialties.map((spec) => {
                  return <li key={spec}>{spec}</li>;
                })}
              </ul>
              {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non
              officiis in amet odit molestiae cum aut obcaecati possimus maxime
              laudantium eaque, ea aspernatur necessitatibus voluptas modi earum
              id. Sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Aliquam eveniet, eaque esse incidunt tempore aliquid? Dolor
              nostrum dicta laudantium nobis officiis deserunt rem vero maiores
              vel animi, corporis perferendis architecto.
            </p> */}
            </div>
            <div>
              <p className="fw-bold text-center display-1">
                Our <span>Room</span>
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
                {rooms?.map((room) => {
                  return (
                    <SwiperSlide key={room.id}>
                      <RoomCard
                        id={room.id}
                        img={room.pictureHome}
                        nameHotel={room.hotel.name}
                        numRoom={room.numRoom}
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
