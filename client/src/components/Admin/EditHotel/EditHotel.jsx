import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getHotelById, clearHotelDetail } from "../../../redux/actions";
import HotelDetail from "../../HotelDetail/HotelDetail";
import style from "./EditHotel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Maps from "../../Maps/Maps.jsx";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
const EditHotel = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const hotel = useSelector((state) => state.hotelDetail);
  useEffect(() => {
    dispatch(getHotelById(id));
  }, []);
  const [inputs, setInputs] = useState({
    name: "",
    location: "",
    phone: "",
    hidden: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const hotelDetail = useSelector((state) => state.hotelDetail);
  const star = hotelDetail.category;
  let stars = [];
  for (let i = 0; i < star; i++) {
    stars.push(<FontAwesomeIcon className={`${style.stars}`} icon={faStar} />);
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
      {hotel.id === parseInt(id) ? (
        <div className={style.containerDetail}>
          <div className={style.containerCard}>
            <div className={style.containerImgTitle}>
              <div className={style.galleryContainer}>
                <div className={style.containerImg}>
                  <img
                    src={hotel.pictureHome}
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
                  <input
                    className={style.nameHotel}
                    defaultValue={
                      hotel.name
                        ? hotel.name.charAt(0).toUpperCase() +
                          hotel.name.slice(1)
                        : ""
                    }
                  ></input>
                  <span className={style.spacingStars}>{stars}</span>
                </div>
                <div className={style.nameHotel}>
                  {/* <p className={style.nameDescription}>Location:</p> */}
                  <p className={style.location}>{hotelDetail.location}.</p>
                </div>
                <div className={style.containerRatingFlex}>
                  <div
                    className={` ${style.containerRating} ${style.flexRating}`}
                  >
                    <p className={style.rating}>{hotelDetail.rating}</p>
                  </div>
                  <div className={style.divTextRating}>
                    <p className={style.textRecomm}>{textRating}</p>
                    {/* <p className={style.puntGral}>Puntuación general.</p> */}
                    <a href="" className={style.linkCommentarios}>
                      Ver comentarios.
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.contianerInfoHotel}>
              <div className={style.containerSectionUno}>
                <div className={style.containerAloj}>
                  <h2 className={style.titleOff}>This hotel offers</h2>
                  <ul className={style.ulOff}>
                    <li className={style.off}>
                      <input
                        type="text"
                        defaultValue={hotelDetail.rooms}
                        className={style.inputRooms}
                      />
                      <label htmlFor="">Rooms</label>
                    </li>
                    {ofrecimientosHotel.map((ofre) => {
                      return (
                        <div className={style.containerOff}>
                          <li className={style.off} key={ofre}>
                            {ofre}
                          </li>
                          <button className={style.buttonEliminar}>X</button>
                        </div>
                      );
                    })}
                  </ul>
                  <hr className={style.hr} />
                  <h2 className={style.titleOff}>Security & Advantages</h2>
                  <ul className={style.ulOff}>
                    <li className={style.off}>Check-in & check-out web</li>
                    <li className={style.off}>Secure payment methods</li>
                    <li className={style.off}>Email confirming reservation</li>
                  </ul>
                </div>
                {/* ////////////////////////////////////////////////////////MAPA//////////////////////////////////// */}
                <div className={style.containerMap}>
                  <p>MAPA</p>
                  <div>
                    {hotel.position?.map((hotelPosition) => {
                      array.push(parseFloat(hotelPosition));
                    })}
                    {/* { console.log(array)} */}
                    {array.length === 2 ? (
                      <Maps positionDetail={array} />
                    ) : (
                      false
                    )}

                    {/* { setMapCenter(array)} */}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
                  </div>
                </div>
              </div>
              <div className={style.containerDescription}>
                <h2 className={style.titleDescription}>Description</h2>
                <textarea
                  className={style.description}
                  defaultValue={hotel.description}
                >
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  rerum repellendus esse recusandae voluptatem facilis libero
                  modi eius labore error dolore quia porro ipsam deserunt
                  accusamus, est possimus nostrum! Sed. */}
                </textarea>
              </div>
              <div className={style.containerDescription}>
                <h2 className={style.titleDescription}>
                  More about{" "}
                  {hotel.name
                    ? hotel.name.charAt(0).toUpperCase() + hotel.name.slice(1)
                    : ""}
                </h2>
                <div className={style.containerContact}>
                  <h2>Contact:</h2>
                  <input
                    className={style.contact}
                    defaultValue={hotel.phone}
                  ></input>
                </div>
                <div className={style.containerContact}>
                  <h2>Languages:</h2>
                  <ul className={style.ulLanguages}>
                    {hotel.languages?.map((ofre) => {
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
        </div>
      ) : (
        <div className={style.containerLoader}>
          <img src="https://cdn.dribbble.com/users/118337/screenshots/3831581/building_loader.gif" />
        </div>
      )}
    </div>
  );
};

export default EditHotel;

{
  /* {hotel.id === parseInt(id) ? (
        <div>
          <p className={style.p}>{hotel.id}</p>
          <form action="">
            <div>
              <label>Name:</label>
              <input
                type="text"
                onChange={handleChange}
                defaultValue={hotel.name}
              />
            </div>
            <div>
              <label>Location:</label>
              <input
                type="text"
                onChange={handleChange}
                defaultValue={hotel.location}
              />
            </div>
            <div>
              <label>Phone:</label>
              <input
                type="text"
                onChange={handleChange}
                defaultValue={hotel.phone}
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                type="text"
                name="description"
                defaultValue={hotel.description}
                onChange={handleChange}
              />
            </div>
            <div>
                <label htmlFor="">Picture Home</label>
                <img src={hotel.pictureHome} alt="" />
            </div>
            <div>
              <button>Save Changes</button>
            </div>
          </form>
        </div> */
}
