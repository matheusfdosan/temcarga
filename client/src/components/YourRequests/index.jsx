import React, { useEffect, useState } from "react"
import "./styles.css"
import Request from "../Request"
import getRequests from "../../utils/getRequests.js"

function YourRequests() {
  const [requests, setRequests] = useState([])

  const getRequestsFunc = async () => {
    return await getRequests(JSON.parse(localStorage.getItem("login")).auth.id)
  }

  useEffect(() => {
    const fetchRequests = async () => {
      const result = await getRequestsFunc()
      setRequests(result)
    }
  
    fetchRequests()
  }, [])

  return (
    <div id="your-requests">
      <h2>Suas Solicitações</h2>

      <div id="filter">
        <div id="filter-inputs">
          <label htmlFor="input-status">
            <h3>Status</h3>
            <select name="input-status" id="input-status">
              <option value="Todos">Todos</option>
              <option value="Em Andamento">Em Andamento</option>
              <option value="Pendente">Pendente</option>
              <option value="Conclída">Concluída</option>
              <option value="Cancelada">Cancelada</option>
            </select>
          </label>
          <label htmlFor="input-date">
            <h3>Data</h3>
            <input type="date" name="input-date" id="input-date" />
          </label>
          <label htmlFor="input-local">
            <h3>Cidade/UF</h3>
            <input
              type="text"
              name="input-local"
              id="input-local"
              placeholder="Ex: São Paulo, SP"
            />
          </label>
        </div>

        <div id="filter-buttons">
          <button>Limpar</button>
          <button>Aplicar Filtros</button>
        </div>
      </div>

      <div id="horizontal-line"></div>

      <div id="requests-container">
        {requests?.map((request) => (
          <Request
            id={request.id}
            status={request.status}
            local={{
              origin: request.origin_city,
              destination: request.destination_city,
            }}
            type={request.type}
            value={request.estimated_shipping_cost}
          />
        ))}
      </div>
    </div>
  )
}

export default YourRequests
