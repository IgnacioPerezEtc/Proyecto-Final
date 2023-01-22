import React from "react";
import style from "./SearchBarHotels.module.css";

const SearchBar = (props) => {
  return (
    <div className={style.flexContainer}>

    <div className={style.searchBar}>
      <div className={style.containerSearchbar}>
        <div>
          <input type="text" placeholder="Check-in" className={style.date} />
          <span className={style.iconIn}></span>
        </div>
        <div>
          <input type="text" placeholder="Check-out" className={style.date} />
          <span className={style.iconOut}></span>
        </div>
        <div className={style.containerInput}>
          <input
            type="number"
            placeholder="Adults"
            className={style.pl}
            min="0"
          />
          <span className={style.iconAdults}></span>
        </div>
        <div className={style.containerInput}>
          <input
            type="number"
            placeholder="Children"
            className={style.pl}
            min="0"/>
            
          <span className={style.iconChildren}></span>
        </div>

        <button className={style.buttonSearchBar}>Booking Now</button>
      </div>
    </div>
    </div>
  );
};

export default SearchBar;
