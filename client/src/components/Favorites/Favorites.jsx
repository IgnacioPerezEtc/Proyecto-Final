import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHotels, getFavoriteHotels } from "../../redux/actions";
import HotelCard from "../HotelCard/HotelCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";


const Favorites = () => {
  
  const dispatch = useDispatch();
  const user = (JSON.parse(localStorage.getItem("user")));
  const allHotels = useSelector(state => state.allHotels);
  let favs = useSelector(state => state.favoriteHotels);
  const hotels = allHotels.filter(hotel => favs.includes(hotel.id))

  useEffect(() => {
    dispatch(getAllHotels())
    dispatch( getFavoriteHotels(user[0].email) )
    console.log(favs.length)
  }, [dispatch, favs.length])


  return (

    <div>
      <div className="w-100 d-flex gap-5 flex-wrap justify-content-center">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[Keyboard]}

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

  )
}

export default Favorites;