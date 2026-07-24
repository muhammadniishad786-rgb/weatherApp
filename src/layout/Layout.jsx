import React from 'react'
import Navbar from '../components/navBar/Nav'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
     <Navbar />
     <Outlet />
    </>
  )
}

export default Layout


// A Layout component is used to keep the common UI in one place. Instead of repeating components like the Navbar, Footer, or 
// Sidebar on every page, we put them inside a Layout. Then React Router renders different pages inside the Outlet, 
// so only the page content changes while the common layout stays the same