import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./HotelDetail.module.css";
import RoomsCards from "../RoomsCards/RoomsCards";
import RoomCard from "../RoomCard/RoomCard";
import { getHotelById } from "../../redux/actions";
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
              
              {hotelDetail.showRooms?.map((showRoom) => {
                return (
                  <RoomsCards showRoom={showRoom}/>
                  // <div key={showRoom.id}>
                  //   <h3>Number of rooms</h3>
                  //   <p>{showRoom.numRoom}</p>
                  //   <h3>Number of people</h3>
                  //   <p>{showRoom.numPeople}</p>
                  //   <h3>Max adults</h3>
                  //   <img src={showRoom.pictureHome} alt="" width={"200px"} height={"150px"}/>
                  //   <p>{showRoom.maxAdult}</p>
                  //   <h3>Max child</h3>
                  //   <p>{showRoom.maxChild}</p>
                  //   <h3>Specialties</h3>
                  //   <div>
                  //     {showRoom.specialties?.map((specialtie) => {
                  //       <p>{specialtie}</p>;
                  //     })}
                  //   </div>
                  //   <h3>Available Date</h3>
                  //   <p>{showRoom.availableDate}</p>
                  //   <h3>Value</h3>
                  //   <p>{showRoom.value}</p>
                  // </div>
                );
              })}
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
