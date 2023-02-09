import {
  CREATE_HOTEL,
  GET_ALL_HOTELS,
  GET_FAVORITE_HOTELS,
  GET_HOTEL_BY_ID,
  GET_HOTEL_BY_NAME,
  FILTER_BY_LANGUAGE,
  FILTER_BY_STARS,
  ERROR,
  GET_ROOMS,
  GET_ROOM_BY_ID,
  DATA_RESERVATION,
  CLEAN_RESERVATION,
  CLEAN_ROOM_DETAIL,
  GET_ALL_RESERVATIONS,
  GET_ALL_USERS,
  PUT_HOTEL,
  CLEAR_HOTEL_DETAIL,
  GET_USER_BY_ID,
  PUT_ROOM,
  POST_REVIEW,
} from "./actions";

const initialState = {
  hotels: [],
  allHotels: [],
  favoriteHotels: [],
  hotelDetail: {},
  rooms: [],
  roomDetail: {},
  reservation: {},
  allReservation: [],
  users: [],
  userDetail: {},
  error: false,
};

const rootReducer = (state = initialState, action) => {
  const allHotels = state.allHotels;
  const actualHotels = state.hotels;

  switch (action.type) {
    case GET_ALL_HOTELS: {
      return {
        ...state,
        hotels: action.payload,
        allHotels: action.payload,
      };
    }
    case GET_FAVORITE_HOTELS:
      return {
        ...state,
        favoriteHotels: action.payload,
      };
    case ERROR: {
      return {
        ...state,
        error: action.payload,
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
    case PUT_HOTEL: {
      return {
        ...state,
      };
    }
    case CLEAR_HOTEL_DETAIL: {
      return {
        ...state,
        hotelDetail: action.payload,
      };
    }
    case PUT_ROOM: {
      return {
        ...state,
      };
    }
    case GET_ROOM_BY_ID: {
      return {
        ...state,
        roomDetail: action.payload,
      };
    }
    case CLEAN_ROOM_DETAIL: {
      return {
        ...state,
        roomDetail: action.payload,
      };
    }
    case DATA_RESERVATION: {
      return {
        ...state,
        reservation: action.payload,
      };
    }
    case CLEAN_RESERVATION: {
      return {
        ...state,
        reservation: action.payload,
      };
    }

    case FILTER_BY_LANGUAGE: {
      const languageFiltered =
        action.payload === "All"
          ? allHotels
          : actualHotels.filter((h) =>
              h.languages.find((languages) => languages === action.payload)
            );
      if (languageFiltered.length)
        return {
          ...state,
          hotels: languageFiltered,
        };
      else {
        return {
          ...state,
          error: "No hotels find with that language",
        };
      }
    }

    case FILTER_BY_STARS: {
      const starsFiltered =
        action.payload === "All"
          ? allHotels
          : actualHotels.filter((h) => h.category == action.payload);
      if (starsFiltered.length) {
        return {
          ...state,
          hotels: starsFiltered,
        };
      } else {
        return {
          ...state,
          error: "No hotels find with that number stars",
        };
      }
    }

    case CREATE_HOTEL:
      return { ...state };

    case GET_ROOMS:
      return {
        ...state,
        rooms: action.payload,
      };

    case GET_ALL_RESERVATIONS:
      return {
        ...state,
        allReservation: action.payload,
      };

    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case GET_USER_BY_ID: {
      return {
        ...state,
        userDetail: action.payload,
      };
    }

    case POST_REVIEW: {
      return{
        ...state
      }
    }

    default:
      return { ...state };
  }
};

export default rootReducer;
