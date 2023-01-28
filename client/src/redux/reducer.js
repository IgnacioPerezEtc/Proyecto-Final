import {
  CREATE_HOTEL,
  GET_ALL_HOTELS,
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
} from "./actions";

const initialState = {
  hotels: [],
  allHotels: [],
  hotelDetail: {},
  rooms: [],
  roomDetail: {},
  reservation: {},
  error: false,
};

const rootReducer = (state = initialState, action) => {
  const allHotels = state.allHotels;

  switch (action.type) {
    case GET_ALL_HOTELS: {
      return {
        ...state,
        hotels: action.payload,
        allHotels: action.payload,
      };
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
          : allHotels.filter((h) =>
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
          : allHotels.filter((h) => h.category == action.payload);

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

    default:
      return { ...state };
  }
};

export default rootReducer;
