import React from "react";
import style from "./HotelsAdmin.module.css";
import { useState } from "react";
import statusDisabled from "../../../assets/icons/statusDisabled.png";
import statusEnable from "../../../assets/icons/statusEnabled.png";
import edit from "../../../assets/icons/edit.png";
import { getHotelByName } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getAllHotels } from "../../../redux/actions";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
const HotelsAdmin = (props) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(getAllHotels());
  }, []);

  const onChangeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getHotelByName(name));
  };
  return (
    <div>
      <h1 className={style.h1}>Hotels</h1>
      <div className={style.container}>
        <table>
          <thead>
            <tr>
              <th colSpan={7} className={style.thSearch}>
                <form
                  action=""
                  className={style.formHotels}
                  onSubmit={handleSubmit}
                >
                  <input type="text" onChange={onChangeName} />
                  <button type="submit">Search</button>
                </form>
              </th>
            </tr>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Location</th>
              <th>Phone</th>
              <th>Category</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            {hotels?.map((hotel) => {
              return (
                <tr className={style.trBody}>
                  <td className={style.id}>{hotel.id}</td>
                  <td>{hotel.name}</td>
                  <td>{hotel.location}</td>
                  <td>{hotel.phone}</td>
                  <td>{hotel.category}</td>
                  <td>
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
                  </td>
                  <td>
                    <NavLink to={`/editHotel/${hotel.id}`}>
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

export default HotelsAdmin;
