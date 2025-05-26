import React, { useEffect, useState } from "react"
import "./styles.css"

import blueBoxIcon from "../../assets/blue-box-icon.svg"
import blueMarker from "../../assets/blue-marker.svg"
import dateIcon from "../../assets/date-icon.svg"
import taxDocsIcon from "../../assets/tax-docs-icon.svg"
import statusIcon from "../../assets/status-icon.svg"
import crossIcon from "../../assets/cross-icon.svg"
import starIcon from "../../assets/star-icon.svg"
import truckIcon from "../../assets/HowItWorksIcons/step2-icon.svg"
import nfeIcon from "../../assets/nfe-icon.svg"
import downloadIcon from "../../assets/download-icon-two.svg"

import getOneRequest from "../../utils/getOneRequest.js"

function ModalRequest({ closeModal, id }) {
  const [request, setRequest] = useState([])

  const getRequestsFunc = async () => {
    return await getOneRequest(id)
  }

  useEffect(() => {
    const fetchRequest = async () => {
      const result = await getRequestsFunc()
      setRequest(result[0])
    }

    fetchRequest()
  }, [])

  const handleClose = () => {
    closeModal(false)
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
            <img src={truckIcon} alt="truck icon" />
            Detalhes da Solicitação
          </h2>
          <button id="close-modal" onClick={handleClose}>
            <img src={crossIcon} alt="cross icon" />
          </button>
        </div>

        <section id="origin-destination-modal">
          <h3>
            <img src={blueMarker} alt="marker icon" />
            Origem e Destino
          </h3>

          <div id="origin-and-destination">
            <div id="modal-origin">
              <p>Origem:</p>
              <ul>
                <li>
                  Cidade/Estado:{" "}
                  <span>
                    {request.origin_city} - {request.origin_state}
                  </span>
                </li>
                <li>
                  CEP: <span>{request.origin_cep}</span>
                </li>
                <li>
                  Endereço: <span>{request.origin_complete_address}</span>
                </li>
              </ul>
            </div>
            <div id="modal-destination">
              <p>Destino:</p>
              <ul>
                <li>
                  Cidade/Estado:{" "}
                  <span>
                    {request.destination_city} - {request.destination_state}
                  </span>
                </li>
                <li>
                  CEP: <span>{request.destination_cep}</span>
                </li>
                <li>
                  Endereço: <span>{request.destination_complete_address}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="cargo-details">
          <h3>
            <img src={blueBoxIcon} alt="" />
            Detalhes da Carga
          </h3>

          <div>
            <ul>
              <li>
                Tipo de carga: <span>{request.type}</span>
              </li>
              <li>
                Peso: <span>{request.weight + "kg"}</span>
              </li>
              <li>
                Dimensões:{" "}
                <span>
                  {`${request.length} x ${request.width} x ${request.height}`}{" "}
                  cm
                </span>
              </li>
            </ul>
            <ul>
              <li>
                Número de eixos: <span>{request.numaxles}</span>
              </li>
              <li>
                Valor da Mercadoria:{" "}
                <span>
                  {parseFloat(request.goods_value).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    currencyDisplay: "symbol",
                  })}
                </span>
              </li>
            </ul>
          </div>

          <h4>Observações:</h4>
          <p>{request.additional_observations}</p>
        </section>

        <section id="special-features">
          <h3>
            <img src={starIcon} alt="" />
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
            <li>
              Seguro:{" "}
              <span>
                {request.insurance_included ? "Ativado" : "Desativado"}
              </span>
            </li>
          </ul>
        </section>

        <section id="modal-dates">
          <h3>
            <img src={dateIcon} alt="calendar icon" />
            Datas
          </h3>

          <div>
            <div>
              <h4>Data de Coleta:</h4>
              <p>
                <span>{"15/05/2023"}</span>
              </p>
            </div>
            <div>
              <h4>Data de Estimada de Entrega:</h4>
              <p>
                <span>{"20/05/2023"}</span>
              </p>
            </div>
          </div>
        </section>
        <section id="xml-document">
          <h3>
            <img src={taxDocsIcon} alt="" />
            Documento XML
          </h3>

          <div id="tax-doc">
            <div>
              <img src={nfeIcon} alt="nfe icon" />
              <span>Nota Fiscal Eletrônica</span>
            </div>

            <button>
              <img src={downloadIcon} alt="download icon" />
              Baixar
            </button>
          </div>
        </section>
        <section id="status">
          <h3>
            <img src={statusIcon} alt="status icon" />
            Status
          </h3>

          <div>
            <div>
              <h4>Status da Solicitação:</h4>
              <p className={"status " + request.status}>
                {request.status == "pending"
                  ? "Pendente"
                  : request.status == "in-progrees"
                  ? "Em Andamento"
                  : request.status == "completed"
                  ? "Finalizado"
                  : "Cancelado"}
              </p>
            </div>
            <div>
              <h4>Valor Estimado do Frete:</h4>
              <p>
                {parseFloat(request.estimated_shipping_cost).toLocaleString(
                  "pt-BR",
                  {
                    style: "currency",
                    currency: "BRL",
                    currencyDisplay: "symbol",
                  }
                )}
              </p>
            </div>
          </div>
        </section>

        <button id="cancel-btn">Cancelar</button>
      </div>
    </div>
  )
}

export default ModalRequest
