import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Weather from '../pages/weatherApp/Weather'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import Layout from '../layout/Layout'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Layout />} >
         <Route index element={<Weather />} />
         <Route path='about' element={<About />} />
         <Route path='contact' element={<Contact />} />
        </Route>

    </Routes>
  )
}

export default AppRoutes
