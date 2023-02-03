import React, { useState} from "react";
import { FaStar } from "react-icons/fa"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./FormHotels.module.css";
import { createHotel } from "../../redux/actions";
import { useDispatch } from "react-redux";

const FormHotels = () => {
  const dispatch = useDispatch();

  // -------- Estados locales de Category --------------
  const [category, setCategory ] = useState(null);
  const [hover, setHover] = useState(null);

  // --------------- Imagenes Extras -------------------
  const [imgExt, setImgExt] = useState([]);

  // --------------- Validate ---------------------
  const [focused, setFocused] = useState(false)

  // -------- Estado local de lon Inputs ----------------
  const [input, setInput] = useState({
    name: "",
    rooms: "",
    location: "",
    description: "",
    parking: false,
    pictureHome: "",
    pictureDetail: [],
    rating: "",
    languages: [],
    category: "",
    phone: ""
  });
  
  const languages = ["spanish", "english", "french", "russian", "german"];

  const handleChange = (event) => {
    event.preventDefault()
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeCategory = (event) => {
    event.preventDefault();
    setInput({
      ...input,
      category: event.target.value
    })
  };

  const handleCheckbox = (event) => {
    setInput({
      ...input,
      parking: event.target.checked,
    });
  };

  const handleSelect = (event) => {
    if (!input.languages.includes(event.target.value)) {
      setInput({
        ...input,
        languages: [...input.languages, event.target.value],
      });
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    let filterOfLanguages = input.languages.filter(
      (languages) => languages !== event.target.value
    );
    setInput({
      ...input,
      languages: filterOfLanguages,
    });
  };

  const handleImgExt = (event) => {
    setImgExt(event.target.value);
  };

  const handlePlus = (event) => {
    event.preventDefault();
    if(!input.pictureDetail.includes(imgExt)){
      setInput({
        ...input,
        pictureDetail: [...input.pictureDetail, imgExt]
      })
      setImgExt("");
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

  const handleFocus = (event) => {
    setFocused({
      ...focused,
      [event.target.name]: true,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    dispatch(createHotel(input));
    alert("The Hotel was created successfully");
    setInput({
      name: "", 
      rooms: "",
      location: "",
      description: "",
      parking: false,
      pictureHome: "",
      pictureDetail: [],
      rating: "",
      languages: [],
      category: "",
      phone: ""
    });
  };

  return (
    <div>
      <Header />
      
      <div className={style.containerH1}>
        <h1>Form Hotels</h1>
      </div>
      <div className={style.container}>
          <form className={style.form} onSubmit={(e) => handleSubmit(e)}>

            <div className={style.containerInputs}>
              <div>
                <div className={style.formInput}>
                  <label>Name: </label>
                  <input 
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={ (e) => handleChange(e) }
                    required
                    onBlur={(e) => handleFocus(e)}
                    focused={focused.name?.toString()}
                  />
                  <span className={style.span}>Enter a valid Name</span>
                </div>

                <div className={style.formInput}>
                  <label>Rooms: </label>
                  <input 
                    type="number" 
                    name="rooms"
                    value={input.rooms}
                    onChange={ (e) => handleChange(e) }
                    required
                    onBlur={(e) => handleFocus(e)}
                    focused={focused.rooms?.toString()}
                  />
                  <span className={style.span}>Ingrese cantidad de Habitaciones</span>
                </div>
              </div>

              <div>
                <div className={style.formInput}>
                  <label>Location: </label>
                  <input 
                    type="text" 
                    name="location"
                    value={input.location}
                    onChange={ (e) => handleChange(e) }
                    required
                    onBlur={(e) => handleFocus(e)}
                    focused={focused.location?.toString()}
                  />
                  <span className={style.span}>Location is required</span>
                </div>

                <div className={style.formInput}>
                  <label>Phone: </label>
                  <input 
                    type="number" 
                    name="phone"
                    value={input.phone}
                    onChange={ (e) => handleChange(e) }
                    required
                    onBlur={(e) => handleFocus(e)}
                    focused={focused.phone?.toString()}
                  />
                  <span className={style.span}>Phone is required</span>
                </div>
              </div>
            </div>

          <div className={style.containerDescription}>
            <div className={style.formInput}>
              <label>Description: </label>
              <textarea 
                type="text" 
                name="description"
                value={input.description}
                onChange={ (e) => handleChange(e) }
                required
                onBlur={(e) => handleFocus(e)}
                focused={focused.description?.toString()}
              />
              <span className={style.span}>Description is required</span>
            </div>
          </div>

          <div className={style.containerCheck}>
            <div>
              
                <label>Parking: </label>
                <input 
                  type="checkbox" 
                  name="parking"
                  value={input.parking}
                  onClick= { (e) => handleCheckbox(e) }
                  id="switch"
                  className={style.switch}
                />
                <label htmlFor="switch" className={style.lbl}></label>
              
            </div>

            <div>
              <label>Category: </label>
              {
                [...Array(5)].map((star, index) => {
                  const categoryValue = index + 1

                  return (
                    <label key={index}>
                        <input 
                          type="radio" 
                          name="category" 
                          value={categoryValue}
                          onClick= { () => setCategory(categoryValue) }
                          onChange= { (e) => handleChangeCategory(e)}
                          className={style.inputRadio}
                        />
                        <FaStar
                          className={style.star}
                          onMouseEnter={ () => setHover(categoryValue) }
                          onMouseLeave={ () => setHover(null) }
                          color={ categoryValue <= (hover || category) ? "#ffc107" : "gray"}
                        />
                    </label>
                  )
                })
              }
            </div>
          </div>

          <div className={style.containerPictureHome}>
            <label>Main picture: </label>
            <input 
              type="text"
              name="pictureHome"
              value={input.pictureHome}
              onChange={ (e) => handleChange(e) }
              required
              pattern={`.*(png|jpg|jpeg|gif)$`}
              onBlur={(e) => handleFocus(e)}
              focused={focused.pictureHome?.toString()}
            />
            <span className={style.span}>Enter a URL image .png, .jpg, .jpeg, .gif</span>
          </div>

          <div className={style.containerImgExt}>
            <label>Extra Pictures: </label>
            <input 
              type="text" 
              value={imgExt}
              onChange={(e) => handleImgExt(e)}
              pattern={`.*(png|jpg|jpeg|gif)$`}
              onBlur={(e) => handleFocus(e)}
              focused={focused.imgExt?.toString()}
            />
            <span className={style.span}>Enter a URL image .png, .jpg, .jpeg, .gif</span>
            <button onClick={ (e) => handlePlus(e) } name="imgExt">+</button>

            <div className={style.containerPictureDetail}>
              {
                input.pictureDetail?.map((img, index)=> {
                    return(
                      <div key={index}>
                        <span key={img}>{img}</span>
                        <button onClick={(event) => handleDeleteImg(event)} name={img}>X</button>
                      </div>
                    )
                })
              }
            </div>
          </div>

            <div>
              <label>Rating: </label>
              <input 
                type="number" 
                name="rating"
                value={input.rating}
                onChange= { (e) => handleChange(e) }
              />
            </div>

            <div>
              <label>Languages: </label>
              <select name="languages" onChange={ (e) => handleSelect(e) }>
                {
                  languages.map((languages, index) => {
                    return (
                      <option key={index}>{languages}</option>
                    )
                  })
                }
              </select>
              <div>
                {
                  input.languages?.map((languages) => {
                    return (
                      <div key={languages}>
                        <p key={languages}>{languages}</p>
                        <button
                          value={languages}
                          onClick={(event) => handleDelete(event)}
                        >
                          x
                        </button>
                      </div>
                    );
                  })
                }
              </div>
            </div>

            <div>
              <button className={style.buttonSubmit} type="submit">Create Hotel</button>
            </div>
          </form>
        </div>
      <Footer />
    </div>
  )
};

export default FormHotels