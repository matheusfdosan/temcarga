import React from "react"
import "./styles.css"

function Notifications({ requests }) {
  return (
    <div id="notifications-dropdown">
      <h4>Notificações</h4>
      <ul>
        {requests.length === 0 && (
          <li className="empty">Nenhuma notificação</li>
        )}

        {requests.map((req, index) => {
          let msg = ""
          if (req.status === "completed") {
            msg =
              "Sua solicitação foi finalizada! Verifique se realmente chegou e libere o pagamento do caminhoneiro!"
          } else if (req.status === "canceled") {
            msg =
              "Você cancelou uma solicitação que estava em andamento! Você recebeu uma punição de uma semana sem usar a plataforma!"
          } else if (req.status === "accepted") {
            msg =
              "Um caminhoneiro aceitou sua proposta, aguarde até ele começar o serviço!"
          } else if (req.status === "in-progress") {
            msg =
              "O caminhoneiro começou o serviço, acompanhe-o através do mapa em tempo real."
          }

          return (
            <li key={index} className={`notif ${req.status}`}>
              {msg}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Notifications
