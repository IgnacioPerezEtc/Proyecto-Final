import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import style from "./FormReview.module.css";
import { useDispatch } from "react-redux";
import { postReview } from "../../redux/actions";

const FormReview = ({hotelId, email, image}) => {
    const dispatch = useDispatch();

     // -------- Estados locales de Category --------------
    const [category, setCategory ] = useState(null);
    const [hover, setHover] = useState(null);

    const fecha = new Date();
    const [input, setInput] = useState({
        menssageComment: "",
        commentDate: `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`,
        ratingComment: "1",
        hidden: false,
        userEmail: email,
        hotelId: hotelId
    });

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    };

    const handleRating = (event) => {
        event.preventDefault();
        setInput({
          ...input,
          ratingComment: event.target.value
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postReview(input));
        alert("Comment")
        setInput({
            menssageComment: "",
            commentDate: `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`,
            ratingComment: "1",
            hidden: false,
            userEmail: email,
            hotelId: hotelId
        })
    };

    return (
        <form className={style.containerForm} onSubmit={(e) => handleSubmit(e)}>
            <div className={style.containerOne}>
                <div>
                    <img className={style.image} src={image} />
                </div>
            <div className={style.containerRating}>
              
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
                          onChange={(e) => handleRating(e)}
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
            </div>

            <div className={style.containerInput}>
                <div>
                    <input 
                        type="text" 
                        name="menssageComment"
                        value={input.menssageComment}
                        onChange={(e) => handleChange(e)}
                        className={style.inputText}
                    />
                </div>
                <div>
                    <input 
                        type="submit"
                        value="Submit"
                        className={style.inputSubmit}
                    />  
                </div>
            </div>

            <div>
                
            </div>
        </form>
    )
}

export default FormReview;