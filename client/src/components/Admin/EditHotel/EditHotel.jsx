import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getHotelById, clearHotelDetail } from "../../../redux/actions";
import HotelDetail from "../../HotelDetail/HotelDetail";
import style from "./EditHotel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Maps from "../../Maps/Maps.jsx";
import { FaStar } from "react-icons/fa";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import { putHotel } from "../../../redux/actions";
import AppModal from "../Modal/AppModal";
import Admin from "../Admin";
import axios from "axios";
import { NavLink } from "react-router-dom";
const EditHotel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hotel = useSelector((state) => state.hotelDetail);
  const [category, setCategory] = useState(null);
  const [hover, setHover] = useState(null);
  let imgs = [];
  const servicies = ["parking", "restaurant", "publicPool", "bar", "wifi"];
  const [inputs, setInputs] = useState({
    name: "",
    rooms: "",
    location: "",
    description: "",
    pictureHome: "",
    parking: "",
    restaurant: "",
    publicPool: "",
    hidden: "",
    bar: "",
    wifi: "",
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
        parking: response.data[0].parking,
        restaurant: response.data[0].restaurant,
        publicPool: response.data[0].publicPool,
        bar: response.data[0].bar,
        wifi: response.data[0].wifi,
        hidden: response.data[0].hidden,
      });
      setCategory(response.data[0].category);
    });
    dispatch(getHotelById(id));
  }, []);
  const handleChangeCategory = (event) => {
    console.log(event.target);
    event.preventDefault();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };
  const handleChecked = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.checked,
    });
  };
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
  if (hotel.pictureHome && hotel.pictureDetail) {
    imgs = hotel.pictureDetail;
    imgs.push(hotel.pictureHome);
  }
  let ratingLet = (rating) => {
    let text = "";
    if (rating < 5) {
      text = "No recommended";
    }
    if (rating === 5) {
      text = "Recommended";
    }
    if (rating > 5) {
      text = "Very Good";
    }
    if (rating > 9) {
      text = "Excelent";
    }

    return text;
  };
  const textRating = ratingLet(hotel.rating);

  let array = [];

  const saveChanges = (id) => {
    dispatch(putHotel(id, inputs));
    alert("Modified");
  };

  return (
    <div>
      <Admin />
      <div className={style.containerEditHotel}>
        <div className={style.containerButtonB}>
          <NavLink to={"/admin"}>
            <button className={style.backHome}>Back</button>
          </NavLink>
        </div>
        {hotel.id === parseInt(id) ? (
          <div className={style.containerDetail}>
            <div className={style.containerCard}>
              <div className={style.containerImgTitle}>
                <div className={style.containerHidden}>
                  <label className={style.hidden}>
                    Logical deletion (Hidden)
                  </label>
                  <input
                    type="checkbox"
                    checked={inputs.hidden === true ? true : false}
                    name="hidden"
                    value={inputs.hidden}
                    id={`switchhidden`}
                    className={style.switch}
                    onChange={(e) => handleChecked(e)}
                  />
                  <label
                    htmlFor={`switchhidden`}
                    className={style.lbl2}
                  ></label>
                </div>
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
                  <div className={style.containerNameStar}>
                    <div>
                      <input
                        className={style.nameHotel}
                        value={inputs.name}
                        name="name"
                        onChange={handleChange}
                      ></input>
                    </div>

                    <div className={style.containerCategory}>
                      {[...Array(5)].map((star, index) => {
                        const categoryValue = index + 1;

                        return (
                          <label key={index}>
                            <input
                              type="radio"
                              name="category"
                              value={categoryValue}
                              onClick={() => setCategory(categoryValue)}
                              onChange={(e) => handleChangeCategory(e)}
                              className={style.inputRadio}
                            />
                            <FaStar
                              className={style.star}
                              size={25}
                              onMouseEnter={() => setHover(categoryValue)}
                              onMouseLeave={() => setHover(null)}
                              color={
                                categoryValue <= (hover || category)
                                  ? "#ffc107"
                                  : "gray"
                              }
                            />
                          </label>
                        );
                      })}
                    </div>
                  </div>
                  <div className={style.nameLocation}>
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
                        View comments.
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
                      {servicies.map((serv, index) => {
                        return (
                          <li className={style.off} key={index}>
                            <label>
                              {serv.charAt(0).toUpperCase() + serv.slice(1)}
                            </label>
                            <input
                              type="checkbox"
                              checked={inputs[serv] === true ? true : false}
                              name={serv}
                              value={inputs.serv}
                              id={`switch${index}`}
                              className={style.switch}
                              onChange={(e) => handleChecked(e)}
                            />
                            <label
                              htmlFor={`switch${index}`}
                              className={style.lbl}
                            ></label>
                          </li>
                        );
                      })}
                    </ul>

                    <hr className={style.hr} />
                    <h2 className={style.titleOff}>Security & Advantages</h2>
                    <ul className={style.ulOff}>
                      <li className={style.off}>Check-in & check-out web</li>
                      <li className={style.off}>Secure payment methods</li>
                      <li className={style.off}>
                        Email confirming reservation
                      </li>
                    </ul>
                  </div>
                  {/* ////////////////////////////////////////////////////////MAPA//////////////////////////////////// */}
                  <div className={style.containerMap}>
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
                    value={inputs.description}
                    onChange={handleChange}
                    name="description"
                  ></textarea>
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
                  <button
                    className={style.buttonSave}
                    onClick={() => saveChanges(hotel.id)}
                  >
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
    </div>
  );
};

export default EditHotel;
