import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import style from "./RoomCard.module.css";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faArrowRightLong,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const RoomCard = ({
  img,
  title,
  price,
  guest,
  specialties,
  maxAdult,
  maxChild,
  nameHotel,
  numRoom,
  id,
}) => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/home" ? (
        <div className={style.containerRoomCards}>
          <Card className={`${style.Card}  p-2 h-75`}>
            <Card.Img className={`${style.img}`} variant="top" src={img} />
            <Card.Body className="d-flex flex-column gap-3">
              <div className="d-flex justify-content-between">
                <h2 className="fw-bold text-dark">
                  {" "}
                  {nameHotel.charAt(0).toUpperCase() +
                    nameHotel.slice(1) +
                    " - " +
                    numRoom}
                </h2>
                <p className="bg-primary fs-5 rounded p-2 text-white">
                  ${price}
                </p>
              </div>
              <div className={`${style.Data} d-flex justify-content-between`}>
                <p className="text-dark">
                  <FontAwesomeIcon className="text-dark me-2" icon={faBed} />
                  {guest} guest
                </p>
              </div>
              <Card.Text className={`${style.Text} fs-5`}>
                <p>Specialties:</p>
                {specialties?.map((spec, i) => {
                  return (
                    <span key={i}>
                      <p>{spec}</p>
                    </span>
                  );
                })}
              </Card.Text>
              <Card.Text className={`${style.childAdultsContainer} fs-5`}>
                <p className={style.titleContent}>Max Child:</p>{" "}
                <p>{maxChild}</p>
              </Card.Text>
              <Card.Text className={`${style.childAdultsContainer} fs-5`}>
                <p className={style.titleContent}>Max Adults:</p>{" "}
                <p>{maxAdult}</p>
              </Card.Text>

              <Card.Text className="mb-5">
                <Link
                  to={`/rooms/${id}`}
                  className={`text-decoration-none fs-5 text-danger fw-bold`}
                >
                  Booking
                  <FontAwesomeIcon
                    className="text-danger ms-2"
                    icon={faArrowRightLong}
                  />
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <div className={style.containerRoomCards}>
        <Card className={`${style.Card}  p-2 h-75`}>
          <Card.Img className={`${style.img}`} variant="top" src={img} />
          <Card.Body className="d-flex flex-column gap-3">
            <div className="d-flex justify-content-between">
              <p className="bg-primary fs-5 rounded p-2 text-white">
                ${price}
              </p>
            </div>
            <div className={`${style.Data} d-flex justify-content-between`}>
              <p className="text-dark">
                <FontAwesomeIcon className="text-dark me-2" icon={faBed} />
                {guest} guest
              </p>
            </div>
            <Card.Text className={`${style.Text} fs-5`}>
              <p>Specialties:</p>
              {specialties?.map((spec, i) => {
                return (
                  <span key={i}>
                    <p>{spec}</p>
                  </span>
                );
              })}
            </Card.Text>
            <Card.Text className={`${style.childAdultsContainer} fs-5`}>
              <p className={style.titleContent}>Max Child:</p>{" "}
              <p>{maxChild}</p>
            </Card.Text>
            <Card.Text className={`${style.childAdultsContainer} fs-5`}>
              <p className={style.titleContent}>Max Adults:</p>{" "}
              <p>{maxAdult}</p>
            </Card.Text>

            <Card.Text className="mb-5">
              <Link
                to={`/rooms/${id}`}
                className={`text-decoration-none fs-5 text-danger fw-bold`}
              >
                Booking
                <FontAwesomeIcon
                  className="text-danger ms-2"
                  icon={faArrowRightLong}
                />
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      )}
    </div>
  );
};

export default RoomCard;
