import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Viewmore from "./components/HomeComponents/Viewmore"
import Foodmenu from "./components/HomeComponents/Foodmenu"
import Shop from "./components/Shop/Shop"
import Gallary from "./components/Gallary/Gallary"
import Contact from "./components/Contact/Contact"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/viewmore" element={<Viewmore/>}></Route>
        <Route path="/foodmenu" element={<Foodmenu/>}></Route>
      </Routes>
    </>
  )
}

export default App
