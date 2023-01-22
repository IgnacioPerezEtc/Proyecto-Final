import { NavLink } from "react-router-dom";
export const HotelCard = ({ name, image, rating, languages, id}) => {
  return (
    <>
      <NavLink  to={`/home/${id}`}>
        <h3 >
          {name}
        </h3>
        <p>{rating}</p>
        <p>{languages}</p>
        <img src={image} alt="ImageCard" />
      </NavLink>
    </>
  );
};
export default HotelCard;
