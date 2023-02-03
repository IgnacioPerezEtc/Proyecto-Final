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
  });

  const handleChange = (event) => {
    event.preventDefault()
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleChecked = (event) => {
    console.log(event.target);
    if(event.target.checked === true){
      setInput({
        ...input,
        specialties: [...input.specialties, event.target.value]
      })
    };
    if(event.target.checked === false) {
      setInput({
        ...input,
        specialties: [...input.specialties.filter(specialties => specialties !== event.target.value)]
      })
    }
  };

  const handleCheckedHidden = (event) => {
    setInput({
      ...input,
      hidden: event.target.checked
    })
  }
  
  return (
    <div>
      <Header />

      <div className={style.container}>
        <p className="fw-bold text-center display-1">
           Create <span className="text-danger">Room</span>
        </p>

        <form className={style.form}>

          <div className={style.containerInputs}>
            <div>
              <div className={style.containerInput}>
                <label>Name Room: </label>
                <input 
                  type="text" 
                  name="numRoom"
                  value={input.name}
                  onChange= {(e) => handleChange(e)}
                />
              </div>

              <div className={style.containerInput}>
                <label>Max of Adult: </label>
                <input 
                  type="number" 
                  name="maxAdult"
                  value={input.maxAdult}
                  onChange= {(e) => handleChange(e)}
                />
              </div>
            </div>

            <div>
              <div className={style.containerInput}>
                <label>Number of Peoples: </label>
                <input 
                  type="number" 
                  name="numPeople"
                  value={input.numPeople}
                  onChange= {(e) => handleChange(e)}
                />
              </div>

              <div className={style.containerInput}>
                <label>Max of Child: </label>
                <input 
                  type="number" 
                  name="maxChild"
                  value={input.maxChild}
                  onChange= {(e) => handleChange(e)}
                />
              </div>
            </div>

          </div>
          
          <div className={style.containerDescription}>
            <label>Description: </label>
            <textarea 
              type="text"
              name="description"
              value={input.description}
              onChange= {(e) => handleChange(e)}
            />
          </div>

          <div className={style.containerPictureHome}>
              <label>Picture Home: </label>
              <input 
                type="text" 
                name="pictureHome"
                value={input.pictureHome}
                onChange= {(e) => handleChange(e)}
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
                        name="specialties"
                        value={specialties}
                        id={`switch${index}`}
                        className={style.switch}
                        onChange={(e) => handleChecked(e)}
                      />
                      <label htmlFor={`switch${index}`} className={style.lbl}></label>
                    </div>
                  )
                })
              }
            </div>
          </div>

          <div className={style.containerValue}>
            <label>Value: </label>
            <div>
              <input 
                type="number" 
                name="value"
                value={input.value}
                onChange= {(e) => handleChange(e)}
              />
            </div>
          </div>

          <div>
            <label>Hidden: </label>
            <input 
              type="checkbox" 
              name="hidden"
              value={input.hidden}
              onChange={(e) => handleCheckedHidden(e)}
            />
          </div>

          <div>
              <button className={style.buttonSubmit} type="submit">Create Room</button>
            </div>
        </form>
      </div>

      <Footer />
    </div>
  )
};

export default FormRooms
