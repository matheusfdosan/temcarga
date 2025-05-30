import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

import { NavigationProvider } from "./contexts/NavigationContext"

import ChooseRoot from "./templates/ChooseRoot"
import Login from "./templates/Login"
import SignUp from "./templates/SignUp"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavigationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ChooseRoot />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
        </Routes>
      </Router>
    </NavigationProvider>
  </StrictMode>
)
