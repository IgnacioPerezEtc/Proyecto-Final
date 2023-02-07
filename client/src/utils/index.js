import axios from "axios";

export const getUrlPayment = async (products) => {
    return await axios.post("/payment", products).then(res => res.data);
}

// data = {email, favoriteHotels}
export const setFavoriteHotels = async (data) => {
    return await axios.put("/favorites", data);
}