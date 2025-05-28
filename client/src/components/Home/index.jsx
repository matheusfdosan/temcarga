import React, { useEffect, useState } from "react"
import "./styles.css"
import Request from "../Request"
import getRequests from "../../utils/getRequests.js"

import activeRequests from "../../assets/active-requests-icon.svg"
import pendingRequests from "../../assets/pending-requests-icon.svg"
import completedRequests from "../../assets/completed-requests-icon.svg"
import systemMessages from "../../assets/system-messages-icon.svg"

import { useNavigation } from "../../contexts/NavigationContext"

function Home() {
  const { setActive } = useNavigation()

  const [client, setClient] = useState({
    id: null,
    name: "",
  })
  const [requests, setRequests] = useState([])

  useEffect(() => {
    const acess = JSON.parse(localStorage.getItem("login"))

    if (acess?.auth) {
      setClient({
        id: acess.auth.id,
        name: acess.auth.name,
      })
    }
  }, [])

  useEffect(() => {
    const fetchRequests = async () => {
      if (!client.id) return
      const result = await getRequests(client.id)
      setRequests(result || [])
    }

    fetchRequests()
  }, [client.id])

  const lastRequest = requests.length > 0 ? requests[requests.length - 1] : null

  return (
    <div id="home">
      <h2>Olá, {client.name}!</h2>
      <p>Bem-vindo(a) de volta.</p>

      <div id="home-cards-container">
        <div
          className="card"
          id="active-requests"
          onClick={() => setActive("your-requests")}
        >
          <div className="main-info">
            <h3>Solicitações Ativas</h3>
            <span>
              {requests.filter((reqs) => reqs.status === "pending").length}
            </span>
          </div>
          <img src={activeRequests} alt="active-requests" />
        </div>
        <div
          className="card"
          id="pending-requests"
          onClick={() => setActive("your-requests")}
        >
          <div className="main-info">
            <h3>Solicitações em andamento</h3>
            <span>
              {requests.filter((reqs) => reqs.status === "in-progress").length}
            </span>
          </div>
          <img src={pendingRequests} alt="" />
        </div>
        <div
          className="card"
          id="completed-requests"
          onClick={() => setActive("your-requests")}
        >
          <div className="main-info">
            <h3>Solicitações Finalizadas</h3>
            <span>
              {requests.filter((reqs) => reqs.status === "completed").length}
            </span>
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

      {lastRequest ? (
        <Request
          id={lastRequest.id}
          status={lastRequest.status}
          local={{
            origin: lastRequest.origin_city,
            destination: lastRequest.destination_city,
          }}
          type={lastRequest.type}
          value={lastRequest.estimated_shipping_cost}
        />
      ) : (
        <p>Nada aqui! 😒</p>
      )}
    </div>
  )
}

export default Home
