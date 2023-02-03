import React from "react";
import style from "./Hotels.module.css";
import { useState } from "react";
import statusDisabled from "../../../assets/icons/statusDisabled.png";
import statusEnable from "../../../assets/icons/statusEnabled.png";
import hotelOcult from "../../../assets/icons/hotelOcult.png";
import hotelEnable from "../../../assets/icons/hotelEnable.png";
import { getHotelByName } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getAllHotels} from "../../../redux/actions";
import { useEffect } from "react";
const HotelsAdmin = (props) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(getAllHotels());
  }, [dispatch]);

  const onChangeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getHotelByName(name));
  };
  return (
    <div id="hotelsAdmin">
      <h1 className={style.h1}>Hotels</h1>
      <div className={style.containerHotels}>
        <form action="" className={style.formHotels} onSubmit={handleSubmit}>
          <input type="text" onChange={onChangeName} />
          <button type="submit">Buscar</button>
        </form>
        <table className={style.table}>
          <thead>
            <tr className={style.trHead}>
              <th>Id</th>
              <th>Name</th>
              <th>Location</th>
              <th>Phone</th>
              <th>Category</th>
              <th>Status</th>
              <th>Enable</th>
              <th>Disable</th>
            </tr>
          </thead>
          <tbody>
            {hotels?.map((hotel) => {
              return (
                <tr className={style.trBody}>
                  <th className={style.id}>{hotel.id}</th>
                  <th>{hotel.name}</th>
                  <th>{hotel.location}</th>
                  <th>{hotel.phone}</th>
                  <th>{hotel.category}</th>
                  <th>
                    {hotel.hidden === true ? (
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
                  <th>
                    <button className={style.buttonEnab}>
                      <img
                        src={hotelEnable}
                        alt=""
                        className={style.imgEnaDis}
                      />
                    </button>
                  </th>
                  <th>
                    {" "}
                    <button className={style.buttonEnab}>
                      <img
                        src={hotelOcult}
                        alt=""
                        className={style.imgEnaDis}
                      />
                    </button>{" "}
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

export default HotelsAdmin;
