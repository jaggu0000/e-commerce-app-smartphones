import axios from 'axios'

const PRODUCT_URL = "http://localhost:5000/products";

export const fetchAllProducts = async () => {
    return axios.get(PRODUCT_URL);
};

export const fetchProductById = async (id) => {
    return axios.get(`${PRODUCT_URL}/${id}`);
};

export const addNewProduct = (newProduct) => {
    return axios.post(PRODUCT_URL, newProduct);
}

export const deleteProduct = async (id) => {
    await axios.delete(`${PRODUCT_URL}/${id}`);
    return await fetchAllProducts();
}

export const editProduct = async (id, data) => {
    await axios.put(`${PRODUCT_URL}/${id}`, data);
    return await fetchAllProducts();
}