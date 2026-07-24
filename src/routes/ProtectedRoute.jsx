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