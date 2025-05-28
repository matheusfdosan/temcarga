import React, { useEffect, useState } from "react"
import "./styles.css"
import Request from "../Request"
import getRequests from "../../utils/getRequests.js"

function YourRequests() {
  const [requests, setRequests] = useState([])
  const [filteredRequests, setFilteredRequests] = useState([])
  const [filter, setFilter] = useState({
    status: "Todos",
    city: "",
  })

  const handleChange = ({ target }) => {
    const { name, value } = target
    setFilter((prev) => ({ ...prev, [name]: value }))
  }

  const handleFilterButton = () => {
    if (filter.status === "Todos" && filter.city === "") {
      setFilteredRequests(requests)
      return
    }

    const filteredRequests = requests.filter((reqs) => {
      if (reqs.status === "Todos") {
        return (
          reqs.origin_city === filter.city ||
          reqs.destination_city === filter.city
        )
      }
      return (
        reqs.status === filter.status ||
        reqs.origin_city === filter.city ||
        reqs.destination_city === filter.city
      )
    })

    setFilteredRequests(filteredRequests)
  }

  const handleCleanFilter = () => {
    setFilter((prev) => ({
      ...prev,
      city: "",
    }))
    setFilteredRequests(requests)
  }

  useEffect(() => {
    const fetchRequests = async () => {
      const result = await getRequests(
        JSON.parse(localStorage.getItem("login")).auth.id
      )

      setRequests(result)
      setFilteredRequests(result)
    }

    fetchRequests()
  }, [])

  return (
    <div id="your-requests">
      <h2>Suas Solicitações</h2>

      <div id="filter">
        <div id="filter-inputs">
          <label htmlFor="status">
            <h3>Status</h3>
            <select name="status" id="status" onChange={handleChange}>
              <option value="Todos">Todos</option>
              <option value="in-progress">Em Andamento</option>
              <option value="pending">Pendente</option>
              <option value="completed">Concluída</option>
              <option value="canceled">Cancelada</option>
            </select>
          </label>
          <label htmlFor="city">
            <h3>Cidade/UF</h3>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Ex: São Paulo, SP"
              onChange={handleChange}
              value={filter.city}
            />
          </label>
        </div>

        <div id="filter-buttons">
          <button onClick={handleCleanFilter}>Limpar</button>
          <button onClick={handleFilterButton}>Aplicar Filtros</button>
        </div>
      </div>

      <div id="horizontal-line"></div>

      <div id="requests-container">
        {filteredRequests.length !== 0 ? (
          filteredRequests.map((request, index) => (
            <Request
              key={index}
              id={request.id}
              status={request.status}
              local={{
                origin: request.origin_city,
                destination: request.destination_city,
              }}
              type={request.type}
              value={request.estimated_shipping_cost}
            />
          ))
        ) : (
          <p id="no-requests">Você não fez nenhuma solicitação!</p>
        )}
      </div>
    </div>
  )
}

export default YourRequests
