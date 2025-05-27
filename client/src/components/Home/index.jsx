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
  const [lastRequests, setLastRequests] = useState(null)

  const getRequestsFunc = async (id) => {
    return await getRequests(id)
  }

  useEffect(() => {
    const acess = JSON.parse(localStorage.getItem("login"))
    setClient({
      id: acess?.auth?.id || null,
      name: acess?.auth?.name || "",
    })
  }, [])

  useEffect(() => {
    const fetchRequests = async () => {
      if (!client.id) return
      const result = await getRequestsFunc(client.id)
      setLastRequests(result)
    }

    fetchRequests()
  }, [client.id])

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

      {lastRequests ? (
        <Request
          id={lastRequests.id}
          status={lastRequests.status}
          local={{
            origin: lastRequests.origin_city,
            destination: lastRequests.destination_city,
          }}
          type={lastRequests.type}
          value={lastRequests.estimated_shipping_cost}
        />
      ) : <p>Nada aqui</p>}
    </div>
  )
}

export default Home
