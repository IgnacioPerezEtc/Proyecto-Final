import { async } from "@firebase/util";
import emailjs from "@emailjs/browser";
import axios from "axios";

export const GET_ALL_HOTELS = "GET_ALL_HOTELS";
export const GET_FAVORITE_HOTELS = "GET_FAVORITE_HOTELS";
export const GET_HOTEL_BY_ID = "GET_HOTEL_BY_ID";
export const GET_HOTEL_BY_NAME = "GET_HOTEL_BY_NAME";
export const CREATE_HOTEL = "CREATE_HOTEL ";
export const ERROR = "ERROR";
export const FILTER_BY_LANGUAGE = "FILTER_BY_LANGUAGE";
export const FILTER_BY_STARS = "FILTER_BY_STARS";
export const PUT_HOTEL = "PUT_HOTEL";
export const CLEAR_HOTEL_DETAIL = "CLEAR_HOTEL_DETAIL";
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

export function getFavoriteHotels(id) {
  return async function (dispatch) {
    const { data } = await axios.get(`/favorites/${id}`);
    return dispatch({
      type: GET_FAVORITE_HOTELS,
      payload: data,
    });
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

export const putHotel = (id, data) => {
  return async () => {
    const json = await axios.put(`/hotels/edit/${id}`, data);
    return json;
  };
};
export const clearHotelDetail = () => {
  return (dispatch) => {
    return dispatch({
      type: CLEAR_HOTEL_DETAIL,
      payload: {},
    });
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
export const CLEAN_ROOM_DETAIL = "CLEAN_ROOM_DETAIL";

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

// *********************** SECCION USER ************************

export const FIND_OR_CREATE = "FIND_OR_CREATE";
export const LOGOUT = "LOGOUT";
export const GET_USER_BY_ID = "GET_USER_BY_ID";

export const findOrCreate = async (data) => {
  const result = await axios.post("/user", data);
  localStorage.setItem("user", JSON.stringify(result.data));
  window.setTimeout(() => {
    window.location.href = "/home";
  }, 1);
};

export const logOut = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("favorites");
  window.setTimeout(() => {
    window.location.href = "/";
  }, 1);
};

export function getUserById(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`/user/${id}`);
      return dispatch({
        type: GET_USER_BY_ID,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: "The user with that id hasn't been found",
      });
    }
  };
}

// *********************** SEND EMAIL ************************

export const sendEmail = async (data, form) => {
  await createReservation(data);
  emailjs.init("Ag6f36SVwkOrrFd8y");
  const serviceID = "default_service";
  const templateID = "template_1olarl4";

  emailjs.sendForm(serviceID, templateID, form).then(
    () => {
      alert("Sent!");
    },
    (err) => {
      alert(JSON.stringify(err));
    }
  );

  window.setTimeout(() => {
    window.location.href = "/";
  }, 3000);
};

// *********************** RESERVATION ************************

export const GET_ALL_RESERVATIONS = "GET_ALL_RESERVATIONS";
export const CREATE_RESERVATION = "CREATE_RESERVATION";

export const getAllReservations = (email) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/reservation?email=${email}`);
      return dispatch({
        type: GET_ALL_RESERVATIONS,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: "Reservations couldn't be loaded",
      });
    }
  };
};

export async function createReservation(data) {
  const json = await axios.post("/reservation", data);
  return json;
}

// *********************** SECCION ADMIN ************************

export const GET_ALL_USERS = "GET_ALL_USERS";

export function getAllUsers() {
  return async function (dispatch) {
    try {
      const json = await axios.get("/user");
      return dispatch({
        type: GET_ALL_USERS,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: "users couldn't be loaded",
      });
    }
  };
}
