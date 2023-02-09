import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar, faLanguage } from "@fortawesome/free-solid-svg-icons";
import "./HotelCard.css";
import style from "./HotelCard.module.css";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";

export const HotelCard = ({ name, image, category, languages, id, description }) => {
  let categoryStars = [];
  for (let i = 0; i < category; i++)
    categoryStars.push(
      <FontAwesomeIcon className={`${style.stars}`} icon={faStar} />
    );

  let nameHotel = (name) => {
    let nombre = name.split(" ");
    return nombre.map((p) => p[0].toUpperCase() + p.slice(1)).join(" ");
  };

  return (
    <div className="d-flex justify-content-center">
      <Card className={style.Card}>
        <div className={style.favorite}>
          {localStorage.getItem("user") ? <FavoriteIcon id={id} /> : ""}
        </div>

        <NavLink to={`/hotels/${id}`} className="text-decoration-none">
          <Card.Img variant="top" src={image} className={`${style.img}`} />

          <Card.Body className="my-3">
            <div className="d-flex justify-content-between">
              <h3 className={`${style.titleRoom} fw-bold`}>
                {nameHotel(name)}
              </h3>
            </div>
            <div className={style.category}>{categoryStars}</div>

            <div className={`${style.Data} d-flex justify-content-between`}>
              <p className={style.param}>{description}</p>
            </div>
            <div className="my-5">

              <div className={`${style.dFlex} d-flex gap-3`}>
                {languages.map((language, key) => {
                  return (
                    <p className={style.language} key={key}>
                      <FontAwesomeIcon
                        className=" text-danger me-1"
                        icon={faLanguage}
                      />
                      {language}
                    </p>
                  );
                })}
              </div>
            </div>
          </Card.Body>
        </NavLink>
      </Card>
    </div>
  );
};
export default HotelCard;
