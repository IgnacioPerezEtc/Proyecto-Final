import React, { useState, useTransition } from "react";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import Footer from "../Footer/Footer";
import NavBarDetails from "../NavBarDetails/NavBarDetails";
import style from "./FormHotels.module.css";
import { FaStar } from "react-icons/fa";

const FormHotels = () => {
  const info = JSON.parse(localStorage.getItem("user"));
  const alert = () => {
    Swal.fire({
      title: "Sorry",
      text: "you dont have the permission to enter",
    });
    window.setTimeout(() => {
      window.location.href = "/";
    }, 2500);
  };
  if (!info) {
    alert()
  } else if (info[0].admin === false) {
    alert()
  };

// -------- Arrays importantes ----------
const languages = ["spanish", "english", "french", "russian", "german"];
const servicies = ["Parking", "Restaurant", "Pool", "Bar", "Wi-Fi"];

// -------- Estados locales de Category --------------
const [category, setCategory ] = useState(null);
const [hover, setHover] = useState(null);

// --------- Estados image Extras ---------
const [imgExt, setImgExt] = useState([]);
const [imgExtErr, setImgExtErr] = useState("");
const [imgFlag, setImgflag] = useState(true)
  
// ------- Estado del Input ---------
const [input, setInput] = useState({
  name: "",
  rooms: "",
  location: "",
  description: "",
  pictureHome: "",
  pictureDetail: [],
  servicies: [],
  rating: 5,
  languages: [],
  category: "",
  phone: "",
  hidden: false,
  position: []
});

// ----------- Funciones on Change -------------
const handleChange = (event) => {
  setInput({
    ...input,
    [event.target.name]: event.target.value,
  });
};

const handleChecked = (event) => {
  // console.log(event.target);
  if(event.target.checked === true){
    setInput({
      ...input,
      servicies: [...input.servicies, event.target.value]
    })
  };
  if(event.target.checked === false) {
    setInput({
      ...input,
      servicies: [...input.servicies.filter(servicies => servicies !== event.target.value)]
    })
  }
};

const handleChangeCategory = (event) => {
  event.preventDefault();
  setInput({
    ...input,
    category: event.target.value
  })
};

// ------- Function extra images ----------
const handleImgExt = (event) => {
  setImgExt(event.target.value);
};

const handlePlus = (event) => {
  event.preventDefault();
  if (!/.*(png|jpg|jpeg|gif)$/.test(imgExt)){
    setImgExtErr("Enter a URL image .png, .jpg, .jpeg, .gif")
  }
  else {
    setImgExt("");
      if(!input.pictureDetail.includes(imgExt)){
        setInput({
          ...input,
          pictureDetail: [...input.pictureDetail, imgExt]
        })
        setImgExt("");
      }
  }
};

const handleDeleteImg = (event) => {
  event.preventDefault();
  let newImgs = input.pictureDetail.filter(img => img !== event.target.name)
  setInput({
    ...input,
    pictureDetail: newImgs
  })
};

return(
  <div>
    <NavBarDetails />
    <div className={style.container}>
      <div className={style.containerForm}>
        <h1>Create Hotel</h1>

        <form className={style.form}>
          <div className={style.containerInputs}>
            <div>
              <div className={style.containerInput}>
                <label>Hotel Name: </label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Hotel Name"
                  value={input.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className={style.containerInput}>
                <label>Number of rooms: </label>
                <input 
                  type="number" 
                  name="rooms"
                  placeholder="Number of rooms"
                  value={input.rooms}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div>
              <div className={style.containerInput}>
                <label>Location: </label>
                <input 
                  type="text" 
                  name="location"
                  value={input.location}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className={style.containerInput}>
                <label>Phone: </label>
                <input 
                  type="number" 
                  name="phone"
                  value={input.phone}
                  onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={style.containerPictureHome}>
            <label>Picture Home: </label>
            <input 
              type="text" 
              name="pictureHome"
              value={input.pictureHome}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={style.containerPictureHome}>
            <div>
              <label>Extra Pictures: </label>
              <input 
                type="text"
                value={imgExt}
                onChange={(e) => handleImgExt(e)}
              />
            </div>
            <div className={style.button}>
              {
                input.pictureDetail?.length < 4 ? <button onClick={ (e) => handlePlus(e) } name="imgExt">+</button> : <p></p>
              }
            </div>
          </div>

          <div className={style.containerService}>
            <label>Servicies: </label>
            <div className={style.containerServicies}>
              {
                servicies.map((servicies, index) => {
                  return (
                    <div key={index}>
                      <label>{servicies}</label>
                      <input 
                        type="checkbox" 
                        name="servicies"
                        value={servicies}
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

          <div className={style.containerCategory}>
            <label>Category:</label>
            <div>
              {
                [...Array(5)].map((star, index) => {
                  const categoryValue = index + 1;

                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="category"
                        value={categoryValue}
                        onClick={() => setCategory(categoryValue)}
                        onChange={(e) => handleChangeCategory(e)}
                        className={style.inputRadio}
                      />
                      <FaStar 
                        className={style.star}
                        size={25}
                        onMouseEnter={() => setHover(categoryValue)}
                        onMouseLeave={() => setHover(null)}
                        color={categoryValue <= (hover || category) ? "#ffc107" : "gray"}
                      />
                    </label>
                  )
                })
              }
            </div>
          </div>
          
          <div>
            <button className={style.buttonSubmit} type="submit">Add Hotel</button>
          </div>
        </form>
      </div>

      <div className={style.containerImages}>

      </div>
    </div>
    <Footer />
  </div>
  )
};

export default FormHotels;
