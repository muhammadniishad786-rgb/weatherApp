import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Weather from '../pages/weatherApp/Weather'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import Layout from '../layout/Layout'
import AuthLayout from '../layout/AuthLayout'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import ProtectedRoute from './ProtectedRoute'

function AppRoutes() {
  return (
    <Routes>
        {/* layout with navbar */}
        <Route element={<ProtectedRoute />} >
        <Route path='/' element={<Layout />} >
         <Route index element={<Weather />} />
         <Route path='about' element={<About />} />
         <Route path='contact' element={<Contact />} />
        </Route>
        </Route>

        {/* layout without nav */}
        <Route element={<AuthLayout />}>
         <Route path='login' element={<Login />} />
         <Route path='register' element={<Register />} />
        </Route>

    </Routes>
  )
}

export default AppRoutes


// <AuthLayout /> itself doesn't represent a URL. It only groups routes that should share the same layout.

// "AuthLayout is used only to share a common layout between authentication pages. It doesn't represent a URL itself, 
// so it doesn't need a path. The child routes (login and register) define their own URLs. If we wanted URLs like /auth/login, 
// then we could give the parent a path of /auth