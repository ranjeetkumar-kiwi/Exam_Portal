import React, { useEffect, useState } from 'react'
import {} from 'react-router-dom'
import { toast } from 'react-toastify'
import Login from '../Pages/Login'

const ProtectedRoutes = (props) => {
  const [isLogedIn, setIsLogedIn] = useState(false)
  let Cmp = props.Cmp
  //   const navigate = useNavigate
  const token = localStorage.getItem('authToken')
  useEffect(() => {
    if (!token) {
      setIsLogedIn(false)
      console.log('false')
      toast.warn('Need to Login!')
    } else {
      setIsLogedIn(true)
      console.log('true')
    }
  }, [isLogedIn, token])

  return <div>{isLogedIn && isLogedIn ? <Cmp /> : <Login />}</div>
}

export default ProtectedRoutes
