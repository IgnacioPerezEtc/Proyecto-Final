import React from "react";
import { useEffect } from "react";
import { getAllHotels } from "../../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import { HotelCard } from "../HotelCard/HotelCard.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Error from "../Error/Error.jsx";
import style from "./Hotels.module.css";
import "./Hotels.css";
import { NavLink } from "react-router-dom";

const Hotels = () => {
  const dispatch = useDispatch();
  const allHotels = useSelector((state) => state.hotels);
  const error = useSelector((state) => state.error);
  useEffect(() => {
    dispatch(getAllHotels());
  }, [dispatch]);
  return (
    <div>
      <Header />
      {error ? (
        <Error />
      ) : (
        <div className={style.containerHotels}>
          {allHotels.length ? (
            <div className="container-fluid d-flex justify-content-around flex-wrap gap-5">
              {allHotels.map((hotel) => {
                if (hotel.hidden === false) {
                  return (
                    <HotelCard
                      key={hotel.id}
                      id={hotel.id}
                      name={hotel.name}
                      image={hotel.pictureHome}
                      category={hotel.category}
                      languages={hotel.languages}
                      description={hotel.description}
                    />
                  );
                }
              })}
            </div>
          ) : (
            <div className={style.containerLoader}>
              <img src="https://cdn.dribbble.com/users/118337/screenshots/3831581/building_loader.gif" />
            </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
};
export default Hotels;
