import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const UserProtectedRoutes = () => {
    const  user  = localStorage.getItem("user");

    if (!user) alert("Please login to continue")

    return user ? <Outlet /> : <Navigate to="/login" replace/>
}

export default UserProtectedRoutes
