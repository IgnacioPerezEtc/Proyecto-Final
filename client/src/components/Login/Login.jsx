import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Login.module.css";
import destiny from "../../assets/img/destiny.png";
import { useLocation } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import { signInWithGoogle, signedWithFacebook } from "../../fireBase/Firebase";
import { logOut } from "../../redux/actions";
import logo from "../../assets/img/zyro-image.png";
const Login = () => {
  const location = useLocation();
  const info = JSON.parse(localStorage.getItem("user"));
  let theme = localStorage.getItem("theme");
  if (!theme) {
    localStorage.setItem("theme", "light");
  }
  return (
    <div className={style.containerLogin}>
      <div className={style.containerLogo}>
        <img
          className={style.imgLogin}
          src="https://dynl.mktgcdn.com/p/P9mTsKwteKIBP4SCAsGMmBphRWaZ7dgpgZJzjOptXMI/1024x768.jpg"
          alt="logo"
        />
      </div>
      {location.pathname === "/" ? (
        <div className={style.www}>
          <div className={style.formContainer}>
            {" "}
            <div className={style.container}>
              <div className={style.flexContainer}>
                <h1 className={style.yourDestiny}>Your Destiny</h1>
                <span className={style.logo}></span>
              </div>
            </div>
            {info ? (
              <div>
                <div>
                  <div>
                    <h1 className={style.title}>Welcome {info[0].name}!</h1>

                    <NavLink to={"/home"}>
                      <button className={style.letsBooking}>
                        Let's Booking
                      </button>
                    </NavLink>
                  </div>
                </div>
                <button className={style.logOut} onClick={logOut}>
                  Log-Out
                </button>
              </div>
            ) : (
              <div>
                <div>
                  <div>
                    <h3 className={style.titleH3}>
                      Welcome to our booking website!{" "}
                    </h3>
                    <NavLink to={"/home"}>
                      <button className={style.ingresarInv}>Guest</button>
                    </NavLink>
                  </div>
                </div>
                <button
                  className={style.loginGoogle}
                  onClick={signInWithGoogle}
                >
                  Sign in with Google
                </button>
              </div>
            )}
          </div>
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
