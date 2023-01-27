import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import style from "./FormRoom.module.css"
import Validation from "../../SearchBar/Validation/Validation";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const FormRoom = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const fecha_actual = new Date().toLocaleDateString();
  const reservation = useSelector((state) => state.reservation);
  const [buttonActive, setButtonActive] = useState(false);
  const [input, setInput] = useState({
    check_in: "",
    check_out: "",
    adults: "",
    children: "",
  });

  const [errors, setErrors] = useState({
    check_in: "",
    check_out: "",
    adults: "",
    children: "",
    max_cant: "",
  });

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrors(Validation({ ...input, [e.target.name]: e.target.value }));
  };

  const addToLocalStorage = () => {
    let data = [id, input];
    localStorage.setItem("habitacion", JSON.stringify(data));
  };
  return (
    <div className={style.flexContainer}>
      <div className={style.searchBar}>
        <h2 className={style.title}>Reservation</h2>
        <form onSubmit={addToLocalStorage} className={style.containerSearchbar}>
          {errors.max_cant && <p className={style.error}>{errors.max_cant}</p>}

          <div>
            <div className={style.containerInpErrors}>
              <div className={style.containerInput}>
                <input
                  type="date"
                  placeholder="Check-in"
                  name="check_in"
                  className={style.date}
                  value={reservation.check_in ? reservation.check_in : input.check_in}
                  onChange={handleInputChange}
                />
              </div>
              {errors.check_in && (
                <p className={style.error}>{errors.check_in}</p>
              )}
            </div>
          </div>

          <div>
            <div className={style.containerInpErrors}>
              <div className={style.containerInput}>
                <input
                  type="date"
                  placeholder="Check-out"
                  name="check_out"
                  className={style.date}
                  value={reservation.check_out ? reservation.check_out : input.check_out}
                  onChange={handleInputChange}
                />
              </div>
              {errors.check_out && (
                <p className={style.error}>{errors.check_out}</p>
              )}
            </div>
          </div>

          <div>
            <div className={style.containerInpErrors}>
              <div className={style.containerInput}>
                <input
                  type="number"
                  placeholder="Adults"
                  className={style.pl}
                  value={reservation.adults ? reservation.adults : input.adults}
                  onChange={handleInputChange}
                  name="adults"
                  min="0"
                />
                <span className={style.iconAdults}></span>
              </div>
              {errors.adults && <p className={style.error}>{errors.adults}</p>}
            </div>
          </div>

          <div>
            <div className={style.containerInpErrors}>
              <div className={style.containerInput}>
                <input
                  type="number"
                  placeholder="Children"
                  className={style.pl}
                  value={reservation.children ? reservation.children : input.children}
                  onChange={handleInputChange}
                  name="children"
                  min="0"
                />
                <span className={style.iconChildren}></span>
              </div>
              {errors.children && (
                <p className={style.error}>{errors.children}</p>
              )}
            </div>
          </div>

          <Link to={'/booking'}>
            <button
              type="submit"
              disabled={
                errors.adults ||
                  errors.check_in ||
                  errors.check_out ||
                  errors.children ||
                  errors.max_cant ||
                  input.check_in == "" ||
                  input.check_out == "" ||
                  input.adults == "" ||
                  input.children == ""
                  ? !buttonActive
                  : buttonActive
              }
              className={
                errors.adults ||
                  errors.check_in ||
                  errors.check_out ||
                  errors.children ||
                  errors.max_cant ||
                  input.check_in == "" ||
                  input.check_out == "" ||
                  input.adults == ""
                  ? style.buttonOff
                  : style.buttonOn
              }

              onClick={addToLocalStorage}
            >
              Add to My Reservations
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default FormRoom;
