import React, { useState } from "react"
import "./styles.css"

function Contract({ wasItSigned, closeModal }) {
  const [accepted, setAccepted] = useState(false)

  const handleAccepted = (e) => {
    e.preventDefault()
    wasItSigned(true)
  }

  const handleCloseModal = (e) => {
    if (e.target.id === "contract" || e.target.id === "close-modal") {
      closeModal(false)
    }
  }

  return (
    <div id="contract" onClick={handleCloseModal}>
      <form onSubmit={handleAccepted}>
        <h3>Contrato de Prestação de Serviço</h3>
        <h4>
          Ao se cadastrar na plataforma TemCarga, o usuário concorda com as
          seguintes condições:
        </h4>
        <ul>
          <li>
            1. <strong>Veracidade das informações</strong>: É obrigatório
            fornecer dados verdadeiros e atualizados durante o cadastro e ao
            solicitar fretes.
          </li>
          <li>
            2. <strong>Responsabilidade sobre a carga</strong>: O usuário está
            ciente de que a plataforma conecta clientes e transportadores, e que
            danos ou extravios da carga são de responsabilidade do contratante,
            caso não haja seguro.
          </li>
          <li>
            3. <strong>Uso adequado da plataforma</strong>: É proibido utilizar
            a plataforma para atividades ilegais, fraudulentas ou que violem os
            termos.
          </li>
          <li>
            4. <strong>Aceite de notificações e comunicações</strong>: O usuário
            autoriza o envio de atualizações, informações de transporte e
            comunicações operacionais via e-mail ou WhatsApp.
          </li>
          <li>
            5. <strong>Termo de seguro</strong>: Caso opte por não contratar
            seguro, o usuário assume total responsabilidade sobre a carga
            transportada.
          </li>
        </ul>

        <p>
          Leia mais e aceite os{" "}
          <a
            href="https://docs.google.com/document/d/1dZTl0wJTKA9VSy_d3EuYLbEPzVpTlgiu6pCbU0qssAw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Termos e Condições
          </a>{" "}
          antes de continuar.
        </p>

        <p>
          Ao marcar o aceite, você declara ter lido e compreendido os Termos de
          Uso e Contrato de Prestação de Serviços na íntegra.
        </p>

        <div id="line"></div>

        <label htmlFor="check">
          <input
            type="checkbox"
            id="check"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          Eu li e aceito os Termos e Condições
        </label>

        <button type="submit" disabled={!accepted}>
          Aceitar e Continuar
        </button>
        
        <button type="button" id="close-modal" onClick={handleCloseModal}>
          Fechar
        </button>
      </form>
    </div>
  )
}

export default Contract
