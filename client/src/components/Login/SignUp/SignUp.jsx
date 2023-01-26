import React from "react";
import style from "./SignUp.module.css"

const SignUp = () => {
  return (
    <div>
      <form className={style.formContainer}>
        <div className={style.containerInputLabel}>
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div className={style.containerInputLabel}>
          <label htmlFor="">LastName</label>
          <input type="text" />
        </div>
        <div className={style.containerInputLabel}>
          <label htmlFor="">Age</label>
          <input type="text" />
        </div>
        <div className={style.containerInputLabel}>
          <label htmlFor="">Phone</label>
          <input type="text" />
        </div>
        <div className={style.containerInputLabel}>
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div className={style.containerInputLabel}>
          <label htmlFor="">Nacionality</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
