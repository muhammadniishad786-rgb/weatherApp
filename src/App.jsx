import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navBar/Nav"
import Weather from "./components/weatherApp/Weather"
function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Weather />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
