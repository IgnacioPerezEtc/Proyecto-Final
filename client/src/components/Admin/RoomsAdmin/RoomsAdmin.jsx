import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../../redux/actions";
import style from "./RoomsAdmin.module.css";
import statusDisabled from "../../../assets/icons/statusDisabled.png";
import statusEnable from "../../../assets/icons/statusEnabled.png";
import edit from "../../../assets/icons/edit.png";
import { NavLink } from "react-router-dom";

const RoomsAdmin = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);
  useEffect(() => {
    dispatch(getRooms());
  },[]);
  return (
    <div id="roomsAdmin" className={style.containerRooms}>
      <h1 className={style.h1}>Rooms</h1>
      <div className={style.container}>
        <table className={style.table}>
          <thead>
            <tr className={style.trHead}>
              <th>Id</th>
              <th>Hotel</th>
              <th>Type</th>

              <th>NumPeople</th>
              <th>Value</th>
              <th>Hidden</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {rooms?.map((room) => {
              return (
                <tr className={style.trBody}>
                  <td className={style.id}>{room.id}</td>
                  <td>{room.hotel.name}</td>
                  <td>{room.numRoom}</td>

                  <td>{room.numPeople}</td>

                  <td>{room.value}</td>
                  <td>
                    {room.hidden === true ? (
                      <img
                        src={statusDisabled}
                        alt=""
                        className={style.imgEnaDis}
                      />
                    ) : (
                      <img
                        src={statusEnable}
                        alt=""
                        className={style.imgEnaDis}
                      />
                    )}
                  </td>
                  <td>
                    <NavLink to={`/editRoom/${room.id}`}>
                      <button className={style.buttonEnab}>
                        <img src={edit} alt="" className={style.imgEnaDis} />
                      </button>
                    </NavLink>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomsAdmin;
