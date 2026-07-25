import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;

                          // ProtectedRoute //
    // ProtectedRoute protects pages that should only be accessed by logged-in users.

    //ProtectedRoute = Login ചെയ്യാത്തവരെ protected page-ലേക്ക് കടക്കാൻ അനുവദിക്കാത്ത component.

    // Layout → Common UI (Navbar)
    // Outlet → Shows the child page
    // ProtectedRoute → Checks if the user is allowed to see the page

                               // <Navigate to="/login" replace /> //

    // Navigate automatically sends the user to another page.
    // Navigate എന്നത് user-നെ ഒരു page-ൽ നിന്ന് മറ്റൊരു page-ലേക്ക് redirect ചെയ്യാൻ ഉപയോഗിക്കുന്ന component ആണ്.

                                   // replace  //

    // replace prevents the user from going back to the previous page using the browser's Back button.
    // replace എന്നത് browser history-യിലെ ഇപ്പോഴുള്ള page-നെ replace ചെയ്യുന്നു. 
    // അതിനാൽ Back button അമർത്തിയാൽ പഴയ page-ലേക്ക് പോകാൻ കഴിയില്ല.