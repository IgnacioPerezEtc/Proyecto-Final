import React from "react";
import style from "./SearchBar.module.css";

const SearchBar = (props) => {
  return (
    <div className={style.containerSearchbar}>
      <div className={style.containerInput}>
        <input type="date" placeholder="Check-in" className={style.date}/>
        <span className={style.iconIn}></span>
      </div>
      <div className={style.containerInput}>
        <input type="date" placeholder="Check-out" className={style.date} />
        <span className={style.iconOut}></span>
      </div>
      <div className={style.containerInput}>
        <input type="number" placeholder="Adults" className={style.pl}/>
        <span className={style.iconAdults}></span>
      </div>
      <div className={style.containerInput}>
        <input type="number" placeholder="Children" className={style.pl}/>
        <span className={style.iconChildren}></span>
      </div>

      <button className={style.buttonSearchBar}>Booking Now</button>
    </div>
  );
};

export default SearchBar;
