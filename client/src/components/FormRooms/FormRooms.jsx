import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./FormRooms.module.css"
import { validate } from "./validator";

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

  // const dispatch = useDispatch();

  const specialties = [
    "TV",
    "Calefaccion",
    "Spa",
    "Free Wifi",
    "Mini-Bar",
    "Ducha",
    "Toilette",
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

  // ----------- Errors ------------
  const [inputErrors, setInputErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


// ----------- Funciones on Change -------------
  const handleChange = (event) => {
    event.preventDefault()
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
  };


  // --------- Funcion Submit ----------------
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputErrors(validate(input));
    setIsSubmit(true);
  };


// ------------ UseEffect para crear -------------
  useEffect(() => {
    if(Object.keys(inputErrors).length === 0 && isSubmit) {
      console.log(input)
      alert("Room Created succesfully")
    }
  }, [inputErrors]);
  

  // ----------- Comienzo del componente --------------
  return (
    <div>
      <Header />
      <div className={style.firsContainer}>

        <div className={style.container}>
          <p className="fw-bold text-center display-1">
            Create <span className="text-danger">Room</span>
          </p>

          <form onSubmit={(e) => handleSubmit(e)} className={style.form}>

            <div className={style.containerInputs}>
              <div>
                <div className={style.containerInput}>
                  <label>Name Room: </label>
                  <input 
                    type="text" 
                    name="numRoom"
                    placeholder="Name Room"
                    value={input.name}
                    onChange= {(e) => handleChange(e)}
                  />
                  <div>
                    <span className={style.span}>{inputErrors.numRoom}</span> 
                  </div>
                </div>

                <div className={style.containerInput}>
                  <label>Max of Adult: </label>
                  <input 
                    type="number" 
                    name="maxAdult"
                    value={input.maxAdult}
                    onChange= {(e) => handleChange(e)}
                  />
                  <div>
                    <span className={style.span}>{inputErrors.maxAdult}</span>
                  </div>
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
                  <div>
                    <span className={style.span}>{inputErrors.numPeople}</span>
                  </div>
                </div>

                <div className={style.containerInput}>
                  <label>Max of Child: </label>
                  <input 
                    type="number" 
                    name="maxChild"
                    value={input.maxChild}
                    onChange= {(e) => handleChange(e)}
                  />
                  <div>
                    <span className={style.span}>{inputErrors.maxChild}</span>
                  </div>
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
              <div>
                <span className={style.span}>{inputErrors.description}</span>
              </div>
            </div>

            <div className={style.containerPictureHome}>
                <label>Picture Home: </label>
                <input 
                  type="text" 
                  name="pictureHome"
                  value={input.pictureHome}
                  onChange= {(e) => handleChange(e)}
                />
                <div>
                  <span className={style.span}>{inputErrors.pictureHome}</span>
                </div>
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
                <div>
                  <span className={style.span}>{inputErrors.value}</span>
                </div>
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

        <div className={style.containerImages}>
          <h2>Picture Home: </h2>
          <img src={input.pictureHome ? input.pictureHome : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"}/>
          <div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
};

export default FormRooms
