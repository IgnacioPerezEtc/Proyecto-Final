import {
  CREATE_HOTEL,
  GET_ALL_HOTELS,
  GET_HOTEL_BY_ID,
  GET_HOTEL_BY_NAME,
  FILTER_BY_LANGUAGE,
  FILTER_BY_STARS
} from "./actions";

const initialState = {
  hotels: [],
  allHotels: [],
  hotelDetail: {},
  error: false,
};

const rootReducer = (state = initialState, action) => {
  const allHotels = state.allHotels

  switch (action.type) {
    case GET_ALL_HOTELS: {
      return {
        ...state,
        hotels: action.payload,
        allHotels: action.payload
      };
    }
    case GET_HOTEL_BY_ID: {
      return {
        ...state,
        hotelDetail: action.payload,
      };
    }
    case GET_HOTEL_BY_NAME: {
      return {
        ...state,
        hotels: action.payload,
      };
    }

    case FILTER_BY_LANGUAGE: {
      const languageFiltered = action.payload === "All" ? allHotels : allHotels.filter(h => h.languages.find(languages => languages === action.payload));

      return {
        ...state,
        hotels: languageFiltered
      }
    }

    case FILTER_BY_STARS: {
      const starsFiltered = action.payload === "All" ? allHotels : allHotels.filter(h => h.category == action.payload);

      return {
        ...state,
        hotels: starsFiltered
      }
    }

    case CREATE_HOTEL:
      return { ...state };

    default:
      return { ...state };
  }
};

export default rootReducer;
