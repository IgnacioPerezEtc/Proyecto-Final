import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getHotelById } from "../../redux/actions";
const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const hotelDetail = useSelector((state) => state.hotelDetail);
  useEffect(() => {
    dispatch(getHotelById(id));
  }, []);
  return (
    <div>
      <p>{hotelDetail.name}</p>
      <img src={hotelDetail.pictureHome} alt="" />
      <p>{hotelDetail.rooms}</p>
      <p>{hotelDetail.location}</p>
      <p>{hotelDetail.description}</p>
      <p>{hotelDetail.parking}</p>
      <p>{hotelDetail.rating}</p>
      
        {hotelDetail.languages?.map((language)=>{
            return(<p key={language}>{language}</p>)
        })}
      
      <p>{hotelDetail.phone}</p>
      <p>{hotelDetail.category}</p>
    </div>
  );
};
export default Detail;
