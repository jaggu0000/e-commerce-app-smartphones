import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';

const UserProtectedRoutes = ({ children }) => {
    const  user  = localStorage.getItem("user");

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return children;
}

export default UserProtectedRoutes