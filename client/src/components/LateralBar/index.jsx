import React, { useEffect } from "react";
import "./styles.css";

import homeIcon from "../../assets/LateralBarIcons/home-outlined.svg";
import requestIcon from "../../assets/LateralBarIcons/requests-outlined.svg";
import newRequestIcon from "../../assets/LateralBarIcons/new-request-outlined.svg";
import documentsIcon from "../../assets/LateralBarIcons/documents-outlined.svg";
import supportIcon from "../../assets/LateralBarIcons/support-outlined.svg";
import configsIcon from "../../assets/LateralBarIcons/configs-outlined.svg";
import howWorksIcon from "../../assets/LateralBarIcons/how-works-outlined.svg";
import aboutIcon from "../../assets/LateralBarIcons/about-outlined.svg";
import arrowIcon from "../../assets/LateralBarIcons/inclined-arrow-normal.svg";

import homeIconActive from "../../assets/LateralBarIcons/home-filled.svg";
import requestIconActive from "../../assets/LateralBarIcons/requests-filled.svg";
import newRequestIconActive from "../../assets/LateralBarIcons/new-request-filled.svg";
import documentsIconActive from "../../assets/LateralBarIcons/documents-filled.svg";
import supportIconActive from "../../assets/LateralBarIcons/support-filled.svg";
import configsIconActive from "../../assets/LateralBarIcons/configs-filled.svg";
import howWorksIconActive from "../../assets/LateralBarIcons/how-works-filled.svg";
import aboutIconActive from "../../assets/LateralBarIcons/about-filled.svg";
import arrowIconActive from "../../assets/LateralBarIcons/inclined-arrow-blue.svg";

import { useNavigation } from "../../contexts/NavigationContext";

function LateralBar() {
  const { active, setActive } = useNavigation();

  useEffect(() => {
    const current = localStorage.getItem("currentSection");

    setActive(current === null ? "home" : current);
  }, []);

  const handleClickOption = (opt) => {
    setActive(opt);
    localStorage.setItem("currentSection", opt);
  };

  return (
    <nav id="lateral-bar">
      <ul>
        <li
          style={{
            backgroundColor:
              active === "home" && "var(--primary-color-more-clearer)",
          }}
        >
          <a onClick={() => handleClickOption("home")}>
            <img
              src={active === "home" ? homeIconActive : homeIcon}
              alt="home-icon"
            />
            <span>Home</span>
          </a>
        </li>
        <li
          style={{
            backgroundColor:
              active === "your-requests" && "var(--primary-color-more-clearer)",
          }}
        >
          <a onClick={() => handleClickOption("your-requests")}>
            <img
              src={active === "your-requests" ? requestIconActive : requestIcon}
              alt="requests-icon"
            />
            <span>Suas Solicitações</span>
          </a>
        </li>
        <li
          style={{
            backgroundColor:
              active === "new-request" && "var(--primary-color-more-clearer)",
          }}
        >
          <a onClick={() => handleClickOption("new-request")}>
            <img
              src={
                active === "new-request" ? newRequestIconActive : newRequestIcon
              }
              alt="new-request-icon"
            />
            <span>Novo Orçamento</span>
          </a>
        </li>
        <li
          style={{
            backgroundColor:
              active === "documents" && "var(--primary-color-more-clearer)",
          }}
        >
          <a onClick={() => handleClickOption("documents")}>
            <img
              src={active == "documents" ? documentsIconActive : documentsIcon}
              alt="documents-icon"
            />
            <span>Documentos Fiscais</span>
          </a>
        </li>
        <li id="lateral-bar-line"></li>
        <li
          style={{
            backgroundColor:
              active === "support" && "var(--primary-color-more-clearer)",
          }}
        >
          <a onClick={() => handleClickOption("support")}>
            <img
              src={active === "support" ? supportIconActive : supportIcon}
              alt="support"
            />
            <span>Suporte (Ajuda)</span>
          </a>
        </li>
        <li
          style={{
            backgroundColor:
              active === "settings" && "var(--primary-color-more-clearer)",
          }}
        >
          <a onClick={() => handleClickOption("settings")}>
            <img
              src={active === "settings" ? configsIconActive : configsIcon}
              alt="settings-icon"
            />
            <span>Configurações</span>
          </a>
        </li>
      </ul>

      <ul>
        <li
          style={{
            backgroundColor:
              active === "about" && "var(--primary-color-more-clearer)",
          }}
        >
          <a onClick={() => handleClickOption("about")}>
            <div>
              <img
                src={active === "about" ? aboutIconActive : aboutIcon}
                alt="about-icon"
              />
              <span>Sobre Nós</span>
            </div>
            <img
              src={active === "about" ? arrowIconActive : arrowIcon}
              alt="arrow"
            />
          </a>
        </li>
        <li
          style={{
            backgroundColor:
              active === "how-works" && "var(--primary-color-more-clearer)",
          }}
        >
          <a onClick={() => handleClickOption("how-works")}>
            <div>
              <img
                src={active === "how-works" ? howWorksIconActive : howWorksIcon}
                alt="how-works-icon"
              />
              <span>Como funciona?</span>
            </div>
            <img
              src={active === "how-works" ? arrowIconActive : arrowIcon}
              alt="arrow"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default LateralBar;
