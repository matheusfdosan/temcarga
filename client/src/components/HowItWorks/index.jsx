import React from "react"
import "./styles.css"
import step1Icon from "../../assets/HowItWorksIcons/step1-icon.svg"
import step2Icon from "../../assets/HowItWorksIcons/step2-icon.svg"
import step3Icon from "../../assets/HowItWorksIcons/step3-icon.svg"
import step4Icon from "../../assets/HowItWorksIcons/step4-icon.svg"
import step5Icon from "../../assets/HowItWorksIcons/step5-icon.svg"

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <section className="hero-section">
        <h1>Como funciona a TemCarga?</h1>
        <p className="hero-subtitle">
          Solicite, acompanhe e receba sua carga com segurança.
        </p>
      </section>

      <section className="steps-flow">
        <div className="steps-container">
          <div className="step">
            <div className="step-icon">
              <img src={step1Icon} alt="Cadastro na plataforma" />
              <div className="step-number">1</div>
            </div>
            <h3>Cadastro na plataforma</h3>
            <p>Crie sua conta em poucos minutos com dados básicos</p>
          </div>

          <div className="step">
            <div className="step-icon">
              <img src={step2Icon} alt="Criação da solicitação" />
              <div className="step-number">2</div>
            </div>
            <h3>Criação da solicitação</h3>
            <p>Informe os detalhes da sua carga e necessidades de transporte</p>
          </div>

          <div className="step">
            <div className="step-icon">
              <img src={step3Icon} alt="Cálculo do frete" />
              <div className="step-number">3</div>
            </div>
            <h3>Cálculo do frete pela tabela ANTT</h3>
            <p>Preço justo e transparente baseado na tabela oficial</p>
          </div>

          <div className="step">
            <div className="step-icon">
              <img src={step4Icon} alt="Conexão com caminhoneiros" />
              <div className="step-number">4</div>
            </div>
            <h3>Conexão com caminhoneiros via WhatsApp</h3>
            <p>Comunicação direta e ágil com motoristas disponíveis</p>
          </div>

          <div className="step">
            <div className="step-icon">
              <img src={step5Icon} alt="Rastreamento e entrega" />
              <div className="step-number">5</div>
            </div>
            <h3>Rastreamento e entrega</h3>
            <p>Acompanhe sua carga em tempo real até o destino</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <p className="cta-text">
          Tudo de forma rápida, segura e com preço justo.
        </p>
        <button className="cta-button">Solicitar Frete Agora</button>
      </section>
    </div>
  )
}

export default HowItWorks
