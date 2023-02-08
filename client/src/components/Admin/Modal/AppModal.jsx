import React, { useState } from "react";
import Modal from "./Modal";
import style from "./AppModal.module.css"

const AppModal = () => {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };

  return (
    <div>
      <button className={style.buttonModal} onClick={toggle}>
        Open Modal
      </button>
      <Modal active={active} toggle={toggle}>
        <h1>Modal works!</h1>
      </Modal>
    </div>
  );
};

export default AppModal;
