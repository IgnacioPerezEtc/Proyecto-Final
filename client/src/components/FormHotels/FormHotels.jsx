import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createHotel } from "../../redux/actions";
import {
  descriptionValidator,
  imageValidator,
  nameValidator,
  phoneValidator,
} from "./validator";
import style from "./FormHotels.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const FormHotels = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const languages = ["spanish", "english", "french", "russian", "german"];
  const dispatch = useDispatch();

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

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
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

  const onSubmit = (event) => {
    console.log(event);
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
      rating: "",
      languages: [],
      category: "",
      phone: "",
    });
  };

  return (
    <div>
      <Header />

      <div className={style.containerForm}>
        <h1 className={style.titleForm}>Create a Hotel</h1>
        <form className={style.flexContainer} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.containerInput}>
            <div className={style.flexInputs}>
              <div>
                <label>Name </label>
                <input
                  type="text"
                  {...register("name", {
                    required: true,
                    validate: nameValidator,
                    onChange: (e) => {
                      handleChange(e);
                    },
                  })}
                />
                {(errors.name?.type === "required" && (
                  <span className={style.messageError}>Name is required.</span>
                )) ||
                  (errors.name?.type === "validate" && (
                    <span className={style.messageError}>
                      Ingrese nombre con 3 o mas letras
                    </span>
                  ))}
              </div>
              <div>
                <label>Location</label>
                <input
                  type="text"
                  {...register("location", {
                    onChange: (e) => {
                      handleChange(e);
                    },
                  })}
                />
              </div>
            </div>
          </div>
          <div className={style.containerInput}>
            <div className={style.flexInputs}>
              <div>
                <label>Description</label>
                <input
                  type="text"
                  {...register("description", {
                    validate: descriptionValidator,
                    onChange: (e) => {
                      handleChange(e);
                    },
                  })}
                />
                {errors.description?.type === "validate" && (
                  <span className={style.messageError}>
                    Ingrese descripcion entre 5 o mas caracteres
                  </span>
                )}
              </div>
              <div>
                <label>Rooms</label>
                <input
                  min="0"
                  type="number"
                  {...register("rooms", {
                    onChange: (e) => {
                      handleChange(e);
                    },
                  })}
                />
              </div>
            </div>
          </div>

          <div className={style.containerInput}>
            <div className={style.flexInputs}>
              <div>
                <label>Image</label>
                <input
                  type="text"
                  {...register("pictureHome", {
                    validate: imageValidator,
                    onChange: (e) => {
                      handleChange(e);
                    },
                  })}
                />
                {errors.pictureHome?.type === "validate" && (
                  <span className={style.messageError}>
                    Enter a URL image .png, .jpg, .jpeg, .gif
                  </span>
                )}
              </div>
              <div>
                <label>Images Extras</label>
                <input
                  type="text"
                  {...register("pictureHome", {
                    validate: imageValidator,
                    onChange: (e) => {
                      handleChange(e);
                    },
                  })}
                />
                {errors.pictureHome?.type === "validate" && (
                  <span className={style.messageError}>
                    Enter a URL image .png, .jpg, .jpeg, .gif
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className={style.containerInput}>
            <div className={style.flexInputs}>
              <div>
                <label>Category</label>
                <input
                  type="text"
                  {...register("category", {
                    min: 0,
                    max: 5,
                    onChange: (e) => {
                      handleChange(e);
                    },
                  })}
                />
                {(errors.category?.type === "min" && (
                  <span>Ingrese categoria mayor o igual a 0</span>
                )) ||
                  (errors.category?.type === "max" && (
                    <span>Ingrese categoria menor o igual a 5</span>
                  ))}
              </div>
              <div>
                <label>Rating</label>
                <input
                  type="text"
                  {...register("rating", {
                    min: 0,
                    max: 5,
                    onChange: (e) => {
                      handleChange(e);
                    },
                  })}
                />
                {(errors.rating?.type === "min" && (
                  <span className={style.messageError}>
                    Ingrese rating mayor o igual a 0
                  </span>
                )) ||
                  (errors.rating?.type === "max" && (
                    <span className={style.messageError}>
                      Ingrese rating menor o igual a 5
                    </span>
                  ))}
              </div>
            </div>
          </div>
          <div className={style.containerInput}>
            <div className={style.flexInputs}>
              <div>
                <label>Contact</label>
                <input
                  type="text"
                  {...register("phone", {
                    validate: phoneValidator,
                    onChange: (e) => {
                      handleChange(e);
                    },
                  })}
                />
                {errors.phone?.type === "validate" && (
                  <span className={style.messageError}>
                    Ingrese un numero de teléfono valido
                  </span>
                )}
              </div>
              <div className={style.containerSelect}>
                <label>Languages</label>
                <select
                  {...register("languages", {
                    onChange: (e) => {
                      handleSelect(e);
                    },
                  })}
                >
                  {languages.map((language, index) => {
                    return <option key={index}>{language}</option>;
                  })}
                </select>
                <div className={style.containerInput}>
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
              </div>
            </div>
          </div>

          <div className={style.containerCheckbox}>
            <label>Parking</label>
            <input
            className={style.checkBox}
              type="checkbox"
              {...register("parking")}
              onClick={(e) => {
                handleCheckbox(e);
              }}
            />
          </div>
          <div className={style.containerSend}>
            <button className={style.buttonCreate} type="submit">Create</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default FormHotels;
