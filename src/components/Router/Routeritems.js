import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutUs from '../Pages/AboutUs'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import PageNotFound from '../Pages/PageNotFound'
import SignUp from '../Pages/SignUp'
import Test from '../Pages/Test'

const Routeritems = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/about_us" element={<AboutUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  )
}

export default Routeritems
