import React from "react"
import "./styles.css"

import pendingIcon from "../../assets/StatusIcons/pending-icon.svg"
import inProgressIcon from "../../assets/StatusIcons/in-progress-icon.svg"
import completedIcon from "../../assets/StatusIcons/completed-icon.svg"
import canceledIcon from "../../assets/StatusIcons/canceled-icon.svg"

import arrowRight from "../../assets/arrow-right-icon.svg"
import originIcon from "../../assets/origin-icon.svg"
import destinationIcon from "../../assets/destination-icon.svg"
import boxIcon from "../../assets/box-icon.svg"
import loopIcon from "../../assets/loop-icon.svg"

function Request({ status, local, type, value, driver }) {
  return (
    <div className="request-card">
      <div className="container">
        {status === "pending" ? (
          <span className="status pending">
            <img src={pendingIcon} alt="pending-icon" /> Pendente
          </span>
        ) : status === "in-progress" ? (
          <span className="status in-progress">
            <img src={inProgressIcon} alt="in-progress-icon" /> Em andamento
          </span>
        ) : status === "completed" ? (
          <span className="status completed">
            <img src={completedIcon} alt="completed-icon" /> Concluído
          </span>
        ) : status === "canceled" ? (
          <span className="status canceled">
            <img src={canceledIcon} alt="canceled-icon" /> Cancelado
          </span>
        ) : (
          <span className="status canceled">
            <img src={canceledIcon} alt="canceled-icon" /> Erro
          </span>
        )}

        <div id="origin-destination">
          <div>
            <img src={originIcon} alt="origin-icon" />

            <div>
              <h4>{local.origin}</h4>
              <p>Origem</p>
            </div>
          </div>

          <img src={arrowRight} alt="arrow-right-icon" />

          <div>
            <img src={destinationIcon} alt="destation-icon" />

            <div>
              <h4>{local.destination}</h4>
              <p>Origem</p>
            </div>
          </div>
        </div>

        <div id="type">
          <h3>Tipo da Carga</h3>
          <span>
            <img src={boxIcon} alt="box-icon" /> {type}
          </span>
        </div>

        <div id="value">
          <h3>Valor Estimado</h3>
          <span>
            {value.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>

        <div id="line"></div>

        <div id="driver">
          <img src={driver.img} alt={driver.name} />
          <div>
            <p>{driver.name}</p>
            <span>Motorista</span>
          </div>
        </div>
      </div>
      <div id="card-footer">
        <button>Ver Detalhes</button>

        <button>
          <img src={loopIcon} alt="loop-icon" />
          Repetir Solicitação
        </button>
      </div>
    </div>
  )
}

export default Request
