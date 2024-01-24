import Navbar from "./components/Navbar/Navbar"

import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./components/Home/Home"
import Showcase from "./components/Showcase/Showcase"
import Design from "./components/Design"

const App = () => {
  const handleScrolling = (targetId) => {
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (

    <div>
      <Navbar/>
      <Showcase/>
      <Design/>
    </div>
  )
}

export default App
