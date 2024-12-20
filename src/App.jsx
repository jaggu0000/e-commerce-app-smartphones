import React, { createContext, useState } from 'react'
import Login from './auth/pages/Login'
import { Routes, Route } from 'react-router-dom';

import Signup from './auth/pages/Signup';
import Cart from './user/pages/Cart'
import Orders from './user/pages/Orders';
import Home from './user/pages/Home';
import Footer from './components/Footer';
import ProductDetails from './user/pages/ProductDetails';
import Checkout from './user/pages/Checkout';
import Dashboard from './admin/pages/Dashboard';
import ManageUsers from './admin/pages/ManageUsers';
import ManageProducts from './admin/pages/ManageProducts';
import ViewOrders from './admin/pages/ViewOrders';
import AddProduct from './admin/pages/AddProduct';
import { AuthProvider } from './contexts/AuthContexts';

const App = () => {

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='admin/users' element={<ManageUsers />} />
        <Route path='admin/products' element={<ManageProducts />} />
        <Route path='admin/orders' element={<ViewOrders />} />
        <Route path='/admin/addproduct' element={<AddProduct />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
