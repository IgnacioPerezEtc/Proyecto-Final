import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getHotelById, clearHotelDetail } from "../../../redux/actions";
import HotelDetail from "../../HotelDetail/HotelDetail";
import style from "./EditHotel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Maps from "../../Maps/Maps.jsx";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import { putHotel } from "../../../redux/actions";
import axios from "axios";
const EditHotel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hotel = useSelector((state) => state.hotelDetail);
  const [inputs, setInputs] = useState({
    name: "",
    rooms: "",
    location: "",
    description: "",
    pictureHome: "",
    servicies: [],
    rating: "",
    languages: [],
    category: "",
    phone: "",
  });
  useEffect(() => {
    axios.get(`/hotels/${id}`).then((response) => {
      setInputs({
        name: response.data[0].name,
        rooms: response.data[0].rooms,
        location: response.data[0].location,
        phone: response.data[0].phone,
        description: response.data[0].description,
        pictureHome: response.data[0].pictureHome,
        rating: response.data[0].rating,
        languages: response.data[0].languages,
        category: response.data[0].category,
      });
    });
    dispatch(getHotelById(id));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const star = hotel.category;
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
    hotel.pictureHome,
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
  const textRating = ratingLet(hotel.rating);

  const ofrece = () => {
    let ofrecimientos = [];
    if (hotel.parking === true) ofrecimientos.push("Parking");
    if (hotel.restaurant === true) ofrecimientos.push("Restaurant");
    hotel.publicPool === true ? ofrecimientos.push("Public Pool") : "";
    hotel.bar === true ? ofrecimientos.push("Bar") : "";
    hotel.wifi === true ? ofrecimientos.push("Wi-Fi") : "";

    return ofrecimientos;
  };
  const ofrecimientosHotel = ofrece();
  let array = [];

  const saveChanges = (id) => {
    dispatch(putHotel(id));
    alert("Modified");
  };

  return (
    <div>
      {hotel.id === parseInt(id) ? (
        <div className={style.containerDetail}>
         
          <div className={style.containerCard}>
     
            <div className={style.containerImgTitle}>
            <h1> Edit Mode</h1>
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
                    value={inputs.name}
                    name="name"
                    onChange={handleChange}
                  ></input>
                  <span className={style.spacingStars}>{stars}</span>
                </div>
                <div className={style.nameHotel}>
                  {/* <p className={style.nameDescription}>Location:</p> */}
                  <p className={style.location}>{hotel.location}.</p>
                </div>
                <div className={style.containerRatingFlex}>
                  <div
                    className={` ${style.containerRating} ${style.flexRating}`}
                  >
                    <p className={style.rating}>{hotel.rating}</p>
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
                        value={inputs.rooms}
                        type="number"
                        className={style.inputRooms}
                        onChange={handleChange}
                        name="rooms"
                      />
                      <label htmlFor="">Rooms</label>
                    </li>
                    {ofrecimientosHotel.map((ofre, i) => {
                      return (
                        <li className={style.off} key={ofre}>
                          {ofre}
                        </li>
                      );
                    })}
                    <li className={style.off}>Public Pool</li>
                    <li className={style.off}>Bar</li>
                    <li className={style.off}>Restaurant</li>
                    <li className={style.off}>Wi-Fi</li>
                  </ul>
                  <div>
                    <button>Edit</button>
                  </div>

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
                    {/* {hotel.position?.map((hotelPosition) => {
                      array.push(parseFloat(hotelPosition));
                    })} */}
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
                <textarea
                  className={style.description}
                  value={inputs.description}
                  onChange={handleChange}
                  name="description"
                >
                  
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
                    value={inputs.phone}
                    onChange={handleChange}
                    name="phone"
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
                <button onClick={() => saveChanges(hotel.id)}>
                  Save Changes
                </button>
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
