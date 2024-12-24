import React, { createContext, useEffect, useState } from 'react'
import { fetchUsers } from '../api/userApi';
import { fetchAllProducts } from '../api/productApi';
import { fetchAllOrders } from '../api/orderApi';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {

    const fetchuserNumber = async () => {
      try {
        const { data: users } = await fetchUsers();
        setTotalUsers(users.length);

      } catch (error) {
        console.error(error)
      }
    }
    fetchuserNumber();

    const fetchProductNumber = async () => {
      try {
        const { data: products } = await fetchAllProducts();
        setTotalProducts(products.length);

      } catch (error) {
        console.error(error)
      }
    }
    fetchProductNumber();

    const fetchOrderNumber = async () => {
      try {
        const { data: orders } = await fetchAllOrders();
        setTotalOrders(orders.length);

      } catch (error) {
        console.error(error)
      }
    }
    fetchOrderNumber();

    const fetchTotalRevenue = async () => {
      try {
        const { data: orders } = await fetchAllOrders();
        setTotalRevenue(orders.reduce((total, order) => total + order.total, 0));

      } catch (error) {
        console.error(error)
      }
    }
    fetchTotalRevenue();

  }, []);

  return (
    <AdminContext.Provider value={{ totalUsers, totalProducts, totalOrders, totalRevenue }} >
      {children}
    </AdminContext.Provider>
  )
};
