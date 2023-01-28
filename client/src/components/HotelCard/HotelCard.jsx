import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons'
import "./HotelCard.css"


export const HotelCard = ({ name, image, category, languages, id }) => {
  
  let categoryStars = [];
  for (let i = 0; i < category; i++)
  categoryStars.push(<FontAwesomeIcon className="fs-3 text-danger me-2" icon={faStar} />)

  let nameHotel = (name) => {
    let nombre = name.split(" ");
    return nombre.map(p => p[0].toUpperCase() + p.slice(1)).join(" ")
  };


  return (
    <a href={`/hotels/${id}`} className="text-decoration-none">
      <Card style={{ width: '330px', height: '450px' }}>
        <Card.Img variant="top" src={image} className="h-50" />
        
        <Card.Body className="my-3">
          
          <p className="h3 fw-bold text-dark ">{nameHotel(name)}</p>

          <div>
            { categoryStars }
          </div>

          <div className="my-5">
            <p className="fw-bold color-blue">Languages:</p>

            <div className="d-flex gap-3">
              {
                languages.map((language, key) => {
                  return (
                    <p className="language" key={key}>
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
    </a>
  );
};
export default HotelCard;
