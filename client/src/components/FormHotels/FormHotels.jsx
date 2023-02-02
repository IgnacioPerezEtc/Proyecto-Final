import React, { useState} from "react";
import { FaStar } from "react-icons/fa"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./FormHotels.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const FormHotels = () => {

  // -------- Estados locales de Category --------------
  const [category, setCategory ] = useState(null);
  const [hover, setHover] = useState(null);

  // --------------- Imagenes Extras -------------------
  const [imgExt, setImgExt] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
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
      <h1>Form Hotels</h1>

      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Name: </label>
            <input 
              type="text"
              name="name"
              value={input.name}
              onChange={ (e) => handleChange(e) }
            />
            <span></span>
          </div>

          <div>
            <label>Rooms: </label>
            <input 
              type="number" 
              name="rooms"
              value={input.rooms}
              onChange={ (e) => handleChange(e) }
            />
          </div>

          <div>
            <label>Location: </label>
            <input 
              type="text" 
              name="location"
              value={input.location}
              onChange={ (e) => handleChange(e) }
            />
          </div>

          <div>
            <label>Description: </label>
            <input 
              type="text" 
              name="description"
              value={input.description}
              onChange={ (e) => handleChange(e) }
            />
          </div>

          <div>
            <label>Parking: </label>
            <input 
              type="checkbox" 
              name="parking"
              value={input.parking}
              onClick= { (e) => handleCheckbox(e) }
            />
          </div>

          <div>
            <label>Main picture: </label>
            <input 
              type="text"
              name="pictureHome"
              value={input.pictureHome}
              onChange={ (e) => handleChange(e) }
            />
            <span></span>
          </div>

          <div>
            <label>Extra Pictures: </label>
            <input 
              type="text" 
              value={imgExt}
              onChange={ (e) => handleImgExt(e) }
            />
            <button onClick={ (e) => handlePlus(e) } name="imgExt">+</button>
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
                        color={ categoryValue <= (hover || category) ? "#ffc107" : "white"}
                      />
                  </label>
                )
              })
            }
          </div>

          <div>
            <label>Phone: </label>
            <input 
              type="number" 
              name="phone"
              value={input.phone}
              onChange={ (e) => handleChange(e) }
            />
          </div>

          <div>
            <button type="submit">Create Hotel</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  )
};

export default FormHotels