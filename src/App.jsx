import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navBar/Nav"
import Weather from "./pages/weatherApp/Weather"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import AppRoutes from "./routes/AppRoutes"
function App() {
  return (
    <AppRoutes />
  )
}

export default App
