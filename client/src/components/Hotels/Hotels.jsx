import React from "react";
import { useEffect } from "react";
import { getAllHotels } from "../../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import { HotelCard } from "../HotelCard/HotelCard.jsx";
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

      <div className="container-fluid d-flex justify-content-around flex-wrap gap-5">
        {
          allHotels.map((hotel) => {
            return (
              <HotelCard
                key={hotel.id}
                id={hotel.id}
                name={hotel.name}
                image={hotel.pictureHome}
                category={hotel.category}
                // languages={hotel.languages.map((language) => {
                //   return <p>{language}</p>;
                // })}
                languages={hotel.languages}
              />
            );
          })}
      </div>

      <Footer />
    </div>
  );
};
export default Hotels;
