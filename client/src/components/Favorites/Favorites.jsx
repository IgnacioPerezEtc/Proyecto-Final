import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import HotelCard from "../HotelCard/HotelCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllHotels } from "../../redux/actions";
import NavBarDetails from '../NavBarDetails/NavBarDetails'
import Footer from '../Footer/Footer'
import style from './Favorites.module.css'

const Favorites = () => {
  
  const dispatch = useDispatch();
  const allHotels = useSelector((state) => state.allHotels);
  const favs = JSON.parse( localStorage.getItem('favorites') )

  useEffect(()=> {
    dispatch(getAllHotels());
  }, [dispatch])


  const hotels = allHotels.filter(hotel => favs.includes(hotel.id))

  return (
    <>
      <NavBarDetails />
      <div className={style.titleContainer}>
        <h2 className={style.blue}>Favorite</h2>
        <h2 className={style.red}>Hotels</h2>
      </div>

      {
        !allHotels.length || !favs.length? 
          (
            <div className={style.flexContainer}>
              <img
                className={style.img}
                src="https://img.freepik.com/vector-gratis/turistas-felices-eligiendo-hotel-habitacion-reserva-linea-ilustracion-plana_74855-10811.jpg?w=1380&t=st=1675036223~exp=1675036823~hmac=90aac36387831821c356e5386307f0099f52e90d983c23e48db5ab13ac855a78"
                alt=""
              />
            </div>
          )
          :
          (
            <div>
              

              <div>
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
                    hotels.map( hotel => {
                      return (
                        <SwiperSlide key={hotel.id}>
                          <HotelCard
                            id={hotel.id}
                            name={hotel.name}
                            image={hotel.pictureHome}
                            category={hotel.category}
                            languages={hotel.languages}
                            description= {hotel.description}
                          />
                        </SwiperSlide>
                      )
                    })
                  }

                </Swiper>
              </div>
            </div>
          )
          
      }
      
      



      <Footer />
    </>
  )
}

export default Favorites;

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllHotels, getFavoriteHotels } from "../../redux/actions";
// import HotelCard from "../HotelCard/HotelCard";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Keyboard, Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/free-mode";
// import style from "./Favorites.module.css";
// import NavBarDetails from "../NavBarDetails/NavBarDetails";
// import Footer from "../Footer/Footer";

// const Favorites = () => {
//   const error = useSelector((state) => state.error);
//   const dispatch = useDispatch();
//   const user = JSON.parse(localStorage.getItem("user"));
//   const allHotels = useSelector((state) => state.allHotels);
//   let favs = useSelector((state) => state.favoriteHotels);
//   const hotels = allHotels.filter((hotel) => favs?.includes(hotel.id));

//   useEffect(() => {
//     dispatch(getAllHotels());
//     dispatch(getFavoriteHotels(user[0].email));
//     console.log(favs.length);
//   }, [dispatch, favs.length]);

//   if (hotels.length === 0||error||!user[0]) {
//     return (
//       <div>
//         <div>
//           <NavBarDetails />
//         </div>
//         <div className={style.flexContainer}>
//           <h2 className={style.blue}>Favorite</h2>
//           <h2 className={style.red}>Hotels</h2>
//         </div>

//         <div className={style.flexContainer}>
//           <img
//             className={style.img}
//             src="https://img.freepik.com/vector-gratis/turistas-felices-eligiendo-hotel-habitacion-reserva-linea-ilustracion-plana_74855-10811.jpg?w=1380&t=st=1675036223~exp=1675036823~hmac=90aac36387831821c356e5386307f0099f52e90d983c23e48db5ab13ac855a78"
//             alt=""
//           />
//         </div>
//         <Footer />
//       </div>
//     );
//   }
//   return (
//     <div>
//       <div>
//          <NavBarDetails />
//       </div>
      
//       {hotels.length ? (
//         <div>
//           <div className={style.titleContainer}>
//             <h2 className={style.blue}>Favorite</h2>
//             <h2 className={style.red}>Hotels</h2>
//           </div>

//           <div className="m-5">
//             <Swiper
//               freeMode={true}
//               grabCursor={true}
//               modules={[Autoplay, Keyboard]}
//               autoplay={{
//                 delay: 3000,
//               }}
//               keyboard={{
//                 enabled: true,
//               }}
//               className="mySwiper m-4 justify-content-center w-100"
//               breakpoints={{
//                 0: {
//                   slidesPerView: 1,
//                   spaceBetween: 30,
//                   centeredSlides: true,
//                 },
//                 480: {
//                   slidesPerView: 1,
//                   spaceBetween: 15,
//                   centeredSlides: true,
//                 },
//                 768: {
//                   slidesPerView: 2,
//                   spaceBetween: 10,
//                 },
//                 1024: {
//                   slidesPerView: 3,
//                   spaceBetween: 30,
//                 },
//                 1440: {
//                   slidesPerView: 4,
//                   spaceBetween: 20,
//                 },
//               }}
//             >
//               {hotels.map((hotel) => {
//                 return (
//                   <SwiperSlide key={hotel.id}>
//                     <HotelCard
//                       id={hotel.id}
//                       name={hotel.name}
//                       image={hotel.pictureHome}
//                       category={hotel.category}
//                       languages={hotel.languages}
//                       description= {hotel.description}
//                     />
//                   </SwiperSlide>
//                 );
//               })}
//             </Swiper>
//           </div>
//           <Footer />
//         </div>
//       ) : (
//         <h1 className={style.loading}>Loading...</h1>
//       )}
//     </div>
//   );
// };

// export default Favorites;
