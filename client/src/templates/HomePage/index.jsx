import React from "react";
import "./styles.css";
import { useNavigation } from "../../contexts/NavigationContext";

import Header from "../../components/Header";
import LateralBar from "../../components/LateralBar";

import Home from "../../components/Home";
import YourRequests from "../../components/YourRequests";
import NewRequest from "../../components/NewRequest";
import TaxDocuments from "../../components/FaxDocumentos";

function HomePage() {
  const { active } = useNavigation();

  return (
    <>
      <Header />
      <div id="lateral-bar-and-main-content">
        <LateralBar />
        {active == "home" && <Home />}
        {active === "your-requests" && <YourRequests />}
        {active === "new-request" && <NewRequest />}
        {active === "documents" && <TaxDocuments />}
        {active === "support" && "oi"}
        {active === "settings" && "oi"}
        {active === "about" && "oi"}
        {active === "how-works" && "oi"}
      </div>
    </>
  );
}

export default HomePage;
