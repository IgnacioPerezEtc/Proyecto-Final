import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { createHotel, getAllHotels } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Form.module.css";
const Form = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
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
  const handleCheckbox = (event) => {
    setInput({
      ...input,
      parking: event.target.checked,
    });
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
  const languages = ["spanish", "english", "french", "russian", "german"];
  const [input, setInput] = useState({
    name: "",
    rooms: "",
    location: "",
    description: "",
    parking: false,
    pictureHome: "",
    rating: "",
    languages: [],
    category: "",
    phone: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createHotel(input));
    alert("The Hotel was created successfully");
    setInput({
      name: "",
      rooms: "",
      location: "",
      description: "",
      parking: false,
      pictureHome: "",
      rating: "",
      languages: [],
      category: "",
      phone: "",
    });
  };
  return (
    <div className={style.containerForm}>
      <form className={style.flexContainer}>
        <div className={style.containerInput}>
          <label>Name</label>
          <input
            className={style.inputForm}
            autoComplete="off"
            value={input.name}
            name="name"
            onChange={(event) => {
              handleChange(event);
            }}
            type="text"
            placeholder="name"
          />
        </div>

        <div className={style.containerInput}>
        <label>Rooms</label>
          <input
            className={style.inputForm}
            autoComplete="off"
            value={input.rooms}
            name="rooms"
            onChange={(event) => {
              handleChange(event);
            }}
            type="number"
            placeholder="rooms"
          />
        </div>
        <div className={style.containerInput}>
        <label>Location</label>
          <input
            className={style.inputForm}
            autoComplete="off"
            value={input.location}
            name="location"
            onChange={(event) => {
              handleChange(event);
            }}
            type="text"
            placeholder="location"
          />
        </div>
        <div className={style.containerInput}>
        <label>Description</label>
          <input
            className={style.inputForm}
            autoComplete="off"
            value={input.description}
            name="description"
            onChange={(event) => {
              handleChange(event);
            }}
            type="text"
            placeholder="description"
          />
        </div>
        <div className={style.containerInput}>
          {" "}
          <label>Parking</label>
          <input
            className={style.inputForm}
            autoComplete="off"
            value={input.parking}
            name="parking"
            onClick={(event) => {
              handleCheckbox(event);
            }}
            type="checkbox"
            placeholder="parking"
          />
        </div>
        <div className={style.containerInput}>
        <label>Image</label>
          <input
            className={style.inputForm}
            autoComplete="off"
            value={input.pictureHome}
            name="pictureHome"
            onChange={(event) => {
              handleChange(event);
            }}
            type="text"
            placeholder="pictureHome"
          />
        </div>
        <div className={style.containerInput}>
        <label>Rating</label>
          <input
            className={style.inputForm}
            autoComplete="off"
            value={input.rating}
            name="rating"
            onChange={(event) => {
              handleChange(event);
            }}
            type="text"
            placeholder="rating"
          />
        </div>
        <div className={style.containerInput}>
        <label>Languages</label>
          <select
            className={style.inputForm}
            autoComplete="off"
            value={input.languages}
            name="languages"
            onChange={(event) => {
              handleSelect(event);
            }}
            type="text"
            placeholder="languages"
          >
            {languages.map((language, index) => {
              return <option key={index}>{language}</option>;
            })}
          </select>
          {input.languages?.map((languages) => {
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
          })}
        </div>
        <div className={style.containerInput}>
        <label>Category</label>
          <input
            className={style.inputForm}
            autoComplete="off"
            value={input.category}
            name="category"
            onChange={(event) => {
              handleChange(event);
            }}
            type="text"
            placeholder="category"
          />
        </div>
        <div className={style.containerInput}>
        <label>Contact</label>
          <input
            className={style.inputForm}
            autoComplete="off"
            value={input.phone}
            name="phone"
            onChange={(event) => {
              handleChange(event);
            }}
            type="text"
            placeholder="phone"
          />
        </div>
        <div className={style.containerInput}>
          {" "}
          <input
            type="submit"
            value="Create"
            onClick={(event) => {
              handleSubmit(event);
            }}
            className="submit"
          />
        </div>
      </form>
    </div>
  );
};
export default Form;
