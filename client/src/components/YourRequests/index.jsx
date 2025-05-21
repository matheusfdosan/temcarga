import React from "react"
import "./styles.css"
import Request from "../Request"

function YourRequests() {
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
        <Request
          status={"pending"}
          local={{ origin: "São Paulo, SP", destination: "Rio de Janeiro, RJ" }}
          type={"eletrônicos"}
          value={2500}
          driver={{
            name: "Daniel Rodrigues",
            img: "https://media.istockphoto.com/id/1396633199/pt/foto/happy-truck-driver-looking-through-side-window-while-driving-his-truck.jpg?s=612x612&w=0&k=20&c=pIka2KPhH-UWkTrA0H6_qFZnJs-uRCIkFdCIJd-Exec=",
            tracker: { lat: -23.664803341334487, long: -46.64695904003448 },
          }}
        />
        <Request
          status={"completed"}
          local={{ origin: "São Paulo, SP", destination: "Rio de Janeiro, RJ" }}
          type={"eletrônicos"}
          value={2500}
          driver={{
            name: "Daniel Rodrigues",
            img: "https://media.istockphoto.com/id/1396633199/pt/foto/happy-truck-driver-looking-through-side-window-while-driving-his-truck.jpg?s=612x612&w=0&k=20&c=pIka2KPhH-UWkTrA0H6_qFZnJs-uRCIkFdCIJd-Exec=",
            tracker: { lat: -23.664803341334487, long: -46.64695904003448 },
          }}
        />
        <Request
          status={"canceled"}
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
    </div>
  )
}

export default YourRequests
