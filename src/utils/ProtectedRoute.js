import React from 'react'
import { Navigate, useLocation } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    let userData = localStorage.getItem("user")
    let location = useLocation();

    if (!userData) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children

};

export default ProtectedRoute;