import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AdminProtectedRoutes = () => {
    const  user  = localStorage.getItem("role");

    return user === 'admin' ? <Outlet /> : <Navigate to='*' replace/>
}

export default AdminProtectedRoutes