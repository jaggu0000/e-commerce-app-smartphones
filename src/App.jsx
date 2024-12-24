import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContexts';

import Login from './auth/pages/Login'
import Signup from './auth/pages/Signup';
import Home from './user/pages/Home';
import ProductDetails from './user/pages/ProductDetails';

import UserProtectedRoutes from './user/routes/UserProtectedRoutes';
import { CartProvider } from './contexts/CartContext';
import UserRoutes from './user/routes/UserRoutes';

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

          <Route element={<UserProtectedRoutes />} >
            {UserRoutes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Route>

        </Routes>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
