import axios from "axios";

export const GET_ALL_HOTELS = "GET_ALL_HOTELS";
export const GET_HOTEL_BY_ID = "GET_HOTEL_BY_ID";
export const GET_HOTEL_BY_NAME = "GET_HOTEL_BY_NAME";
export const CREATE_HOTEL = "CREATE_HOTEL ";
export const ERROR = "ERROR";
export function getAllHotels() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/hotels");
      return dispatch({
        type: GET_ALL_HOTELS,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: "No se han cargado los hotels",
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
      const json = await axios.get(`http://localhost:3001/hotels/${id}`);
      return dispatch({
        type: GET_HOTEL_BY_ID,
        payload: json.data.pop(),
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: "No se ha encontrado el hotel con ese id",
      });
    }
  };
}

export const getHotelByName = (name) => {
  return async (dispatch) => {
    try {
      const json = await axios.get(`http://localhost:3001/hotels?name=${name}`);
      return dispatch({
        type: GET_HOTEL_BY_NAME,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: "No existe el hotel con ese nombre",
      });
    }
  };
};

export function createHotel(data) {
  return async function (dispatch) {
    const json = await axios.post("http://localhost:3001/hotels", data);
    return json;
  };
}
