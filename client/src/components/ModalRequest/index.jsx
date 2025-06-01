import React, { useEffect, useState } from "react"
import { useNavigation } from "../../contexts/NavigationContext"
import "./styles.css"
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet"
import ModalConfirm from "../../components/ModalConfirm"
import L from "leaflet"

import truckIcon from "../../assets/HowItWorksIcons/step2-icon.svg"
import mapIcon from "../../assets/HowItWorksIcons/step5-icon.svg"
import blueBoxIcon from "../../assets/blue-box-icon.svg"
import whitePaymentIcon from "../../assets/StatusIcons/white-paymentIcon-icon.svg"
import crossIcon from "../../assets/cross-icon.svg"
import dateIcon from "../../assets/date-icon.svg"
import editIcon from "../../assets/edit-icon.svg"
import whiteCrossIcon from "../../assets/white-cross-icon.svg"
import downloadIcon from "../../assets/download-icon-two.svg"
import nfeIcon from "../../assets/nfe-icon.svg"
import betterBlueMarker from "../../assets/better-blue-marker.svg"
import starIcon from "../../assets/star-icon.svg"
import insuranceIcon from "../../assets/insurance-icon.svg"
import statusIcon from "../../assets/status-icon.svg"
import whiteEyeIcon from "../../assets/white-eye-icon.svg"
import taxDocsIcon from "../../assets/tax-docs-icon.svg"

import getCoordinates from "../../utils/getCoordinates.js"
import getOneRequest from "../../utils/getOneRequest.js"
import cancelRequest from "../../utils/cancelRequest.js"
import deleteRequestService from "../../utils/deleteRequest.js"
import releasePaymentService from "../../utils/releasePayment.js"

const truckMarkerIcon = L.icon({
  iconUrl: betterBlueMarker,
  iconSize: [26, 26],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
})

function FollowDriver({ position }) {
  const map = useMap()

  useEffect(() => {
    if (position.lat && position.long) {
      map.setView([position.lat, position.long])
    }
  }, [position, map])

  return null
}

function ModalRequest({ closeModal, id }) {
  const { setActive } = useNavigation()
  const [request, setRequest] = useState({})
  const [driverLocation, setDriverLocation] = useState({
    lat: null,
    long: null,
  })
  const [confirmCancel, setConfirmCancel] = useState(false)

  useEffect(() => {
    const abortController = new AbortController()

    const fetchRequest = async () => {
      try {
        const result = await getOneRequest(id, {
          signal: abortController.signal,
        })
        setRequest(result[0] || {})
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching request:", err)
        }
      }
    }

    fetchRequest()

    let interval
    if (request.driver_id) {
      const fetchDriver = async () => {
        try {
          const result = await getCoordinates(request.driver_id, {
            signal: abortController.signal,
          })
          console.log(result)
          setDriverLocation({ lat: result.lat, long: result.lng })
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error("Error fetching driver:", err)
          }
        }
      }

      fetchDriver()
      // interval = setInterval(fetchDriver, 30 * 1000)
      interval = setInterval(fetchDriver, 5 * 1000)
    }

    return () => {
      abortController.abort()
      clearInterval(interval)
    }
  }, [id, request.driver_id])

  const handleEdit = () => {
    localStorage.setItem("editingNow", JSON.stringify(request))
    setActive("new-request")
  }

  const handleClose = () => {
    closeModal(false)
  }

  const downloadXml = (
    xmlString,
    filename = `nota-fiscal-eletrônica-${id}.xml`
  ) => {
    const blob = new Blob([xmlString], {
      type: "application/xml;charset=utf-8",
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const downloadInvoice = ({ target }) => {
    downloadXml(request.invoice_document, request.invoice_document_name)
    target.style.backgroundColor = "var(--green)"
    setTimeout(() => {
      target.style.backgroundColor = "var(--primary-color)"
    }, 3000)
  }

  const handleDeleteRequest = async () => {
    try {
      await deleteRequestService(id)
      closeModal(false)
      setActive("home")
    } catch (err) {
      console.error("Error deleting request:", err)
    }
  }

  const handleCancelRequest = async (id) => {
    try {
      await cancelRequest(id)
      closeModal(false)
      setActive("home")
    } catch (err) {
      console.error("Error canceling request:", err)
    }
  }

  const handlePayment = async (id) => {
    try {
      await releasePaymentService(id)
      closeModal(false)
      setActive("home")
      window.location.reload()
    } catch (err) {
      console.error("Error handle payment request:", err)
    }
  }

  return (
    <div
      id="modal-request"
      onClick={({ target }) => {
        target.id === "modal-request" && handleClose()
      }}
    >
      <div id="modal-request-container">
        <div>
          <h2>
            <img src={truckIcon} alt="Truck icon" />
            Detalhes da Solicitação
          </h2>
          <button id="close-modal" onClick={handleClose}>
            <img src={crossIcon} alt="Close modal icon" />
          </button>
        </div>

        <section id="origin-destination-modal">
          <h3>
            <img src={blueBoxIcon} alt="Location marker icon" />
            Origem e Destino
          </h3>
          <div id="origin-and-destination">
            <div id="modal-origin">
              <p>Origem:</p>
              <ul>
                <li>
                  <span>
                    Cidade/Estado: {request.origin_city || "N/A"} -{" "}
                    {request.origin_state || "N/A"}
                  </span>
                </li>
                <li>
                  CEP: <span>{request.origin_cep || "N/A"}</span>
                </li>
                <li>
                  Endereço:{" "}
                  <span>{request.origin_complete_address || "N/A"}</span>
                </li>
              </ul>
            </div>
            <div id="modal-destination">
              <p>Destino:</p>
              <ul>
                <li>
                  <span>
                    Cidade/Estado: {request.destination_city || "N/A"} -{" "}
                    {request.destination_state || "N/A"}
                  </span>
                </li>
                <li>
                  CEP: <span>{request.destination_cep || "N/A"}</span>
                </li>
                <li>
                  Endereço:{" "}
                  <span>{request.destination_complete_address || "N/A"}</span>
                </li>
              </ul>
            </div>
          </div>
          <p id="distance">
            <strong>Distância: </strong>{" "}
            {request.distance ? parseFloat(request.distance).toFixed(3) : "N/A"}{" "}
            km
          </p>
        </section>

        <section id="cargo-details">
          <h3>
            <img src={blueBoxIcon} alt="Cargo details icon" />
            Detalhes da Carga
          </h3>
          <div>
            <ul>
              <li>
                Tipo de carga: <span>{request.type || "N/A"}</span>
              </li>
              <li>
                Peso:{" "}
                <span>{request.weight ? `${request.weight}kg` : "N/A"}</span>
              </li>
            </ul>
            <ul>
              <li>
                Número de eixos: <span>{request.numaxles || "N/A"}</span>
              </li>
              <li>
                Valor da Mercadoria:{" "}
                <span>
                  {request.goods_value
                    ? parseFloat(request.goods_value).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })
                    : "N/A"}
                </span>
              </li>
            </ul>
          </div>
          <h4>Observações:</h4>
          <p>
            {request.additional_observations ||
              "Nenhuma observação adicionada!"}
          </p>
        </section>

        <section id="special-features">
          <h3>
            <img src={starIcon} alt="Special features icon" />
            Características Especiais
          </h3>
          <ul>
            <li>
              Perecível:{" "}
              <span>{request.perishable ? "Ativado" : "Desativado"}</span>
            </li>
            <li>
              Frágil: <span>{request.fragile ? "Ativado" : "Desativado"}</span>
            </li>
          </ul>
        </section>

        <section id="modal-dates">
          <h3>
            <img src={dateIcon} alt="Calendar icon" />
            Datas
          </h3>
          <div>
            <div>
              <h4>Data de Coleta:</h4>
              <p>
                <span>
                  {request.collect_date
                    ? new Date(request.collect_date).toLocaleDateString("pt-BR")
                    : "N/A"}
                </span>
              </p>
            </div>
            <div>
              <h4>Data de Estimada de Entrega:</h4>
              <p>
                <span>
                  {request.estimated_delivery_date
                    ? new Date(
                        request.estimated_delivery_date
                      ).toLocaleDateString("pt-BR")
                    : "N/A"}
                </span>
              </p>
            </div>
          </div>
        </section>

        <section id="xml-document">
          <h3>
            <img src={taxDocsIcon} alt="Tax documents icon" />
            Documentos (XML{request.insurance_document_name && " e Seguro"})
          </h3>
          <div className="tax-doc">
            <div>
              <img src={nfeIcon} alt="Invoice document icon" />
              <span>{request.invoice_document_name || "N/A"}</span>
            </div>
            <button onClick={downloadInvoice}>
              <img src={downloadIcon} alt="Download invoice icon" />
              Baixar
            </button>
          </div>
          {request.insurance_document_name && (
            <div className="tax-doc">
              <div>
                <img src={insuranceIcon} alt="Insurance document icon" />
                <span>{request.insurance_document_name}</span>
              </div>
              <button
                onClick={() =>
                  window.open(request.insurance_document, "_blank")
                }
              >
                <img src={whiteEyeIcon} alt="View insurance document icon" />
                Veja
              </button>
            </div>
          )}
        </section>

        {(request.status === "in-progress" ||
          request.status === "accepted") && (
          <section id="driver-sec">
            <h3>
              <img src={mapIcon} alt="Driver location icon" />
              Localização do caminhoneiro
            </h3>
            {request.status === "accepted" ? (
              <p>O caminhoneiro está se preparando para o serviço</p>
            ) : request.status === "in-progress" &&
              driverLocation.lat &&
              driverLocation.long ? (
              <MapContainer
                center={[driverLocation.lat, driverLocation.long]}
                zoom={15}
                style={{
                  height: "40rem",
                  width: "80%",
                  margin: "2rem auto",
                  border: ".2rem solid var(--primary-color)",
                }}
              >
                <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
                <FollowDriver position={driverLocation} />
                <Marker
                  position={[driverLocation.lat, driverLocation.long]}
                  icon={truckMarkerIcon}
                />
              </MapContainer>
            ) : (
              <p>Carregando localização do caminhoneiro...</p>
            )}
          </section>
        )}

        <section id="status">
          <h3>
            <img src={statusIcon} alt="Request status icon" />
            Status
          </h3>
          <div>
            <div>
              <h4>Status da Solicitação:</h4>
              <p className={`status ${request.status}`}>
                {request.status === "pending"
                  ? "Pendente"
                  : request.status === "in-progress"
                  ? "Em Andamento"
                  : request.status === "accepted"
                  ? "Aceito"
                  : request.status === "negotiating"
                  ? "Em Negociação"
                  : request.status === "payment"
                  ? "Esperando o Pagamento"
                  : request.status === "completed"
                  ? "Concluído"
                  : request.status === "canceled"
                  ? "Cancelado"
                  : "N/A"}
              </p>
            </div>
            <div>
              <h4>Valor Estimado do Frete:</h4>
              <p>
                {request.estimated_shipping_cost
                  ? parseFloat(request.estimated_shipping_cost).toLocaleString(
                      "pt-BR",
                      {
                        style: "currency",
                        currency: "BRL",
                      }
                    )
                  : "N/A"}
              </p>
            </div>
          </div>
        </section>

        <div id="modal-btns">
          {request.status === "pending" && (
            <button id="edit-btn" onClick={handleEdit}>
              <img src={editIcon} alt="Edit request icon" />
              Editar Solicitação
            </button>
          )}
          {request.status === "payment" && (
            <button id="payment-btn" onClick={() => setConfirmCancel(true)}>
              <img src={whitePaymentIcon} alt="confirm request icon" />
              Liberar Pagamento
            </button>
          )}

          {request.status !== "completed" &&
            request.status !== "canceled" &&
            request.status !== "accepted" &&
            request.status !== "payment" &&
            request.status !== "negotiating" &&
            request.status !== "in-progress" && (
              <button id="cancel-btn" onClick={() => setConfirmCancel(true)}>
                <img src={whiteCrossIcon} alt="Delete request icon" />
                Deletar Solicitação
              </button>
            )}
          {request.status !== "completed" &&
            request.status !== "payment" &&
            request.status !== "canceled" &&
            request.status !== "in-progress" &&
            request.status !== "pending" && (
              <button id="cancel-btn" onClick={() => setConfirmCancel(true)}>
                <img src={whiteCrossIcon} alt="Cancel request icon" />
                Cancelar Solicitação
              </button>
            )}
        </div>
      </div>
      {confirmCancel && (
        <ModalConfirm
          close={(res) => !res && setConfirmCancel(false)}
          continueRequest={(res) =>
            res &&
            (request.status === "pending" || request.status === "negotiating")
              ? handleDeleteRequest()
              : request.status === "payment"
              ? handlePayment(request.id)
              : handleCancelRequest(request.id)
          }
          title={
            request.status === "pending" || request.status === "negotiating"
              ? "Tem certeza que deseja apagar a solicitação?"
              : request.status === "payment"
              ? "Sua carga já chegou?"
              : "Tem certeza que deseja cancelar a solicitação?"
          }
          desc={
            request.status === "pending" || request.status === "negotiating"
              ? "Você está cancelando um frete que já foi aceito por um caminhoneiro"
              : request.status === "payment"
              ? "Confirme o seu pedido e librere o pagamento do caminhoneiro!"
              : "Ao cancelar, será cobrada uma taxa correspondente a 4% do valor."
          }
        />
      )}
    </div>
  )
}

export default ModalRequest
