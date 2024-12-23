import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContexts';

import Login from './auth/pages/Login'
import Signup from './auth/pages/Signup';
import Home from './user/pages/Home';
import ProductDetails from './user/pages/ProductDetails';

import Cart from './user/pages/Cart';
import UserProtectedRoutes from './user/UserProtectedRoutes';
import Checkout from './user/pages/Checkout';
import Orders from './user/pages/Orders';
import { CartProvider } from './contexts/CartContext';

const App = () => {

  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          {/* Public routes */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<ProductDetails />} />

          <Route
            path="/cart"
            element={
              <UserProtectedRoutes>
                <Cart />
              </UserProtectedRoutes>
            }
          />
          <Route
            path="/orders"
            element={
              <UserProtectedRoutes>
                <Orders />
              </UserProtectedRoutes>
            }
          />
          <Route
            path="/checkout"
            element={
              <UserProtectedRoutes>
                <Checkout />
              </UserProtectedRoutes>
            }
          />

        </Routes>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
