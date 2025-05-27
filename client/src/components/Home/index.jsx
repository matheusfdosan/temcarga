import React, { useEffect, useState } from "react"
import "./styles.css"
import Request from "../Request"
import getRequests from "../../utils/getRequests.js"

import activeRequests from "../../assets/active-requests-icon.svg"
import pendingRequests from "../../assets/pending-requests-icon.svg"
import completedRequests from "../../assets/completed-requests-icon.svg"
import systemMessages from "../../assets/system-messages-icon.svg"

function Home() {
  const [client, setClient] = useState({
    id: null,
    name: "",
  })
  const [firstRequests, setFirstRequests] = useState([])

  useEffect(() => {
    const acess = JSON.parse(localStorage.getItem("login"))
    setClient({ id: acess.auth.id, name: acess.auth.name })

    const fetchRequests = async () => {
      const result = await getRequestsFunc()
      setFirstRequests(result[0])
    }

    fetchRequests()
  })

  const getRequestsFunc = async () => {
    return await getRequests(client.id)
  }

  return (
    <div id="home">
      <h2>Olá, {client.name}!</h2>
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
        id={firstRequests.id}
        status={firstRequests.status}
        local={{
          origin: firstRequests.origin_city,
          destination: firstRequests.destination_city,
        }}
        type={firstRequests.type}
        value={firstRequests.estimated_shipping_cost}
      />
    </div>
  )
}

export default Home
