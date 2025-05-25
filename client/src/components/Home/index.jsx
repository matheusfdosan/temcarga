import React, { useEffect, useState } from "react"
import "./styles.css"
import Request from "../Request"

import activeRequests from "../../assets/active-requests-icon.svg"
import pendingRequests from "../../assets/pending-requests-icon.svg"
import completedRequests from "../../assets/completed-requests-icon.svg"
import systemMessages from "../../assets/system-messages-icon.svg"

function Home() {
  const [name, setName] = useState("")

  useEffect(() => {
    const acess = JSON.parse(localStorage.getItem("login"))
    setName(acess.auth.name)
  })

  return (
    <div id="home">
      <h2>Olá, {name}!</h2>
      <p>Bem-vindo(a) de volta.</p>

      <div id="home-cards-container">
        <div className="card" id="active-requests">
          <div className="main-info">
            <h3>Solicitações Ativas</h3>
            <span>{0}</span>
          </div>
          <img src={activeRequests} alt="active-requests" />
        </div>
        <div className="card" id="pending-requests">
          <div className="main-info">
            <h3>Solicitações Pendentes</h3>
            <span>{0}</span>
          </div>
          <img src={pendingRequests} alt="" />
        </div>
        <div className="card" id="completed-requests">
          <div className="main-info">
            <h3>Solicitações Finalizadas</h3>
            <span>{0}</span>
          </div>
          <img src={completedRequests} alt="completed-requests" />
        </div>
        <div className="card" id="system-messages">
          <div className="main-info">
            <h3>Mensagens do Sistema</h3>
            <span>{0}</span>
          </div>
          <img src={systemMessages} alt="system-messages" />
        </div>
      </div>

      <h3>Última Solicitação</h3>
      
      <Request
        status={"in-progress"}
        local={{ origin: "São Paulo, SP", destination: "Rio de Janeiro, RJ" }}
        type={"eletrônicos"}
        value={2500}
        driver={{
          name: "Daniel Rodrigues",
          img: "https://media.istockphoto.com/id/1396633199/pt/foto/happy-truck-driver-looking-through-side-window-while-driving-his-truck.jpg?s=612x612&w=0&k=20&c=pIka2KPhH-UWkTrA0H6_qFZnJs-uRCIkFdCIJd-Exec=",
          tracker: { lat: -23.664803341334487, long: -46.64695904003448 },
        }}
      />
    </div>
  )
}

export default Home
