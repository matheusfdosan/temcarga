import React from "react"
import "./styles.css"

function ModalConfirm({ continueRequest, close, title, desc }) {
  return (
    <div id="modal-confirm">
      <div>
        <h3>{title}</h3>
        <p>
          {desc}
        </p>

        <button onClick={() => continueRequest(true)}>Continuar</button>
        <button onClick={() => close(false)}>Cancelar</button>
      </div>
    </div>
  )
}

export default ModalConfirm
