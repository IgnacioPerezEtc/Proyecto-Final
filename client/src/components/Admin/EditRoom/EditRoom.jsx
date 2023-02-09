import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import style from "./EditRoom.module.css";
import Header from "../../Header/Header";
import NavBarDetails from "../../NavBarDetails/NavBarDetails";
import { Keyboard, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { getRoomById, putRoom } from "../../../redux/actions";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import FormRoom from "../../RoomDetail/Form/FormRoom";
import Footer from "../../Footer/Footer";
import axios from "axios";
import Admin from "../Admin";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
const EditRoom = () => {
  // const location = useLocation();
  // console.log(location.pathname);
  const { id } = useParams();
  const dispatch = useDispatch();
  const roomDetail = useSelector((state) => state.roomDetail);
  const hotelDetail = useSelector((state) => state.hotelDetail);
  const specialties = [
    "TV",
    "Calefaccion",
    "Spa",
    "Free Wifi",
    "Mini-Bar",
    "Ducha",
    "Toilette",
  ];
  let imgs = [];
  if (roomDetail.pictureHome && roomDetail.pictureDetail) {
    imgs = roomDetail.pictureDetail;
    imgs.push(roomDetail.pictureHome);
  }
  const [currentSlide, setCurrentSlide] = useState(imgs[0]);
  const [inputs, setInputs] = useState({
    numRoom: "",
    description: "",
    numPeople: "",
    maxAdult: "",
    maxChild: "",
    specialties: "",
    value: "",
    hidden: "",
  });
  useEffect(() => {
    axios.get(`/rooms/${id}`).then((response) => {
      setInputs({
        numRoom: response.data[0].numRoom,
        description: response.data[0].description,
        numPeople: response.data[0].numPeople,
        maxAdult: response.data[0].maxAdult,
        maxChild: response.data[0].maxChild,
        specialties: response.data[0].specialties,
        value: response.data[0].value,
        hidden: response.data[0].hidden,
      });
    });
    dispatch(getRoomById(id));
  }, [dispatch]);

  const handleChange = (e) => {
    e.preventDefault();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleChecked = (event) => {
    if (event.target.checked === true) {
      setInputs({
        ...inputs,
        specialties: [...inputs.specialties, event.target.value],
      });
    }
    if (event.target.checked === false) {
      setInputs({
        ...inputs,
        specialties: [
          ...inputs.specialties.filter(
            (specialties) => specialties !== event.target.value
          ),
        ],
      });
    }
  };
  const handleCheckedHidden = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.checked,
    });
  };

  const saveChanges = (id) => {
    dispatch(putRoom(id, inputs));
    Swal.fire("Modified");
  };

  return (
    <div>
      <Admin />
      {(roomDetail?.hasOwnProperty("pictureDetail") &&
        roomDetail?.id === parseInt(id)) ||
        hotelDetail.id === id ? (
        <div className={style.containerRoomDetail}>
          <div>
            <div className={style.containerDates}>
              <div className={style.containerButtonB}>
                <NavLink to={"/admin"}>
                  <button className={style.backHome}>Back</button>
                </NavLink>
              </div>
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
                  onChange={(e) => handleCheckedHidden(e)}
                />
                <label htmlFor={`switchhidden`} className={style.lbl2}></label>
              </div>
              <div
                className={` ${style.containerTitle} d-flex justify-content-between`}
              >
                <p className={` ${style.title}`}>
                  {roomDetail.numRoom} by{" "}
                  {roomDetail.hotel.name.charAt(0).toUpperCase() +
                    roomDetail.hotel.name.slice(1)}{" "}
                </p>
                <p className={`${style.price}`}>
                  $
                  <input
                    type="number"
                    value={inputs.value}
                    onChange={handleChange}
                    name="value"
                    className={style.inputPrice}
                  />
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
              <div className={`${style.containerSpecialties} containerSpecialties`}>
                <h2 className={style.titleSpec}>Specialities</h2>
                <ul className={style.ulSpec}>
                  {specialties.map((spec, index) => {
                    return (
                      <li className={style.off} key={spec}>
                        <label>{spec}</label>
                        <input
                          type="checkbox"
                          checked={
                            inputs.specialties.includes(spec) ? true : false
                          }
                          name="specialties"
                          value={spec}
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
              </div>
              <div className={`${style.containerCondSpec} containerCondSpec`}>
                <h2>Room conditions</h2>
                <ul className={style.ulCondiciones}>
                  {/* <li>{roomDetail.maxChild} Max Childs</li>
                  <li>{roomDetail.maxAdult} Max Adults</li>
                  <li>{roomDetail.numPeople} Max People</li> */}
                  <li>
                    <span className={style.iconChildren}></span>
                    <p className={style.paddingMax}>
                      <input
                        type="number"
                        value={inputs.maxChild}
                        onChange={handleChange}
                        name="maxChild"
                        className={style.inputPeople}
                      />
                      Max Children
                    </p>
                  </li>
                  <li>
                    <span className={style.iconAdults}></span>
                    <p className={style.paddingMax}>
                      <input
                        type="number"
                        value={inputs.maxAdult}
                        onChange={handleChange}
                        name="maxAdult"
                        className={style.inputPeople}
                      />
                      Max Adults
                    </p>
                  </li>
                  <li>
                    <span className={style.iconPeople}></span>
                    <p className={style.paddingMax}>
                      <input
                        type="number"
                        value={inputs.numPeople}
                        onChange={handleChange}
                        name="numPeople"
                        className={style.inputPeople}
                      />{" "}
                      Max People
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${style.containerDescription} containerDescription`}>
              <h2 className={style.titleDescription}>Description</h2>
              <textarea
                className={`${style.description} description`}
                value={inputs.description}
                onChange={handleChange}
                name="description"
              ></textarea>
            </div>
            <button
              className={style.buttonSave}
              onClick={() => saveChanges(roomDetail.id)}
            >
              Save Changes
            </button>
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

export default EditRoom;
