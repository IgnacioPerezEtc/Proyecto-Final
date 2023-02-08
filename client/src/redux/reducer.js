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
  GET_ALL_DATA_RESERVATIONS,
  GET_RESERVATION_PER_MONTH,
  GET_RESERVATION_PER_COUNTRY,
  GET_ALL_USERS,
  PUT_HOTEL,
  CLEAR_HOTEL_DETAIL,
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
  allDataReservation: [],
  reservationPerMonth:[],
  reservationPerCountry:[],
  users: [],
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
      }
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

      return {
        ...state,
        hotels: languageFiltered,
      };
    }

    case FILTER_BY_STARS: {
      const starsFiltered =
        action.payload === "All"
          ? allHotels
          : actualHotels.filter((h) => h.category == action.payload);

      return {
        ...state,
        hotels: starsFiltered,
      };
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

    case GET_ALL_DATA_RESERVATIONS:
      return {
        ...state,
        allDataReservation: action.payload
      }
    
    case GET_RESERVATION_PER_MONTH:
      return {
        ...state,
        reservationPerMonth: action.payload
      };

    case GET_RESERVATION_PER_COUNTRY:
      return {
        ...state,
        reservationPerCountry: action.payload
      }

    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
