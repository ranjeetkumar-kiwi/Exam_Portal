// import React, { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import Login from '../Pages/Login'

const ProtectedRoutes = () => {
  const token = localStorage.getItem('authToken')

  return <div>{token && token ? <Outlet /> : <Navigate to="/login" replace />}</div>
}

export default ProtectedRoutes
