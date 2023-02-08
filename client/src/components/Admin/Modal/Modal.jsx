import React from "react";
import Portal from "./Portal";
import style from "./Modal.module.css";
const Modal = ({ children, toggle, active }) => {
  return (
    <Portal>
      {active && (
        <div className={style.wrapper}>
          <div className={style.window}>
            <button className={style.button} onClick={toggle}>
              X
            </button>
            <div>{children}</div>
          </div>
          <div onClick={toggle} className={style.background}></div>
        </div>
      )}
    </Portal>
  );
};

export default Modal;
