import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


// here the privateRouter componenet will prevent the user from redirect to the homepage without login
// here the outlet will allow to render the content mentioned in the element 
const PrivateRoutes = () => {
  const userInfo = localStorage.getItem('user')

  return userInfo ? <Outlet /> : <Navigate to="/signup" />
}

export default PrivateRoutes;