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

                                          // Layout  //

// A Layout component is used to keep the common UI in one place. Instead of repeating components like the Navbar, Footer, or 
// Sidebar on every page, we put them inside a Layout. Then React Router renders different pages inside the Outlet, 
// so only the page content changes while the common layout stays the same

                                         // OutLet  //
                                        
    // "Outlet is a React Router component that acts as a placeholder inside a parent route.
    //  When a child route matches the current URL, React Router renders that child component inside the Outlet."

    // "Outlet എന്നത് React Router-ൽ child component render ചെയ്യാൻ ഉപയോഗിക്കുന്ന placeholder ആണ്. 
    // URL-ന് match ചെയ്യുന്ന page Outlet-ന്റെ ഉള്ളിൽ React Router കാണിക്കും."

    // Outlet is a placeholder where React Router renders the matched child route.