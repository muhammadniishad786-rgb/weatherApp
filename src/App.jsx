import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navBar/Nav"
import Weather from "./components/weatherApp/Weather"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/about" element={<About /> } />
        <Route path="/contact" element={<Contact /> } />
      </Routes>
    </BrowserRouter>

  )
}

export default App
