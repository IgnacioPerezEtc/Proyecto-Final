import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Login.module.css";
import destiny from "../../assets/img/destiny.png";
import { useLocation } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import { signInWithGoogle } from "../../fireBase/Firebase";
const Login = () => {
  const location = useLocation();
  return (
    <div className={style.containerLogin}>
      <div className={style.containerLogo}>
        <img src={destiny} alt="" />
      </div>
      {location.pathname === "/" ? (
        <div className={style.formContainer}>
          <form >
            <div className={style.containerInputLabel}>
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <div className={style.containerInputLabel}>
              <label htmlFor="">Password</label>
              <input type="text" />
            </div>
          </form>
          <NavLink to={"/signUp"}>
            Registrate
          </NavLink>
          <NavLink to={"/home"}>
            <button className={style.ingresar}>
              Ingresar
            </button>
          </NavLink>
          <button className={style.loginGoogle} onClick={signInWithGoogle}>
            Sign in with Google
          </button>
        </div>
      ) : (
        <div className={style.formContainer}>
          <SignUp />
        </div>
      )}
    </div>
  );
};

export default Login;
