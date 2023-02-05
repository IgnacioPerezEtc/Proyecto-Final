import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHotels, getFavoriteHotels } from "../../redux/actions";
import HotelCard from "../HotelCard/HotelCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import style from './Favorites.module.css';


const Favorites = () => {

  const dispatch = useDispatch();
  const user = (JSON.parse(localStorage.getItem("user")));
  const allHotels = useSelector(state => state.allHotels);
  let favs = useSelector(state => state.favoriteHotels);
  const hotels = allHotels.filter(hotel => favs.includes(hotel.id))

  useEffect(() => {
    dispatch(getAllHotels())
    dispatch(getFavoriteHotels(user[0].email))
    console.log(favs.length)
  }, [dispatch, favs.length])


  return (
    <div>
      {hotels.length ? (
        <div>
          <div className={style.titleContainer}>
            <h2 className={style.blue}>Favorite</h2>
            <h2 className={style.red}>Hotels</h2>
          </div>

          <div className="m-5">
            <Swiper
              freeMode={true}
              grabCursor={true}
              modules={[Autoplay, Keyboard]}
              autoplay={{
                delay: 3000,
              }}
              keyboard={{
                enabled: true,
              }}
              className="mySwiper m-4 justify-content-center w-100"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                  centeredSlides: true,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              {
                hotels.map((hotel) => {
                  return (
                    <SwiperSlide key={hotel.id}>
                      <HotelCard
                        id={hotel.id}
                        name={hotel.name}
                        image={hotel.pictureHome}
                        category={hotel.category}
                        languages={hotel.languages}
                      />
                    </SwiperSlide>
                  );
                })
              }
            </Swiper>
          </div>
        </div>
      ) : (<h1 className={style.loading}>Loading...</h1>)}

    </div>

  )
}

export default Favorites;