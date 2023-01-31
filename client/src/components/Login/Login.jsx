import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Login.module.css";
import destiny from "../../assets/img/destiny.png";
import { useLocation } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import { signInWithGoogle, signedWithFacebook } from "../../fireBase/Firebase";
import { logOut } from "../../redux/actions";
const Login = () => {
  const location = useLocation();
  const info = (JSON.parse(localStorage.getItem("user")));
  return (
    <div className={style.containerLogin}>
      <div className={style.containerLogo}>
        <img src={destiny} alt="logo" />
      </div>
      {location.pathname === "/" ? (
        <div className={style.www}>
          <div className={style.formContainer}>
            {info ? <div>
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
            </div> :
              <div>
                <div>
                  <div>
                    <NavLink to={"/home"}>
                      <button className={style.ingresarInv}>
                        Guest
                      </button>
                    </NavLink>
                  </div>
                </div>
                <button className={style.loginGoogle} onClick={signInWithGoogle}>
                  Sign in with Google
                </button>
              </div>
            }
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
