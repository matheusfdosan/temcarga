import React, { useEffect } from "react"
import "./styles.css"

function ModalConfirmPayment({ amount, pixCode = "00020126580014BR.GOV.BCB.PIX0111teste@pix.com520400005303986540740.005802BR5913TemCarga Teste6010Sao Paulo62070503***6304ABCD", close, continuePayment }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixCode)
    alert("Código Pix copiado para a área de transferência!")
  }

  useEffect(() => {
    setTimeout(() => {
      continuePayment(true)
    }, 10000);
  }, []);

  return (
    <div id="modal-payment">
      <div className="payment-box">
        <h3>Pagamento da Solicitação</h3>
        <p className="amount">
          Valor:{" "}
          <strong>
            {parseFloat(amount).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </p>

        <p>Escaneie o QR Code Pix ou copie o código abaixo para efetuar o pagamento:</p>

        <div className="pix-box">
          <div className="qr-placeholder"></div>
          <textarea readOnly value={pixCode} />
          <button onClick={copyToClipboard}>Copiar código Pix</button>
        </div>

        <p className="warning">
          Após o pagamento, o serviço será iniciado automaticamente.
        </p>

        <button className="close-btn" onClick={() => close(false)}>
          Fechar
        </button>
      </div>
    </div>
  )
}

export default ModalConfirmPayment
