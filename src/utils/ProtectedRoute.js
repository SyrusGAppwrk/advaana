import React from 'react'
import { Navigate, Outlet } from "react-router-dom"
import Header from '../Home/Header';

const ProtectedRoute = ({ children }) => {
    let userData = localStorage.getItem("user")
    return (
        <>
            <Header />
            {userData ? <Outlet /> : <Navigate to='/login' />}

        </>
    )

};

export default ProtectedRoute;