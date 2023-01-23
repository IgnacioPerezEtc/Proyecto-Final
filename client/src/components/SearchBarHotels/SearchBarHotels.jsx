import React from "react";
import { useState } from "react";
import style from "./SearchBarHotels.module.css";
import { filterByLanguage, filterByStars, getHotelByName } from "../../redux/actions";
import { useDispatch } from "react-redux"

const SearchBar = (props) => {

  const dispatch = useDispatch();
  const [name, setName] = useState("")

  const handleFilterByLanguage = (e) => {
    e.preventDefault();
    dispatch(filterByLanguage(e.target.value))
  };

  const handleFilterByStars = (e) => {
    e.preventDefault();
    dispatch(filterByStars(e.target.value))
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getHotelByName(name));
}

  return (
    <div className={style.flexContainer}>
      <div className={style.searchBar}>
        <div className={style.containerSearchbar}>
          <div>
            <input
              type="text"
              placeholder="Write a name"
              className={style.date}
              onChange= {e => handleInputChange(e)}
            />
            <span className={style.iconIn}></span>
          </div>
          <div>
            <select type="text" placeholder="Languages" className={style.date} onChange={e => {handleFilterByLanguage(e)}}>
              <option value="All">Select a language</option>
              <option value="spanish">Spanish</option>
              <option value="russian">Russian</option>
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="german">German</option>
            </select>
            <span className={style.iconOut}></span>
          </div>

          <select
            className={style.containerInput}
            type="number"
            placeholder="Adults"
            min="0"
            onChange={e => {handleFilterByStars(e)}}
          >
            <option value="All">Number of stars</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          {/* <div className={style.containerInput}>
            <input
              type="number"
              placeholder="Children"
              className={style.pl}
              min="0"
            />

            <span className={style.iconChildren}></span>
          </div> */}

          <button className={style.buttonSearchBar} type="submit" onClick={e => handleSubmit(e)}>Booking Now</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
