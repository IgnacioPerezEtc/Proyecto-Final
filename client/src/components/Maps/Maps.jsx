import React from "react";
import { MapContainer, Marker, TileLayer,Popup } from "react-leaflet";
import style from "./Maps.module.css";
import 'leaflet/dist/leaflet.css';
const Maps = () => {
  return (
    <MapContainer className={style.map} center={[51.505, -0.09]} zoom={13}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
  <Marker position={[51.505, -0.09]}>
    <Popup>51.505, -0.09</Popup>
  </Marker>
  </MapContainer>
  );
};
export default Maps;
