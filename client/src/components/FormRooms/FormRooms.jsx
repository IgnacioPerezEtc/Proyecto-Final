import React, { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./FormRooms.module.css"

const FormRooms = () => {
  // const info = JSON.parse(localStorage.getItem("user"));
  // const alert = () => {
  //   Swal.fire({
  //     title: "Sorry",
  //     text: "you dont have the permission to enter",
  //   });
  //   window.setTimeout(() => {
  //     window.location.href = "/";
  //   }, 2500);
  // };
  // if (!info) {
  //   alert()
  // } else if (info[0].admin === false) {
  //   alert()
  // }

  const specialties = [
    "Restaurant",
    "Pool",
    "Spa",
    "Free Wifi",
    "Bar",
    "Conference",
    "Game room",
  ];

  const [input, setInput] = useState({
    numRoom: "",
    description: "",
    pictureHome: "",
    pictureDetail: [],
    numPeople: "",
    maxAdult: "",
    maxChild: "",
    specialties: [],
    value: "",
    hidden: false,
  })
  
  return (
    <div>
      <Header />

      <div className={style.container}>
        <h1>Create Room</h1>

        <form className={style.form}>

          <div className={style.containerInputs}>
            <div>
              <div className={style.containerInput}>
                <label>Name Room: </label>
                <input type="text" />
              </div>

              <div className={style.containerInput}>
                <label>Max of Adult: </label>
                <input type="number" />
              </div>
            </div>

            <div>
              <div className={style.containerInput}>
                <label>Max of Peoples: </label>
                <input type="number" />
              </div>

              <div className={style.containerInput}>
                <label>Max of Child: </label>
                <input type="number" />
              </div>
            </div>

          </div>
          
          <div className={style.containerDescription}>
            <label>Description: </label>
            <textarea 
              type="text"
            />
          </div>

          <div className={style.containerPictureHome}>
              <label>Picture Home: </label>
              <input 
                type="text" 
              />
          </div>

          <div className={style.containerPictureHome}>
            <label>Picture Detail: </label>
            <input 
              type="text" 
            />
          </div>

          <div className={style.containerService}>
            <label>Specialties: </label>
            <div className={style.containerSpecialties}>
              {
                specialties.map((specialties, index) => {
                  return (
                    <div key={index}>
                      <label>{specialties}</label>
                      <input 
                        type="checkbox" 
                        id={`switch${index}`}
                        className={style.switch}
                      />
                      <label htmlFor={`switch${index}`} className={style.lbl}></label>
                    </div>
                  )
                })
              }
            </div>
          </div>

          <div>
            <label>Value: </label>
            <input 
              type="number" 
            />
          </div>

          <div>
            <label>Hidden: </label>
            <input 
              type="radio" 
            />
          </div>
        </form>
      </div>

      <Footer />
    </div>
  )
};

export default FormRooms
