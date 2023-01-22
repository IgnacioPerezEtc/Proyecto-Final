import React from "react";
import style from "./SearchBarHotels.module.css";

const SearchBar = (props) => {
  return (
    <div className={style.flexContainer}>
      <div className={style.searchBar}>
        <div className={style.containerSearchbar}>
          <div>
            <input
              type="text"
              placeholder="Write a name"
              className={style.date}
            />
            <span className={style.iconIn}></span>
          </div>
          <div>
            <select type="text" placeholder="Languages" className={style.date}>
              <option value="">Select a language</option>
              <option value="">Spanish</option>
              <option value="">Rusian</option>
              <option value="">English</option>
              <option value="">French</option>
            </select>
            <span className={style.iconOut}></span>
          </div>

          <select
            className={style.containerInput}
            type="number"
            placeholder="Adults"
            min="0"
          >
            <option value="">Number of stars</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
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

          <button className={style.buttonSearchBar}>Booking Now</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
