import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createHotel } from "../../redux/actions";
import { descriptionValidator, imageValidator, nameValidator, phoneValidator } from "./validator";

const FormHotels = () => {

    const { register, formState:{ errors }, handleSubmit } = useForm();
    const languages = ["spanish", "english", "french", "russian", "german"];
    const dispatch = useDispatch()

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
            <h1>Formulario de Hoteles</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name: </label>
                    <input 
                        type="text"
                        {
                            ...register("name", {
                                required: true,
                                validate: nameValidator,
                                onChange: (e) => {handleChange(e)}
                            })
                        }
                    />
                    {
                        errors.name?.type === "required" && <span>Name is required.</span> ||
                        errors.name?.type === "validate" && <span>Ingrese nombre con 3 o mas letras</span>
                    }
                </div>
                <div>
                    <label>Rooms</label>
                    <input 
                        type="number"
                        {
                            ...register("rooms", {
                                onChange: (e) => {handleChange(e)}
                            })
                        }
                    />
                </div>
                <div>
                    <label>Location</label>
                    <input 
                        type="text"
                        {
                            ...register("location", {
                                onChange: (e) => {handleChange(e)}
                            })
                        }
                    />
                </div>
                <div>
                    <label>Description</label>
                    <input 
                        type="text"
                        {
                            ...register("description", {
                                validate: descriptionValidator,
                                onChange: (e) => {handleChange(e)}
                            })
                        }
                    />
                    {
                        errors.description?.type === "validate" && <span>Ingrese descripcion entre 5 o mas caracteres</span>
                    }
                </div>
                <div>
                    <label>Parking</label>
                    <input 
                        type="checkbox"
                        {
                            ...register("parking")
                        }
                        onClick= {(e) => {handleCheckbox(e)}}
                    />
                </div>
                <div>
                    <label>Image</label>
                    <input 
                        type="text"
                        {
                            ...register("pictureHome", {
                                validate: imageValidator,
                                onChange: (e) => {handleChange(e)}
                            })
                        }
                    />
                    {
                        errors.pictureHome?.type === "validate" && <span>"Enter a URL image .png, .jpg, .jpeg, .gif"</span>
                    }
                </div>
                <div>
                    <label>Rating</label>
                    <input 
                        type="text"
                        {
                            ...register("rating", {
                                min: 0,
                                max: 5,
                                onChange: (e) => {handleChange(e)}
                            })
                        }
                    />
                    {
                        errors.rating?.type === "min" && <span>Ingrese rating mayor o igual a 0</span> ||
                        errors.rating?.type === "max" && <span>Ingrese rating menor o igual a 5</span>
                    }
                </div>
                <div>
                    <label>Languages</label>
                    <select {...register("languages", { onChange: (e) => {handleSelect(e)} })}>
                    {
                        languages.map((language, index) => {
                            return <option key={index}>{language}</option>;
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
                    <label>Category</label>
                    <input 
                        type="text"
                        {
                            ...register("category", {
                                min: 0,
                                max: 5,
                                onChange: (e) => {handleChange(e)}
                            })
                        }
                    />
                    {
                        errors.category?.type === "min" && <span>Ingrese categoria mayor o igual a 0</span> ||
                        errors.category?.type === "max" && <span>Ingrese categoria menor o igual a 5</span>
                    }
                </div>
                <div>
                    <label>Contact</label>
                    <input 
                        type="text"
                        {
                            ...register("phone", {
                                validate: phoneValidator,
                                onChange: (e) => {handleChange(e)}
                            })
                        }
                    />
                    {
                        errors.phone?.type === "validate" && <span>Ingrese un numero de telefoo valido</span>
                    }
                </div>
                <div>
                    <input type="submit" value="Send"/>
                </div>
            </form>
        </div>
    )

}

export default FormHotels