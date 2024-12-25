import React, { createContext, useEffect, useState } from 'react'
import { fetchUsers } from '../api/userApi';
import { addNewProduct, deleteProduct, fetchAllProducts } from '../api/productApi';
import { fetchAllOrders } from '../api/orderApi';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {

  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data: allOrders } = await fetchAllOrders();
        setOrders(allOrders);
      } catch (error) {
        console.error(error)
      }
    }
    fetchOrders();

    const fetchProducts = async () => {
      try {
        const { data: allProducts } = await fetchAllProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error(error)
      }
    }
    fetchProducts();

  }, []);

  const fetchuserNumber = async () => {
    try {
      const { data: users } = await fetchUsers();
      return users.length;

    } catch (error) {
      console.error(error)
    }
  }

  const fetchProductNumber = async () => {
    try {
      const { data: products } = await fetchAllProducts();
      return products.length;

    } catch (error) {
      console.error(error)
    }
  }

  const fetchOrderNumber = async () => {
    try {
      const { data: orders } = await fetchAllOrders();
      return orders.length;

    } catch (error) {
      console.error(error)
    }
  }

  const fetchTotalRevenue = async () => {
    try {
      const { data: orders } = await fetchAllOrders();
      return orders.reduce((total, order) => total + order.total, 0);

    } catch (error) {
      console.error(error)
    }
  }


  const addproducts = async (product) => {
    const newProduct = {
      id: `P${Date.now().toString()}`,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      rating: product.rating,
      description: product.description,
      specification: {
        display: product.display,
        processor: product.processor,
        ram: product.ram,
        camera: product.camera,
        battery: product.battery,
        storage: product.storage,
        os: product.os
      }
    }
    try {
      const { data: response } = await addNewProduct(newProduct);
      setProducts((prev) => [...prev, response])
    } catch (error) {
      console.error(error)
    }
  }

  const deleteProductById = async (id) => {
    const { data: response } = await deleteProduct(id);
    setProducts(response);
  }

  return (
    <AdminContext.Provider value={{ fetchuserNumber, fetchProductNumber, fetchOrderNumber, fetchTotalRevenue, orders, products, addproducts, deleteProductById, setProducts }} >
      {children}
    </AdminContext.Provider>
  )
};
