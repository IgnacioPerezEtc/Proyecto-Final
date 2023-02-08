import React from "react";
import { useSelector } from "react-redux";
import style from "./ErrorRoutes.module.css";
const ErrorRoutes = () => {
  const reload=()=>{
    window.location.href=("/")
  }
  return (
    <div>
      <div  className={style.flexContainer}>
        <h1 className={style.lost}>Are you lost?</h1>
      </div>
      
      <div  className={style.flexContainer}>
        <img
          className={style.img}
          src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-3702359-3119148.png"
          alt=""
        />
      </div>
     
   
      <div className={style.flexContainer}>
        <button className={style.reload} onClick={reload}>Go to home</button>
      </div>
    </div>
  );
};
export default ErrorRoutes;
