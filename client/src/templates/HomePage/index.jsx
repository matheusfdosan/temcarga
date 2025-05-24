import React from "react"
import "./styles.css"
import { useNavigation } from "../../contexts/NavigationContext"

import Header from "../../components/Header"
import LateralBar from "../../components/LateralBar"

import Home from "../../components/Home"
import YourRequests from "../../components/YourRequests"
import NewRequest from "../../components/NewRequest"
import TaxDocuments from "../../components/TaxDocumentos"
import About from "../../components/About"
import HowItWorks from "../../components/HowItWorks"
import Support from "../../components/Support"

function HomePage() {
  const { active } = useNavigation()

  return (
    <>
      <Header />
      <div id="lateral-bar-and-main-content">
        <LateralBar />
        {active == "home" && <Home />}
        {active === "your-requests" && <YourRequests />}
        {active === "new-request" && <NewRequest />}
        {active === "documents" && <TaxDocuments />}
        {active === "support" && <Support/>}
        {active === "settings" && "oi"}
        {active === "about" && <About />}
        {active === "how-works" && <HowItWorks />}
      </div>
    </>
  )
}

export default HomePage
