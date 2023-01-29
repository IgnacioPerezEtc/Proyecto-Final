import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Login.module.css";
import destiny from "../../assets/img/destiny.png";
import { useLocation } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import { signInWithGoogle, signedWithFacebook } from "../../fireBase/Firebase";
const Login = () => {
  const location = useLocation();
  return (
    <div className={style.containerLogin}>
      <div className={style.containerLogo}>
        <img src={destiny} alt="" />
      </div>
      {location.pathname === "/" ? (
        <div className={style.www}>
          <div className={style.formContainer}>
            <div>
              <div>
                <div>
                  <NavLink to={"/home"}>
                    <button className={style.ingresarInv}>
                      Ingresar como invitado
                    </button>
                  </NavLink>
                </div>
              </div>
              <button className={style.loginGoogle} onClick={signInWithGoogle}>
                Sign in with Google
              </button>
            </div>
          </div>
          <div>
              {/* <button onClick={signedWithFacebook}>
                Sign in with Facebook
              </button> */}
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
