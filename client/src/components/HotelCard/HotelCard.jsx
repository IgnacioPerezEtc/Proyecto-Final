import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons'


export const HotelCard = ({ name, image, category, languages, id }) => {
  
  let categoryStars = [];
  for (let i = 0; i < category; i++)
  categoryStars.push(<FontAwesomeIcon className="fs-3 text-warning me-2" icon={faStar} />)

  let nameHotel = (name) => {
    let nombre = name.split(" ");
    return nombre.map(p => p[0].toUpperCase() + p.slice(1)).join(" ")
  };


  return (
    <NavLink to={`/hotels/${id}`}>
      <Card style={{ width: '330px', height: '450px' }}>
        <Card.Img variant="top" src={image} className="h-50" />
        
        <Card.Body className="my-3">
          
          <p className="h3 fw-bold text-dark ">{nameHotel(name)}</p>

          <div>
            { categoryStars }
          </div>

          <div className="my-5">
            <p className="fw-bold">Languages:</p>

            <div className="d-flex gap-3">
              {
                languages.map((language, key) => {
                  return (
                    <p className="" key={key}>
                      <FontAwesomeIcon className="shadow text-danger me-1" icon={faCheck} />
                      {language}
                    </p>
                  )
                })
              }
            </div>

          </div>

        </Card.Body>
      </Card>
    </NavLink>

    // <>
    //   <NavLink  to={`/hotels/${id}`}>
    //     <h3 >
    //       {name}
    //     </h3>
    //     <p>{rating}</p>
    //     <p>{languages}</p>
    //     <img src={image} alt="ImageCard" />
    //   </NavLink>
    // </>
  );
};
export default HotelCard;
