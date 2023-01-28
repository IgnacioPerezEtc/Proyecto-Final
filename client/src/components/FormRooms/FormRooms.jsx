import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { imageValidator } from "../FormHotels/validator";
import { createRoom } from "../../redux/actions";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const FormRooms = () => {

  const { register, formState: {errors}, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    numRoom: "",
    pictureHome: "",
    pictureDetail: [],
    numPeople: "",
    maxAdult: "",
    maxChild: "",
    specialties: [],
    availableDate: "",
    value: ""
  });

  const specialties = [
    "Restaurant",
    "Pool",
    "Spa",
    "Free Wifi",
    "Bar",
    "Conference room",
    "Game room",
  ];

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    if (!input.specialties.includes(e.target.value)) {
      setInput({
        ...input,
        specialties: [...input.specialties, e.target.value],
      });
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    let filterOfSpecialties = input.specialties.filter(
      (specialties) => specialties !== e.target.value
    );
    setInput({
      ...input,
      specialties: filterOfSpecialties,
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    dispatch(createRoom(input));
    alert("The Room was created successfully");
    setInput({
      numRoom: "",
      pictureHome: "",
      pictureDetail: [],
      numPeople: "",
      maxAdult: "",
      maxChild: "",
      specialties: [],
      availableDate: "",
      value: ""
    })
  };

  return (
    <div>
      <Header />
      <h1>Formulario de Rooms</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Number of Rooms </label>
          <input 
            type="number"
            {
              ...register("numRoom", {
                required: true,
                min: 1,
                max: 120,
                onChange: (e) => handleChange(e)
              })
            }
          />
          {
            errors.numRoom?.type === "required" && <span>Number of Rooms is required </span> || errors.numRoom?.type === "max" && <span>Ingrese un numero de habitaciones menor a 121</span> || errors.numRoom?.type === "min" && <span>Ingrese un numero de habitaciones mayor a 0</span>
          }
        </div>
        <div>
          <label>Principal picture Room </label>
          <input 
            type="text" 
            {
              ...register("pictureHome", {
                required: true,
                validate: imageValidator,
                onChange: (e) => handleChange(e)
              })
            }  
          />
          {
            errors.pictureHome?.type === "required" && <span>Principal picture is required</span> || errors.pictureHome?.type === "validate" && <span>Enter a URL image .png, .jpg, .jpeg, .gif</span>
          }
        </div>
        {/* <div>
          <label>Some extra pictures </label>
          <input 
            type="text" 
            {
              ...register("pictureDetail", {
                validate: imageValidator
              })
            }
          />
          {
            errors.pictureDetail?.type === "validate" && <span>Enter a URL image .png, .jpg, .jpeg, .gif</span>
          }
        </div> */}
        <div>
          <label>Number of Peoples </label>
          <input 
            type="number"
            {
              ...register("numPeople", {
                required: true,
                min: 1,
                max: 10,
                onChange: (e) => handleChange(e)
              })
            }
          />
          {
            errors.numPeople?.type === "required" && <span>Number of peoples is required</span> || errors.numPeople?.type === "min" && <span>Ingrese un numero de personas mayor a 0</span> || errors.numPeople?.type === "max" && <span>Ingrese un numero de personas menor a 11</span>
          }
        </div>
        <div>
          <label>Max Adults </label>
          <input 
            type="number"
            {
              ...register("maxAdult", {
                onChange: (e) => handleChange(e)
              })
            }
          />
        </div>
        <div>
          <label>Max Child </label>
          <input 
            type="number"
            {
              ...register("maxChild", {
                onChange: (e) => handleChange(e)
              })
            }
          />
        </div>
        <div>
          <div>
            <label>Specialties </label>
            <select
              {
                ...register("specialties", {
                  onChange: (e) => handleSelect(e)
                })
              }
            >
              <option>...</option>
              {
                specialties.map((specialties, index) => (
                  <option key={index}>{specialties}</option>
                ))
              }
            </select>
          </div>
          <div>
            {
              input.specialties?.map((specialties) => {
                return (
                  <div key={specialties}>
                    <p key={specialties}>{specialties}</p>
                    <button 
                      value={specialties}
                      onClick= {(e) => handleDelete(e)}
                    >
                      X
                    </button>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div>
          <label>Available Date </label>
          <input 
            type="date" 
            {
              ...register("availableDate", {
                required: true,
                onChange: (e) => handleChange(e)
              })
            }
          />
          {
            errors.availableDate?.type === "required" && <span>Available Date is required</span>
          }
        </div>
        <div>
          <label>Value </label>
          <input 
            type="number" 
            {
              ...register("value", {
                required: true,
                min: 0,
                onChange: (e) => handleChange(e)
              })
            }
          />
          {
            errors.value?.type === "required" && <span>Value is required</span> || errors.value?.type === "min" && <span>Ingrese un valor mayor a 0</span>
          }
        </div>
        <div>
          <input type="submit" value="Send"/>
        </div>
      </form>
      <Footer />
    </div>
  )
};

export default FormRooms