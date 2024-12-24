import axios from "axios";

const ORDER_URL = 'http://localhost:5000/orders';

export const fetchOrderById = (id) => {
    return axios.get(`${ORDER_URL}?userId=${id}`);
}

export const fetchAllOrders = () => {
    return axios.get(ORDER_URL);
}

export const addNewOrder = (newOrder) => {
    const response = axios.post(ORDER_URL, newOrder);
    return response.data;
}