import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContexts';

import Login from './auth/pages/Login'
import Signup from './auth/pages/Signup';
import Home from './user/pages/Home';
import ProductDetails from './user/pages/ProductDetails';
import PageNotFound from './components/PageNotFound';

import { CartProvider } from './contexts/CartContext';
import UserProtectedRoutes from './user/routes/UserProtectedRoutes';
import UserRoutes from './user/routes/UserRoutes';
import AdminProtectedRoutes from './admin/routes/AdminProtectedRoutes';
import AdminRoutes from './admin/routes/AdminRoutes';
import { AdminProvider } from './contexts/AdminContexts';


const App = () => {

  return (
    <AuthProvider>
      <CartProvider>
        <AdminProvider>
          <Routes>
            {/* Public routes */}
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<Home />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='*' element={<PageNotFound />} />

            {/* User routes */}
            <Route element={<UserProtectedRoutes />} >
              {UserRoutes.map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
            </Route>

            {/* Admin routes */}
            <Route element={<AdminProtectedRoutes />} >
              {AdminRoutes.map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
            </Route>

          </Routes>
        </AdminProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
