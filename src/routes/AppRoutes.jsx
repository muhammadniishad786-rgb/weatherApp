import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Weather from '../pages/weatherApp/Weather'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Weather />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default AppRoutes
