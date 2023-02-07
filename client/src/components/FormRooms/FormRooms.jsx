import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import NavBarDetails from "../NavBarDetails/NavBarDetails";
import Footer from "../Footer/Footer";
import style from "./FormRooms.module.css"
import { validate } from "./validator";
import { createRoom } from "../../redux/actions";

const FormRooms = () => {
  const { id } = useParams();
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

  const dispatch = useDispatch();

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
    hotelId: id
  });

  // --------- Estados image Extras ---------
  const [imgExt, setImgExt] = useState([]);
  const [imgExtErr, setImgExtErr] = useState("")

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


  // --------- Funcion Submit ----------------
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputErrors(validate(input));
    setIsSubmit(true);
  };


// ------------ UseEffect para crear -------------
  useEffect(() => {
    if(Object.keys(inputErrors).length === 0 && isSubmit) {
      console.log(input);
      dispatch(createRoom(input))
      alert("Room Created succesfully");
    }
  }, [inputErrors]);
  

  // ----------- Comienzo del componente --------------
  return (
    <div>
      <NavBarDetails />
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
              <label>Extra Pictures: </label>
              <input 
                type="text" 
                value={imgExt}
                onChange={(e) => handleImgExt(e)}
              />
              <div className={style.button}>
                {
                  input.pictureDetail?.length < 4 ? <button onClick={ (e) => handlePlus(e) } name="imgExt">+</button> : <p></p>
                }
              </div>
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
              <button className={style.buttonSubmit} type="submit">Create Room</button>
            </div>
          </form>
        </div>

        <div className={style.containerImages}>
          <p className="fw-bold text-center display-1">
            Picture <span className="text-danger">Home</span>
          </p>
          <img src={input.pictureHome ? input.pictureHome : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"}/>

          <div>
            {
              input.pictureDetail?.map((img, index)=> {
                  return(
                    <div key={index}>
                      <img src={img} key={index}/>
                      {
                        <button onClick={(event) => handleDeleteImg(event)} name={img}>X</button>
                      }
                      
                    </div>
                  )
              })
            }
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
};

export default FormRooms
