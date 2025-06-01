import React, { useEffect, useState } from "react"
import "./styles.css"

import pendingIcon from "../../assets/StatusIcons/pending-icon.svg"
import inProgressIcon from "../../assets/StatusIcons/in-progress-icon.svg"
import completedIcon from "../../assets/StatusIcons/completed-icon.svg"
import canceledIcon from "../../assets/StatusIcons/canceled-icon.svg"
import acceptedIcon from "../../assets/StatusIcons/accepted-icon.svg"
import negotiatingIcon from "../../assets/StatusIcons/negociating-icon.svg"
import paymentIcon from "../../assets/StatusIcons/paymentIcon-icon.svg"

import arrowRight from "../../assets/arrow-right-icon.svg"
import originIcon from "../../assets/origin-icon.svg"
import destinationIcon from "../../assets/destination-icon.svg"
import boxIcon from "../../assets/box-icon.svg"
import loopIcon from "../../assets/loop-icon.svg"

import getDriver from "../../utils/getDriver.js"
import ModalRequest from "../ModalRequest"
import { useNavigation } from "../../contexts/NavigationContext"

function Request({ id, status, local, type, value, driverId }) {
  const { setActive } = useNavigation()
  const [modal, setModal] = useState(false)
  const [driver, setDriver] = useState({
    name: "",
  })

  const handleSeeDetails = () => {
    setModal(true)
  }

  const handleCloseModal = (closeModal) => {
    setModal(closeModal)
  }

  useEffect(() => {
    const handleGetDriverInfo = async () => {
      try {
        if (driverId) {
          const info = await getDriver(driverId)
          console.log(info)
          setDriver({ name: info.name })
        }
      } catch (err) {
        console.log(err)
      }
    }

    if (status !== "pending" && status !== "negotiating" && driverId) {
      handleGetDriverInfo()
    }
  }, [driverId, status])

  const handleRepeatRequest = () => {
    localStorage.setItem("repeatRequest", JSON.stringify(id))
    setActive("new-request")
  }

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
        ) : status === "accepted" ? (
          <span className="status accepted">
            <img src={acceptedIcon} alt="accepted-icon" /> Aceito
          </span>
        ) : status === "negotiating" ? (
          <span className="status negotiating">
            <img src={negotiatingIcon} alt="negotiating-icon" /> Em Negociação
          </span>
        ) : status === "payment" ? (
          <span className="status payment">
            <img src={paymentIcon} alt="payment-icon" /> Esperando Pagamento
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

        <div id="type-value">
          <div id="type">
            <h3>Tipo da Carga</h3>
            <span>
              <img src={boxIcon} alt="box-icon" /> {type}
            </span>
          </div>

          <div id="value">
            <h3>Valor Estimado</h3>
            <span>
              {parseFloat(value).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                currencyDisplay: "symbol",
              })}
            </span>
          </div>
        </div>

        {status !== "pending" && status !== "negotiating" && driver !== null ? (
          <>
            <div id="line"></div>
            <div id="driver">
              <img
                src={"https://cdn-icons-png.flaticon.com/512/1535/1535791.png"}
                alt={driver.name}
              />
              <div>
                <p>{driver.name || "N/A"}</p>
                <span>Motorista</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div id="line"></div>
            <p>🚛 Na espera de um motorista!</p>
          </>
        )}
      </div>
      <div id="card-footer">
        <button onClick={handleSeeDetails}>Ver Detalhes</button>

        <button onClick={handleRepeatRequest}>
          <img src={loopIcon} alt="loop-icon" />
          Repetir Solicitação
        </button>
      </div>

      {modal && <ModalRequest closeModal={handleCloseModal} id={id} />}
    </div>
  )
}

export default Request
