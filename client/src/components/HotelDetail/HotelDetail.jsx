import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./HotelDetail.module.css";
import "./HotelDetail.css"
import RoomCard from "../RoomCard/RoomCard";
import { getHotelById } from "../../redux/actions";
import NavBarDetails from "../NavBarDetails/NavBarDetails";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";
import "swiper/css";
import "swiper/css/free-mode";
import Maps from "../Maps/Maps.jsx";
import { MapContainer } from "react-leaflet";
const HotelDetail = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();
  const hotelDetail = useSelector((state) => state.hotelDetail);
  const star = hotelDetail.category;
  let stars = [];
  for (let i = 0; i < star; i++) {
    stars.push(<FontAwesomeIcon className={`${style.stars}`} icon={faStar} />);
  }
  if (location.pathname.includes("hotels")) {
    useEffect(() => {
      dispatch(getHotelById(id));
    }, []);
  } else {
    useEffect(() => {
      dispatch(getHotelById(props.id));
    }, []);
  }
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
    hotelDetail.pictureHome,
  ];
  let ratingLet = (rating) => {
    let text = "";
    if (rating < 5) {
      text = "No recomendado";
    }
    if (rating === 5) {
      text = "Recomendado";
    }
    if (rating > 5) {
      text = "Muy Bueno";
    }
    if (rating > 9) {
      text = "Excelente";
    }

    return text;
  };
  const textRating = ratingLet(hotelDetail.rating);

  const ofrece = () => {
    let ofrecimientos = [];
    if (hotelDetail.parking === true) ofrecimientos.push("Parking");
    if (hotelDetail.restaurant === true) ofrecimientos.push("Restaurant");
    hotelDetail.publicPool === true ? ofrecimientos.push("Public Pool") : "";
    hotelDetail.bar === true ? ofrecimientos.push("Bar") : "";
    hotelDetail.wifi === true ? ofrecimientos.push("Wi-Fi") : "";

    return ofrecimientos;
  };
  const ofrecimientosHotel = ofrece();
  let array = [];
  return (
    <div>
      {location.pathname.includes("hotels") ? (
        <div>
          <NavBarDetails />
        </div>
      ) : (
        ""
      )}

      {(((hotelDetail.hasOwnProperty("name") &&
        hotelDetail.id === parseInt(id)) ||
        hotelDetail.id === parseInt(props.id) ||
        hotelDetail.id === id ||
        hotelDetail.id === props.id) && (
        <div className={style.containerDetail}>
          <div className={style.containerCard}>
            <div className="containerImgTitle">
              <div className={style.galleryContainer}>
                <div className={style.containerImg}>
                  <img
                    src={hotelDetail.pictureHome}
                    alt=""
                    className={style.imgGallery}
                  />
                </div>
                <div className={style.containerImg}>
                  <img src={imgs[1]} alt="" className={style.imgGallery} />
                </div>
                <div className={style.containerImg}>
                  <img src={imgs[2]} alt="" className={style.imgGallery} />
                  <button className={style.buttonVer}>View Gallery</button>
                </div>
              </div>
              <div className={style.containerNameLocation}>
                <div>
                  <h2 className="nameHotelDetail">
                    {hotelDetail.name
                      ? hotelDetail.name.charAt(0).toUpperCase() +
                        hotelDetail.name.slice(1)
                      : ""}
                    <span className={style.spacingStars}>{stars}</span>
                  </h2>
                  {localStorage.getItem("user") ? (
                    <FavoriteIcon id={parseInt(id)} />
                  ) : (
                    ""
                  )}
                </div>
                <div className={style.nameHotel}>
                  {/* <p className={style.nameDescription}>Location:</p> */}
                  <p className="locationHotelDetail">{hotelDetail.location}.</p>
                </div>
                <div className={style.containerRatingFlex}>
                  <div
                    className={` ${style.containerRating} ${style.flexRating}`}
                  >
                    <p className={style.rating}>{hotelDetail.rating}</p>
                  </div>
                  <div className={style.divTextRating}>
                    <p className="textRecomm">{textRating}</p>
                    {/* <p className={style.puntGral}>Puntuación general.</p> */}
                    <a href="" className="linkCommentarios">
                      Ver comentarios
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.contianerInfoHotel}>
              <div className={style.containerSectionUno}>
                <div className="containerAloj">
                  <h2 className="titleOffHotel">This hotel offers</h2>
                  <ul className="ulOff">
                    <li className="offRoomsDetail">{hotelDetail.rooms} Rooms</li>
                    {ofrecimientosHotel.map((ofre) => {
                      return (
                        <li className="offParkinDetail" key={ofre}>
                          {ofre}
                        </li>
                      );
                    })}
                    <li className="offPoolDetail">Public Pool</li>
                    <li className="offBarDetail">Bar</li>
                    <li className="offResturantDetail">Restaurant</li>
                    <li className="offWifiDetail">Wi-Fi</li>
                  </ul>
                  <hr className={style.hr} />
                  <h2 className="titleOffHotel">Security & Advantages</h2>
                  <ul className={style.ulOff}>
                    <li className="offCheckInDetail">Check-in & check-out web</li>
                    <li className="offMethods">Secure payment methods</li>
                    <li className="offEmail">Email confirming reservation</li>
                  </ul>
                </div>
                {/* ////////////////////////////////////////////////////////MAPA//////////////////////////////////// */}
                <div className={style.containerMap}>
                  <div>
                    {hotelDetail.position?.map((hotelPosition) => {
                      array.push(parseFloat(hotelPosition));
                    })}
                    {/* { console.log(array)} */}
                    {/* {array.length === 2 ? (
                      <Maps positionDetail={array} />
                    ) : (
                      false
                    )} */}

                    {/* { setMapCenter(array)} */}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
                  </div>
                </div>
              </div>
              <div className={style.containerDescription}>
                <h2 className={style.titleDescription}>Description</h2>
                <p className={style.description}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  rerum repellendus esse recusandae voluptatem facilis libero
                  modi eius labore error dolore quia porro ipsam deserunt
                  accusamus, est possimus nostrum! Sed.
                </p>
                <p className={style.description}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  rerum repellendus esse recusandae voluptatem facilis libero
                  modi eius labore error dolore quia porro ipsam deserunt
                  accusamus, est possimus nostrum! Sed. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Aspernatur omnis soluta
                  quaerat iste facilis ab dignissimos unde. Tenetur illum autem
                  ea temporibus quis, culpa, qui eum velit doloremque, facere
                  molestias.
                </p>
                <p className={style.description}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  rerum repellendus esse recusandae voluptatem facilis libero
                  modi eius labore error dolore quia porro ipsam deserunt
                  accusamus,
                </p>
              </div>
              <div className={style.containerDescription}>
                <h2 className={style.titleDescription}>
                  More about{" "}
                  {hotelDetail.name
                    ? hotelDetail.name.charAt(0).toUpperCase() +
                      hotelDetail.name.slice(1)
                    : ""}
                </h2>
                <div className={style.containerContact}>
                  <h2>Contact:</h2>
                  <p className={style.contact}>{hotelDetail.phone}</p>
                </div>
                <div className={style.containerContact}>
                  <h2>Languages:</h2>
                  <ul className={style.ulLanguages}>
                    {hotelDetail.languages?.map((ofre) => {
                      return (
                        <li className={style.liLanguages} key={ofre}>
                          ✔{ofre}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {location.pathname.includes("hotels") ? (
            <div>
              <h2 className={style.roomsTitle}>Rooms</h2>
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
            </div>
          ) : (
            <div>
              <button>View Hotel</button>
            </div>
          )}
        </div>
      )) || (
        <div className={style.containerLoader}>
          <img src="https://cdn.dribbble.com/users/118337/screenshots/3831581/building_loader.gif" />
        </div>
      )}
      {location.pathname.includes("hotels") ? <Footer /> : ""}
    </div>
  );
};
export default HotelDetail;
