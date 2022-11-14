import React from 'react'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const NavHeader = () => {
  const token = localStorage.getItem('authToken')

  return <div>{token && token ? <PrivateRoutes /> : <PublicRoutes />}</div>
}

export default NavHeader
