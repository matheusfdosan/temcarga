import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

import Landing from "./templates/Landing"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  </StrictMode>
)
