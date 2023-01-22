import React from "react";
import { useEffect } from "react";
import { getAllHotels } from "../../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import { HotelDetail } from "../HotelDetail/HotelDetail.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
const Hotels = () => {
  const dispatch = useDispatch();
  const allHotels = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(getAllHotels());
  }, [dispatch]);

  return (
    <div>
      <Header />
      {allHotels.map((hotel) => {
        return (
          <HotelDetail
            key={hotel.id}
            id={hotel.id}
            name={hotel.name}
            image={hotel.pictureHome}
            rating={hotel.rating}
            languages={hotel.languages.map((language) => {
              return language;
            })}
          />
        );
      })}
      <Footer />
    </div>
  );
};
export default Hotels;
