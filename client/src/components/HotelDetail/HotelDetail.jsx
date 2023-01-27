import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./HotelDetail.module.css";
import RoomCard from "../RoomCard/RoomCard";
import { getHotelById } from "../../redux/actions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
const HotelDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const hotelDetail = useSelector((state) => state.hotelDetail);
  useEffect(() => {
    dispatch(getHotelById(id));
  }, []);

  return (
    <div>
      <Header />
      {(((hotelDetail.hasOwnProperty("name") &&
        hotelDetail.id === parseInt(id)) ||
        hotelDetail.id === id) && (
        <div className={style.containerDetail}>
          <h2 className={style.nameHotel}>
            {hotelDetail.name.charAt(0).toUpperCase() +
              hotelDetail.name.slice(1)}
          </h2>
          <div className={style.containerCard}>
            <div className={style.containerImg}>
              <img src={hotelDetail.pictureHome} alt="" />
            </div>
            <div>
              <div className={style.text}>
                <p className={style.nameDescription}>Location:</p>
                <p className={style.content}>{hotelDetail.location}</p>
              </div>
              <div className={style.text}>
                <p className={style.nameDescription}>Description: </p>
                <p className={style.content}>{hotelDetail.description}</p>
              </div>
              <div className={style.text}>
                <p className={style.nameDescription}>Rooms: </p>
                <p className={style.content}>{hotelDetail.rooms}</p>
              </div>

              <div className={style.text}>
                <p className={style.nameDescription}>Parking:</p>
                <p className={style.content}>
                  {(hotelDetail.parking === true && <p>Yes</p>) || <p>No</p>}
                </p>
              </div>
              <div className={style.text}>
                <p className={style.nameDescription}>Rating:</p>
                <p className={style.content}>{hotelDetail.rating}</p>
              </div>
              <div className={style.text}>
                <p className={style.nameDescription}>Languages: </p>
                <p className={style.languages}>
                  {" "}
                  {hotelDetail.languages?.map((language) => {
                    return (
                      <p key={language} className={style.content}>
                        {language}
                      </p>
                    );
                  })}
                </p>
              </div>
              <div className={style.text}>
                <p className={style.nameDescription}>Contact: </p>
                <p className={style.content}>{hotelDetail.phone}</p>
              </div>
              <div className={style.text}>
                <p className={style.nameDescription}>Category:</p>
                <p className={style.content}>{hotelDetail.category}</p>
              </div>
            </div>
          </div>
          <h2 className={style.roomsTitle}>
            Rooms
            <div className={style.textRooms}>
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
                {hotelDetail.showRooms?.map((showRoom) => {
                  console.log(showRoom);
                  return (
                    <SwiperSlide key={showRoom.id}>
                      <RoomCard
                        id={showRoom.id}
                        img={showRoom.pictureHome}
                        numRoom={showRoom.numRoom}
                        price={showRoom.value}
                        guest={showRoom.numPeople}
                        specialties={showRoom.specialties}
                        maxAdult={showRoom.maxAdult}
                        maxChild={showRoom.maxChild}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </h2>
        </div>
      )) || (
        <div className={style.containerLoader}>
          <img src="https://cdn.dribbble.com/users/118337/screenshots/3831581/building_loader.gif" />
        </div>
      )}

      <Footer />
    </div>
  );
};
export default HotelDetail;
