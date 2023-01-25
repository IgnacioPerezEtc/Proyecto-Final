import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Login.module.css"

const Login = () => {
  return (
    <div className={style.containerLogin}>
      <NavLink to={"/home"}>
      <button className={style.ingresar}>Ingresar</button>
      </NavLink>
    </div>
  );
};

export default Login;
