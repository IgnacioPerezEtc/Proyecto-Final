import axios from "axios";

export const getUrlPayment = async (products) => {
    return await axios.post("/payment", products).then(res => res.data);
}