import React from "react";
import { useState } from "react";
import style from "./SearchBarHotels.module.css";
import {
  filterByLanguage,
  filterByStars,
  getHotelByName,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const SearchBarHotels = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const error = useSelector((state) => state.error);
  const handleFilterByLanguage = (e) => {
    e.preventDefault();
    dispatch(filterByLanguage(e.target.value));
  };

  const handleFilterByStars = (e) => {
    e.preventDefault();
    dispatch(filterByStars(e.target.value));
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getHotelByName(name));
  };
  return (
    <div>
      <div className={style.flexContainer}>
        <select
          className={style.optionStar}
          type="number"
          min="0"
          onChange={(e) => {
            handleFilterByStars(e);
          }}
        >
          <option value="All">Number of stars</option>
          <option className={style.starRed} value="1">
            ★
          </option>
          <option className={style.starRed} value="2">
            ★★
          </option>
          <option className={style.starRed} value="3">
            ★★★
          </option>
          <option className={style.starRed} value="4">
            ★★★★
          </option>
          <option className={style.starRed} value="5">
            ★★★★★
          </option>
        </select>
        <select
          type="text"
          placeholder="Languages"
          className={style.optionStar}
          onChange={(e) => {
            handleFilterByLanguage(e);
          }}
        >
          <option value="All">Select a language</option>
          <option value="spanish">Spanish</option>
          <option value="russian">Russian</option>
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="german">German</option>
        </select>
        {/* <NavLink to={"/formHotels"}>
              <button className={style.createHotel}> Create Hotel</button>
            </NavLink> */}
      </div>
    </div>
  );
};

export default SearchBarHotels;
