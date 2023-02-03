import React, { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { imageValidator } from "../FormHotels/validator";
import { createRoom } from "../../redux/actions";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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
    "Conference room",
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
      <h1>Create Room</h1>

      <form>
        <div>
          <label>Name Room: </label>
          <input 
            type="text" 
          />
        </div>

        <div>
          <label>Description: </label>
          <input 
            type="text" 
          />
        </div>

        <div>
          <label>Picture Home: </label>
          <input 
            type="text" 
          />
        </div>

        <div>
          <label>Picture Detail: </label>
          <input 
            type="text" 
          />
        </div>

        <div>
          <label>Number of People: </label>
          <input 
            type="number" 
          />
        </div>

        <div>
          <label>Max of Adults: </label>
          <input 
            type="number" 
          />
        </div>

        <div>
          <label>Max of Child: </label>
          <input 
            type="number" 
          />
        </div>

        <div>
          <label>Specialties: </label>
          <input 
            type="radio" 
          />
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

      <Footer />
    </div>
  )
};

export default FormRooms
