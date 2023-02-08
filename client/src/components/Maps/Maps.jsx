import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import style from "./Maps.module.css";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllHotels } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

const Maps = ({ positionDetail }) => {
  const MarkerIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHotels());
  }, [dispatch]);
  const [mapCenter, setMapCenter] = useState(
    positionDetail ? positionDetail : [6.2503414521512335, -75.58782388923332]
  );
  const hotels = useSelector((state) => state.hotels);
  if (hotels?.length) {
    return (
      <MapContainer className={style.map} center={mapCenter} zoom={13}>
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
            <Marker key={array} position={array} icon={MarkerIcon}>
              <Popup key={array} position={array}>
                <NavLink className={style.navlink} to={`../hotels/${hotel.id}`}>
                  <h3 className={style.title}>
                    {hotel.name[0].toUpperCase() + hotel.name.slice(1)}
                  </h3>
                  {
                    console.log(hotel.pictureHome)
                  }
                  <img
                    className={style.pictureHome}
                    src={hotel?.pictureHome}
                    alt=""
                  />
                </NavLink>
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
