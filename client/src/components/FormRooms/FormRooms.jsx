import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { imageValidator } from "../FormHotels/validator";
import { createRoom } from "../../redux/actions";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./FormRooms.module.css"

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
    value: "",
    hotelId: ""
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
    console.log(input);
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
      value: "",
      hotelId: ""
    })
  };

  return (
    <div>
      <Header />

      <div className={style.containerForm}>
        <h1 className={style.titleForm}>Create Room</h1>
        <form className={style.flexContainer} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.containerInput}>
            <div className={style.flexInputs}>
              <div>
                <label>Enter name Room </label>
                <input 
                  type="text"
                  {
                    ...register("numRoom", {
                      required: true,
                      onChange: (e) => handleChange(e)
                    })
                  }
                />
                {
                  errors.numRoom?.type === "required" && <span className={style.messageError}>Name of Rooms is required </span>
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
                  errors.pictureHome?.type === "required" && <span className={style.messageError}>Principal picture is required</span> || errors.pictureHome?.type === "validate" && <span className={style.messageError}>Enter a URL image .png, .jpg, .jpeg, .gif</span>
                }
              </div>
            </div>
          </div>
          <div className={style.containerInput}>
            <div className={style.flexInputs}>
              <div>
                <label>Some extra pictures </label>
                <input 
                  type="text" 
                  {
                    ...register("pictureDetail", {
                      validate: imageValidator,
                      onChange: (e) => handleChange(e)
                    })
                  }
                />
                {
                  errors.pictureDetail?.type === "validate" && <span className={style.messageError}>Enter a URL image .png, .jpg, .jpeg, .gif</span>
                }
              </div>
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
                  errors.numPeople?.type === "required" && <span className={style.messageError}>Number of peoples is required</span> || errors.numPeople?.type === "min" && <span className={style.messageError}>Ingrese un numero de personas mayor a 0</span> || errors.numPeople?.type === "max" && <span className={style.messageError}>Ingrese un numero de personas menor a 11</span>
                }
              </div>
            </div>
          </div>
          <div className={style.containerInput}>
            <div className={style.flexInputs}>
              <div>
                <label>Max Adults </label>
                <input 
                  type="number"
                  {
                    ...register("maxAdult", {
                      required: true,
                      min: 1,
                      max: 10,
                      onChange: (e) => handleChange(e)
                    })
                  }
                />
                {
                  errors.maxAdult?.type === "required" && <span className={style.messageError}>Number of Max Adults is required</span> || errors.maxAdult?.type === "min" && <span className={style.messageError}>Ingrese un numero de personas adultas mayor a 0</span> || errors.maxAdult?.type === "max" && <span className={style.messageError}>Ingrese un numero de personas adultas menor a 11</span>
                }
              </div>
              <div>
                <label>Max Child </label>
                <input 
                  type="number"
                  {
                    ...register("maxChild", {
                      required: true,
                      min: 1,
                      max: 10,
                      onChange: (e) => handleChange(e)
                    })
                  }
                />
                {
                  errors.maxChild?.type === "required" && <span className={style.messageError}>Number of Max Child is required</span> || errors.maxChild?.type === "min" && <span className={style.messageError}>Ingrese un numero de personas menores, mayor a 0</span> || errors.maxChild?.type === "max" && <span className={style.messageError}>Ingrese un numero de personas menores, menor a 11</span>
                }
              </div>
            </div>
          </div>

          <div className={style.containerInput}>
            <div className={style.flexInputs}>
              <div>
                <div className={style.containerSelect}>
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
                <div className={style.containerInput}>
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
                  errors.value?.type === "required" && <span className={style.messageError}>Value is required</span> || errors.value?.type === "min" && <span className={style.messageError}>Ingrese un valor mayor a 0</span>
                }
              </div>
            </div>
          </div>
          <div>
            <label>Hotel ID </label>
            <input 
              type="number" 
              {
                ...register("hotelId", {
                  onChange: (e) => handleChange(e),
                  required: true
                })
              }
            />
            {
              errors.hotelId?.type === "required" && <span>Hotel ID is required</span>
            }
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
  )
};

export default FormRooms