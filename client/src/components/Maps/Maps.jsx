import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import style from "./Maps.module.css";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllHotels } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Maps = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHotels());
  }, [dispatch]);
  const hotels = useSelector((state) => state.hotels);
  if (hotels.length) {
    return (
      <MapContainer
        className={style.map}
        center={[3.4368376956417364, -76.52370312288105]}
        zoom={13}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {hotels.map((hotel) => {
          let array = [];
          hotel.position.map((hotelPosition) => {
            array.push(parseFloat(hotelPosition));
          });
          return (
            <Marker key={array} position={array}>
              <Popup key={array} position={array}>
                <h3 className={style.title}>{hotel.name[0].toUpperCase() + hotel.name.slice(1)}</h3>
                <img
                  className={style.pictureHome}
                  src={hotel.pictureHome}
                  alt=""
                />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    );
  } else {
    return (
      <div>
        <p>loading</p>
      </div>
    );
  }
};
export default Maps;
