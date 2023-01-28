import axios from "axios";

export const GET_ALL_HOTELS = "GET_ALL_HOTELS";
export const GET_HOTEL_BY_ID = "GET_HOTEL_BY_ID";
export const GET_HOTEL_BY_NAME = "GET_HOTEL_BY_NAME";
export const CREATE_HOTEL = "CREATE_HOTEL ";
export const ERROR = "ERROR";
export const FILTER_BY_LANGUAGE = "FILTER_BY_LANGUAGE";
export const FILTER_BY_STARS = "FILTER_BY_STARS";
//
// *********************** SECCION HOTELS ************************

export function getAllHotels() {
  return async function (dispatch) {
    try {
      const json = await axios.get("/hotels");
      return dispatch({
        type: GET_ALL_HOTELS,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: "hotels couldn't be loaded",
      });
    }
  };
}

export function setError(payload) {
  return {
    type: ERROR,
    payload,
  };
}
export function getHotelById(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`/hotels/${id}`);
      return dispatch({
        type: GET_HOTEL_BY_ID,
        payload: json.data.pop(),
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: "The hotel with that id hasn't been found",
      });
    }
  };
}

export const getHotelByName = (name) => {
  return async (dispatch) => {
    try {
      const json = await axios.get(`/hotels?name=${name}`);
      return dispatch({
        type: GET_HOTEL_BY_NAME,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: "The hotel with that name hasn't been found",
      });
    }
  };
};

export function createHotel(data) {
  return async function (dispatch) {
    const json = await axios.post("/hotels", data);
    return json;
  };
}

export const filterByLanguage = (payload) => {
  return {
    type: FILTER_BY_LANGUAGE,
    payload,
  };
};

export const filterByStars = (payload) => {
  return {
    type: FILTER_BY_STARS,
    payload,
  };
};

// *********************** SECCION ROOMS ************************
export const GET_ROOMS = "GET_ROOMS";
export const CREATE_ROOM = "CREATE_ROOM";
export const GET_ROOM_BY_ID = "GET_ROOM_BY_ID";
export const DATA_RESERVATION = "DATA_RESERVATION";
export const CLEAN_RESERVATION = "CLEAN_RESERVATION";
export const CLEAN_ROOM_DETAIL = "CLEAN_ROOM_DETAIL"

export const dataReservation = (data) => {
  return (dispatch) => {
    return dispatch({
      type: DATA_RESERVATION,
      payload: data,
    });
  };
};

export const cleanReservation = () => {
  return (dispatch) => {
    return dispatch({
      type: CLEAN_RESERVATION,
      payload: {},
    });
  };
};

export const cleanRoom = () => {
  return (dispatch) => {
    return dispatch({
      type: CLEAN_ROOM_DETAIL,
      payload: {},
    });
  };
};

export function createRoom(data) {
  return async function () {
    const json = await axios.post("/rooms", data);
    return json;
  };
}

export function getRoomById(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`/rooms/${id}`);
      return dispatch({
        type: GET_ROOM_BY_ID,
        payload: json.data.pop(),
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: "The room with that id hasn't been found",
      });
    }
  };
}

export const getRooms = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/rooms");
      return dispatch({
        type: GET_ROOMS,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: "Rooms couldn't be loaded",
      });
    }
  };
};
