import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createRoom } from "../../redux/actions";
import {
  descriptionValidator,
  imageValidator,
  nameValidator,
  phoneValidator,
} from "../FormHotels/validator.js";
import style from "./FormRooms.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const FormRooms = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const specialties = [
    "restaurant",
    "pool",
    "spa",
    "free wifi",
    "bar",
    "conference room",
    "game room",
  ];
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    numRoom: "",
    numPeople: "",
    maxAdult: "",
    maxChild: "",
    specialties: [],
    availableDate: "",
    value: "",
    hotelId: "",
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
    if (!input.specialties.includes(event.target.value)) {
      setInput({
        ...input,
        specialties: [...input.specialties, event.target.value],
      });
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    let filterOfSpecialties = input.specialties.filter(
      (specialties) => specialties !== event.target.value
    );
    setInput({
      ...input,
      specialties: filterOfSpecialties,
    });
  };

  const onSubmit = (event) => {
    dispatch(createRoom(input));
    alert("The Room was created successfully");
    setInput({
      numRoom: "",
      numPeople: "",
      maxAdult: "",
      maxChild: "",
      specialties: [],
      availableDate: "",
      value: "",
      hotelId: "",
    });
  };

  return (
    <div>
      <Header />

      <div className={style.containerForm}>
        <h1 className={style.titleForm}>Create a Room</h1>
        <form className={style.flexContainer} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.containerInput}>
            <div className={style.flexInputs}>
              <div>
                <label>Number of rooms </label>
                <input
                  autoComplete="off"
                  value={input.numRoom}
                  name="numRoom"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  type="number"
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
                <label>Number of People</label>
                <input
                  autoComplete="off"
                  value={input.numPeople}
                  name="numPeople"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  type="number"
                />
              </div>
            </div>
          </div>
          <div className={style.containerInput}>
            <div className={style.flexInputs}>
              <div>
                <label>Max adults</label>
                <input
                  autoComplete="off"
                  value={input.maxAdult}
                  name="maxAdult"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  type="number"
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
                  autoComplete="off"
                  value={input.maxChild}
                  name="maxChild"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  type="number"
                />
              </div>
            </div>
          </div>

          <div className={style.containerInput}>
            <div className={style.flexInputs}>
              <div className={style.containerSelect}>
                <label>Specialties</label>
                <select
                  defaultValue="title"
                  onChange={(e) => handleSelect(e)}
                  disabled={input.specialties.length === 5}
                >
                  <option value="title" disabled name=""></option>
                  {specialties.map((specialties, index) => {
                    return <option key={index}>{specialties}</option>;
                  })}
                </select>
                <div className={style.containerInput}>
                  {input.specialties?.map((specialties) => {
                    return (
                      <div key={specialties}>
                        <p key={specialties}>{specialties}</p>
                        <button
                          value={specialties}
                          onClick={(event) => handleDelete(event)}
                        >
                          x
                        </button>
                      </div>
                    );
                  })}
                </div>

                <div>
                  <label>availableDate</label>
                  <input
                    type="date"
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    name="availableDate"
                    value={input.availableDate}
                  />
                </div>
                <div>
                  <label> Value </label>
                  <input
                    type="number"
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    name="value"
                    value={input.value}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style.containerSend}>
            <button className={style.buttonCreate} type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default FormRooms;
