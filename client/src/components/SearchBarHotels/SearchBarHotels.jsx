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
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import reloadIcon from "../../assets/img/reload.png";
const SearchBarHotels = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const error = useSelector((state) => state.error);
  const info = JSON.parse(localStorage.getItem("user"));
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
    // navigate("/hotels")
  };
  const reload = () => {
    window.location.reload();
  };
  return (
    <div>
      <div>
        <div className={style.flexContainer}>
          <div className={style.searchBar}>
            <div className={style.containerSearchbar}>
              <div>
                <input
                  type="text"
                  placeholder="Write a name"
                  className={style.dateSearchbar}
                  onChange={(e) => handleInputChange(e)}
                />
                <span className={style.iconIn}></span>
              </div>
              <button
                className={style.buttonSearchBar}
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Search Hotel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className={style.iconOut}></span>
      </div>
      {location.pathname !== "/home" ? (
        <div className={style.flexContainer}>
          <select
            className={style.optionStar}
            type="number"
            min="0"
            onChange={(e) => {
              handleFilterByStars(e);
            }}
            disabled={error}
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
            disabled={error}
          >
            <option value="All">Select a language</option>
            <option value="spanish">Spanish</option>
            <option value="russian">Russian</option>
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="german">German</option>
          </select>
          <div className={style.containerLoad}>
            <img
              onClick={reload}
              src={reloadIcon}
              className={`${style.reload}`}
              alt=""
            />
          </div>

          {info
            ? info.at(0).admin === true && (
                <NavLink to={"/formHotels"}>
                  <button className={style.createHotel}> Create Hotel</button>
                </NavLink>
              )
            : ""}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBarHotels;
