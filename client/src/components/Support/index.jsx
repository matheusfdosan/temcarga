import React, { useState } from "react"
import Footer from "../Footer"
import whatsappIcon from "../../assets/whatsapp-icon.svg"

import "./styles.css"

const Support = () => {
  const [activeQuestion, setActiveQuestion] = useState(null)
  const [message, setMessage] = useState("")

  const faqItems = [
    {
      question: "Como solicitar um frete?",
      answer:
        'Para solicitar um frete, acesse a seção "Solicitar Frete" no menu principal, preencha os detalhes da sua carga e aguarde as propostas dos caminhoneiros.',
    },
    {
      question: "Como acompanhar meu frete?",
      answer:
        'Você pode acompanhar seu frete em tempo real na seção "Meus Fretes". Lá você verá a localização atual do caminhão e o status da entrega.',
    },
    {
      question: "E se o caminhoneiro não aparecer?",
      answer:
        "Caso o caminhoneiro não compareça no local combinado, entre em contato imediatamente com nosso suporte. Nós ajudaremos a encontrar uma solução alternativa.",
    },
    {
      question: "Como funciona o pagamento?",
      answer:
        "O pagamento é feito de forma segura através da plataforma. Você só libera o valor para o caminhoneiro após a confirmação da entrega.",
    },
  ]

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    setMessage("")
  }

  return (
    <>
      <div className="support-container">
        <h1 className="support-title">Suporte (Ajuda)</h1>

        <div className="support-content">
          <section className="faq-section">
            <h2 className="section-title">Perguntas Frequentes</h2>
            <div className="faq-list">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    activeQuestion === index ? "active" : ""
                  }`}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleQuestion(index)}
                  >
                    {item.question}
                    <span className="faq-icon">
                      {activeQuestion === index ? "−" : "+"}
                    </span>
                  </button>
                  {activeQuestion === index && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="support-section">
            <h2 className="section-title">Central de Atendimento</h2>
            <div className="support-options">
              <button className="whatsapp-button">
                <img src={whatsappIcon} alt="WhatsApp" />
                Falar com o Suporte no WhatsApp
              </button>

              <form onSubmit={handleSubmit} className="message-form">
                <label htmlFor="support-message">Envie sua dúvida</label>
                <textarea
                  id="support-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Descreva sua dúvida ou problema..."
                  required
                />
                <button type="submit" className="submit-button">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Support
