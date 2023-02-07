import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../../redux/actions";
import style from "./RoomsAdmin.module.css"
import statusDisabled from "../../../assets/icons/statusDisabled.png";
import statusEnable from "../../../assets/icons/statusEnabled.png";

const RoomsAdmin = () => {
  const dispatch = useDispatch();
  const rooms = useSelector(state => state.rooms)
  useEffect(() => {
    dispatch(getRooms());
  });
  return (
    <div id="roomsAdmin">
      <h1 className={style.h1}>Rooms</h1>
      <div className={style.containerHotels}>
        <table className={style.table}>
          <thead>
            <tr className={style.trHead}>
              <th>Id</th>
              <th>Type</th>
              <th>NumPeople</th>
              <th>Value</th>
              <th>Hidden</th>
            </tr>
          </thead>
          <tbody>
            {rooms?.map((room) => {
              return (
                <tr className={style.trBody}>
                  <th className={style.id}>{room.id}</th>
                  <th>{room.numRoom}</th>
                  <th>{room.numPeople}</th>
                  <th>{room.value}</th>
                  <th>
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
                  </th>
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
