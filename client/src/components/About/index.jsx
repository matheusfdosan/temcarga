import React from "react"
import "./styles.css"
import missionIcon from "../../assets/mission-icon.svg"
import visionIcon from "../../assets/vision-icon.svg"
import valuesIcon from "../../assets/values-icon.svg"

const About = () => {
  return (
    <div className="about-container">
      {/* Seção Hero */}
      <section className="hero-section">
        <h1>Sobre a TemCarga</h1>
        <p className="hero-description">
          Uma plataforma inovadora que conecta clientes a caminhoneiros
          autônomos, promovendo fretes mais rápidos, seguros e justos para
          todos.
        </p>
      </section>

      <section className="about-cards-section">
        <div className="about-card">
          <div className="about-card-icon">
            <img src={missionIcon} alt="missão do TemCarga" />
          </div>
          <h3>Missão</h3>
          <p>Conectar pessoas e cargas com eficiência e responsabilidade.</p>
        </div>

        <div className="about-card">
          <div className="about-card-icon">
            <img src={visionIcon} alt="missão do TemCarga" />
          </div>
          <h3>Visão</h3>
          <p>Ser a principal referência em fretes autônomos no Brasil.</p>
        </div>

        <div className="about-card">
          <div className="about-card-icon">
            <img src={valuesIcon} alt="missão do TemCarga" />
          </div>
          <h3>Valores</h3>
          <p>Transparência, confiança, agilidade e inovação.</p>
        </div>
      </section>

      <section className="history-section">
        <div className="history-content">
          <h2>Nossa História</h2>
          <p>
            A TemCarga nasceu da necessidade de modernizar o setor de
            transportes no Brasil. Identificamos a lacuna entre clientes que
            precisam enviar cargas e caminhoneiros autônomos buscando fretes.
            Com tecnologia e inovação, criamos uma plataforma que simplifica
            esse processo, garantindo segurança e transparência para ambas as
            partes.
          </p>
        </div>
        <div className="history-image"></div>
      </section>
    </div>
  )
}

export default About
