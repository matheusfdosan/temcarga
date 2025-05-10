import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

import Landing from "./templates/Landing"
import Login from "./templates/Login"
import SignUp from "./templates/SignUp"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </Router>
  </StrictMode>
)
