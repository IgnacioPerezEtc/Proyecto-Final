import React from "react";
import { useEffect } from "react";
import { getAllHotels } from "../../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import { HotelCard } from "../HotelCard/HotelCard.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";


const Hotels = () => {
  // const dispatch = useDispatch();
  // const allHotels = useSelector((state) => state.hotels);

  // useEffect(() => {
  //   dispatch(getAllHotels());
  // }, [dispatch]);
  
  const allHotels = [
    {
      id: 1,
      name: "HOTEL_1",
      pictureHome: "https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg",
      rating: 2,
      languages: ["spanish", "french"]
    },
    {
      id: 2,
      name: "HOTEL_2",
      pictureHome: "https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg",
      rating: 5,
      languages: ["spanish"]
    },
    {
      id: 3,
      name: "HOTEL_3",
      pictureHome: "https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg",
      rating: 4,
      languages: ["french"]
    },
    {
      id: 4,
      name: "HOTEL_4",
      pictureHome: "https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg",
      rating: 3,
      languages: ["spanish"]
    },
    {
      id: 5,
      name: "HOTEL_5",
      pictureHome: "https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg",
      rating: 5,
      languages: ["spanish", "french"]
    },
    {
      id: 6,
      name: "HOTEL_6",
      pictureHome: "https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg",
      rating: 3,
      languages: ["english"]
    },
    {
      id: 7,
      name: "HOTEL_7",
      pictureHome: "https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg",
      rating: 5,
      languages: ["english", "spanish", "french"]
    },
    {
      id: 8,
      name: "HOTEL_8",
      pictureHome: "https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg",
      rating: 3,
      languages: ["spanish", "french"]
    },
    {
      id: 9,
      name: "HOTEL_9",
      pictureHome: "https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg",
      rating: 4,
      languages: ["spanish", "french"]
    }
  ]


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
                rating={hotel.rating}
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
