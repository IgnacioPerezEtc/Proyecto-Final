import {
  CREATE_HOTEL,
  GET_ALL_HOTELS,
  GET_HOTEL_BY_ID,
  GET_HOTEL_BY_NAME,
} from "./actions";

const initialState = {
  hotels: [],
  hotelDetail: {},
  error: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_HOTELS: {
      return {
        ...state,
        hotels: action.payload,
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
    case CREATE_HOTEL:
      return { ...state };

    default:
      return { ...state };
  }
};

export default rootReducer;
