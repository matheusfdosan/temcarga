import React from "react"
import "./styles.css"

import homeIcon from "../../assets/LateralBarIcons/home-outlined.svg"
import requestIcon from "../../assets/LateralBarIcons/requests-outlined.svg"
import newRequestIcon from "../../assets/LateralBarIcons/new-request-outlined.svg"
import documentsIcon from "../../assets/LateralBarIcons/documents-outlined.svg"
import supportIcon from "../../assets/LateralBarIcons/support-outlined.svg"
import configsIcon from "../../assets/LateralBarIcons/configs-outlined.svg"
import howWorksIcon from "../../assets/LateralBarIcons/how-works-outlined.svg"
import aboutIcon from "../../assets/LateralBarIcons/about-outlined.svg"
import arrowIcon from "../../assets/LateralBarIcons/inclined-arrow-normal.svg"

function LateralBar() {
  return (
    <nav id="lateral-bar">
      <ul>
        <li>
          <a href="/">
            <img src={homeIcon} alt="" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/">
            <img src={requestIcon} alt="" />
            <span>Suas Solicitações</span>
          </a>
        </li>
        <li>
          <a href="/">
            <img src={newRequestIcon} alt="" />
            <span>Nova Solicitação</span>
          </a>
        </li>
        <li>
          <a href="/">
            <img src={documentsIcon} alt="" />
            <span>Documentos Fiscais</span>
          </a>
        </li>
        <li id="lateral-bar-line"></li>
        <li>
          <a href="/">
            <img src={supportIcon} alt="" />
            <span>Suporte (Ajuda)</span>
          </a>
        </li>
        <li>
          <a href="/">
            <img src={configsIcon} alt="" />
            <span>Configurações</span>
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/">
            <div>
              <img src={aboutIcon} alt="" />
              <span>Sobre Nós</span>
            </div>
            <img src={arrowIcon} alt="" />
          </a>
        </li>
        <li>
          <a href="/">
            <div>
              <img src={howWorksIcon} alt="" />
              <span>Como funciona?</span>
            </div>
            <img src={arrowIcon} alt="" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default LateralBar
