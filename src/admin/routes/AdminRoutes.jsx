import React from 'react'
import Dashboard from '../pages/Dashboard';
import ManageProducts from '../pages/ManageProducts';
import ManageUsers from '../pages/ManageUsers';
import ViewOrders from '../pages/ViewOrders';
import AddProduct from '../pages/AddProduct';

const AdminRoutes = [

    { path: '/dashboard', element: <Dashboard/> },
    { path: '/manageproducts', element: <ManageProducts /> },
    { path: '/manageusers', element: <ManageUsers /> },
    { path: '/vieworders', element: <ViewOrders /> },
    { path: '/addproduct', element: <AddProduct /> }
];

export default AdminRoutes