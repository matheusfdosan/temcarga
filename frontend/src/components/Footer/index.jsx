import React from "react"
import logo from "../../assets/complete-logo.svg"
import "./styles.css"

function Footer() {
  return (
    <footer>
      <div>
        <img src={logo} alt="logo" />

        <ul>
          <li>Links Rápidos</li>
          <li>
            <a href="">Política de Privacidade</a>
          </li>
          <li>
            <a href="">Termos de Uso</a>
          </li>
          <li>
            <a href="">Fale Conosco</a>
          </li>
        </ul>

        <ul>
          <li>Contato</li>
          <li>
            <a href="">(11) 94002-8922</a>
          </li>
          <li>
            <a href="">contato@temcarga.com</a>
          </li>
        </ul>

        <ul>
          <li>Nos siga</li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
        </ul>
      </div>
      <div>
        <div>

        <span>© 2025 TemCarga. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
