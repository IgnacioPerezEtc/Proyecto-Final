import React, { useEffect, useState, useTransition } from "react";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import Footer from "../Footer/Footer";
import NavBarDetails from "../NavBarDetails/NavBarDetails";
import style from "./FormHotels.module.css";
import { FaStar } from "react-icons/fa";
import { validate, capitalizarPrimeraLetra } from "./validator";
import { useDispatch } from "react-redux";
import { createHotel } from "../../redux/actions";

const FormHotels = () => {
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
  // };

  const dispatch = useDispatch();

  // -------- Arrays importantes ----------
  const languages = ["English", "Chinese, Mandarin", "Hindi", "Español", "Francés", "Arabic, Standard", "Bengali", "Russian", "Portuguese", "Urdu", "Indonesian", "German", "Japanese", "Marathi", "Telugu", "Turkish", "Tamil", "Chinese, Yue", "Vietnamese", "Tamil", "Chinese, Wu", "Korean", "Persian", "Iranian", "Hausa", "Arabic,Egyptian Spoken", "Swahili", "Javanese", "Italian", "Punjabi, Western", "Kannada", "Gujarati", "Thai", "Ahmaric", "Bhoshpuri", "Panjabí", "Chinese, Min Nan", "Chino jin", "Yoruba", "Chino hakka", "Birmano", "Árabe sudanés", "Polaco", "Árabe argelino", "Lingala"];

  const servicies = ["parking", "restaurant", "publicPool", "bar", "wifi"];

  // -------- Estados locales de Category --------------
  const [category, setCategory ] = useState(null);
  const [hover, setHover] = useState(null);

  // ------ EStados de las position --------
  const [pos, setPos] = useState({
    latitud: "",
    longitud: "",
  });
  const [errPosition, setErrPosition] = useState("")

  // --------- Estados image Extras ---------
  const [imgExt, setImgExt] = useState([]);
  const [imgExtErr, setImgExtErr] = useState("");

  // ----------- Errors ------------
  const [inputErrors, setInputErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
    
  // ------- Estado del Input ---------
  const [input, setInput] = useState({
    name: "",
    rooms: "",
    location: "",
    description: "",
    parking: false,
    restaurant: false,
    publicPool: false,
    bar: false,
    wifi: false,
    pictureHome: "",
    pictureDetail: [],
    rating: 5,
    languages: [],
    category: "",
    phone: "",
    hidden: false,
    position: ["", ""]
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
    // if(event.target.checked === true){
    //   setInput({
    //     ...input,
    //     servicies: [...input.servicies, event.target.value]
    //   })
    // };
    // if(event.target.checked === false) {
    //   setInput({
    //     ...input,
    //     servicies: [...input.servicies.filter(servicies => servicies !== event.target.value)]
    //   })
    // }

    setInput({
      ...input,
      [event.target.name]: event.target.checked
    })
  };

  const handleChangeCategory = (event) => {
    event.preventDefault();
    setInput({
      ...input,
      category: event.target.value
    })
  };

  const handleSelected = (event) => {
    if (!input.languages.includes(event.target.value)) {
      setInput({
        ...input,
        languages: [...input.languages, event.target.value],
      });
    }
  };

  const handleDeleteLanguages = (event) => {
    event.preventDefault();
    let filterOfLanguages = input.languages.filter(
      (languages) => languages !== event.target.value
    );
    setInput({
      ...input,
      languages: filterOfLanguages,
    });
  };

  const handlePosition = (event) => {
    setPos({
      ...pos,
      [event.target.name]: event.target.value
    });
  };

  const handleChangePosition = () => {
    setInput({
      ...input,
      position: [input.position[0]= pos.latitud, input.position[1]=pos.longitud],
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
      dispatch(createHotel(input));
      alert("Hotel was Created succesfully");
    }
  }, [inputErrors]);

  return(
    <div>
      <NavBarDetails />
      <div className={style.container}>
        <div className={style.containerForm}>
          <p className="fw-bold text-center display-1">
            Create <span className="text-danger">Hotel</span>
          </p>

          <div className={style.form}>
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
                  <div>
                    <span className={style.span}>{inputErrors.name}</span>
                  </div>
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
                  <div>
                    <span className={style.span}>{inputErrors.rooms}</span>
                  </div>
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
                  <div>
                    <span className={style.span}>{inputErrors.location}</span>
                  </div>
                </div>

                <div className={style.containerInput}>
                  <label>Phone: </label>
                  <input 
                    type="text" 
                    name="phone"
                    value={input.phone}
                    onChange={(e) => handleChange(e)}
                  />
                  <div>
                    <span className={style.span}>{inputErrors.phone}</span>
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
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
              />
              <div>
                <span className={style.span}>{inputErrors.pictureHome}</span>
              </div>
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
                    const servicios = capitalizarPrimeraLetra(servicies)
                    return (
                      <div key={index}>
                        <label>{servicios}</label>
                        <input 
                          type="checkbox" 
                          name={servicies}
                          value={input.servicies}
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
            
            
            <div className={style.containerLanguages}>
              <label>Languages: </label>
              <div>
                {
                  input.languages.length < 5 ? <select name="languages" value={input.languages} onChange={(e) => handleSelected(e)}>
                  <option value="title" disabled name=""></option>
                  {
                    languages.map((language, index) => {
                      return <option name={language} key={index}>{language}</option>;
                    })
                  }
                </select> : <p></p>
                }
                
              </div>

              <div className={style.containerPosition}>
                <label>Position:</label>
                <div>
                  <div className={style.containerInput}>
                    <input 
                      type="text"
                      name="latitud"
                      value={pos.latitud}
                      onChange={(e) => handlePosition(e)}
                    />
                    <div>
                      <span className={style.span}>{errPosition}</span>
                    </div>
                  </div>
                  <div className={style.containerInput}>
                    <input 
                      type="text"
                      name="longitud"
                      value={pos.longitud}
                      onChange={(e) => handlePosition(e)}
                    />
                    <div>
                      <span className={style.span}>{errPosition}</span>
                    </div>
                  </div>
                </div>
              </div>
                <div>
                  <button onClick={handleChangePosition} name="position">Add Position</button>
                </div>
            </div>
            
            <div>
              <button className={style.buttonSubmit} type="submit" onClick={(e) => handleSubmit(e)}>Add Hotel</button>
            </div>
          </div>
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

          <div className={style.languages}>
            <p className="fw-bold text-center display-1">
              Languages <span className="text-danger">Selected</span>
            </p>
            <div>
              {input.languages?.map((languages) => {
                return (
                  <div key={languages}>
                    <p key={languages}>{languages}</p>
                    <button
                      value={languages}
                      onClick={(event) => handleDeleteLanguages(event)}
                    >
                      x
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    )
};

export default FormHotels;
