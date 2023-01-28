import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../redux/actions";
import style from "./Rooms.module.css"
import SearchBar from "../SearchBar/SearchBar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RoomCard from "../RoomCard/RoomCard";

const Rooms = () => {
  const rooms = useSelector((state) => state.rooms);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRooms());
  },[]);

  return (
    <div>
      <Header />
      {error ? (
        <Error />
      ) : (
        <div className={style.containerHotels}>
          {rooms.length ? (
            <div className="container-fluid d-flex justify-content-around flex-wrap gap-5">
              {rooms.map((room) => {
                return (
                  <RoomCard
                    key={room.id}
                    id={room.id}
                    numRoom={room.numRoom}
                    guest={room.numPeople}
                    img={room.pictureHome}
                    specialties={room.specialties}
                    maxChild={room.maxChild}
                    maxAdult={room.maxAdult}
                    nameHotel={room.hotel.name}
                    price={room.value}
                  />
                );
              })}
            </div>
          ) : (
            <div className={style.containerLoader}>
              <img src="https://cdn.dribbble.com/users/118337/screenshots/3831581/building_loader.gif" />
            </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Rooms;
