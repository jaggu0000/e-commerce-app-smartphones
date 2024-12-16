import React from 'react'
import Login from './auth/pages/Login'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './auth/pages/Signup';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
  )
}

export default App
