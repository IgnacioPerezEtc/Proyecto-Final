import style from './FavoriteIcon.module.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { setFavoriteHotels } from '../../utils';

const FavoriteIcon = ({id}) => {
  const [ active, setActive ] = useState(
    JSON.parse( localStorage.getItem('favorites') ).some(fav => fav === id)
  );

  const handleFavorite = () => {

    const favorites = JSON.parse( localStorage.getItem('favorites') )
    const user = (JSON.parse(localStorage.getItem("user")));
   
    if( active ) {  
      const favs = favorites.filter(fav => fav !== id);
      localStorage.setItem('favorites', JSON.stringify( favs ) )
      setFavoriteHotels({email: user[0].email, favoriteHotels: favs })
    }
    else {
      setFavoriteHotels({email: user[0].email, favoriteHotels: [...favorites, id] })
      localStorage.setItem('favorites', JSON.stringify([...favorites, id]) )
    }
    setActive(active => !active);
    
    if(location.pathname === '/favorites'){
      window.location.href = "/favorites";
    }
  }
  return (
    <FontAwesomeIcon
      onClick={handleFavorite}
      className={active ? `${style.active} ` : `${style.icon}`}
      icon={faHeart}
    />
  )
}

export default FavoriteIcon;