import React from "react";
import { useSelector } from "react-redux";
import style from "./Error.module.css";
const Error = () => {
  const error = useSelector((state) => state.error);
  return (
    <div>
      <div  className={style.flexContainer}>
        <h1>Something went wrong</h1>
      </div>
      <div  className={style.flexContainer}>
        <img
          className={style.img}
          src="https://img.lovepik.com/free-png/20220126/lovepik-404-error-code-png-image_401803274_wh300.png"
          alt=""
        />
      </div>
      <div  className={style.flexContainer}><h3>{error}</h3></div>
    </div>
  );
};
export default Error;
