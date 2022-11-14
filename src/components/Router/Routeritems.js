import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutUs from '../Pages/AboutUs'
import Home from '../Pages/Home'
import Jobs from '../Pages/Jobs'
import Login from '../../auth/Login'
import PageNotFound from '../Pages/PageNotFound'
import SignUp from '../../auth/SignUp'
import Test from '../Pages/Test'
import TestPage from '../Pages/TestPage'
import ProtectedRoutes from './ProtectedRoutes'

const Routeritems = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/about_us" element={<AboutUs />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="*" element={<PageNotFound />} />
        //ProtectedRoutes
        <Route element={<ProtectedRoutes />}>
          <Route path="/test_page" element={<TestPage />} />
          <Route path="/test" element={<Test />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Routeritems
