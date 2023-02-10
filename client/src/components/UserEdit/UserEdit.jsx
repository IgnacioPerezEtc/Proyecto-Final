import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putUser } from "../../redux/actions";
import style from "./UserEdit.module.css";
import NavBarDetails from "../NavBarDetails/NavBarDetails";
import Footer from "../Footer/Footer";

const UserEdit = () => {
  const id = JSON.parse(localStorage.getItem("user"))[0].email;
  const userDetail = useSelector((state) => state.userDetail);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [newItem, setNewItem] = useState({
    name: userDetail.name?userDetail.name: "",
    address: userDetail.address ? userDetail.address : "",
    phone: userDetail.phone ? userDetail.phone : "",
  });

  function handleChange(e) {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.name) {
      let newData = {
        name: newItem.name,
        address: newItem.address,
        phone: newItem.phone,
      };
      dispatch(putUser(id, newData));
      setMessage("Data added successfully");
    } else setMessage("Failed to fill data");
  }

  return (
    <div>
      <NavBarDetails />
      <div className={style.mainContainer}>
        <form className={`${style.formContainer} formContainer`} onSubmit={(e) => handleSubmit(e)}>
          <h1>Edit your information</h1>
          <label className={style.form}>
            <h4>User Name:</h4>
          </label>
          <input
            className={style.form}
            name="name"
            value={newItem.name}
            onChange={(e) => handleChange(e)}
          />

          <label className={style.form}>
            <h4>Address:</h4>
          </label>
          <input
            className={style.form}
            name="address"
            value={newItem.address}
            onChange={(e) => handleChange(e)}
          />

          <label className={style.form}>
            <h4>Phone Number:</h4>
          </label>
          <input
            className={style.form}
            name="phone"
            value={newItem.phone}
            onChange={(e) => handleChange(e)}
          />

          <button id={style.button} type="submit">
            Save Changes
          </button>
          <p
            id={
              message == "Failed to fill data"
                ? style.messageRed
                : style.messageGreen
            }
          >
            {message}
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UserEdit;
