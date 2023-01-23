import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./HotelDetail.module.css";
import { getHotelById } from "../../redux/actions";
const HotelDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const hotelDetail = useSelector((state) => state.hotelDetail);
  useEffect(() => {
    dispatch(getHotelById(id));
  }, []);

  // const mayusString =()=>{

  // }

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
                <p className={style.nameDescription}>Parking:</p>
                <p className={style.content}>{hotelDetail.parking}</p>
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
            <p className={style.textRooms}>
              Aqui se veran las rooms de {hotelDetail.name}
              {hotelDetail.rooms}
            </p>
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
