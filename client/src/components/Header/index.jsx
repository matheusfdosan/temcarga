import React from "react"
import "./styles.css"
import logo from "../../assets/temcarga.svg"
import searchIcon from "../../assets/search-icon.svg"
import notificationIcon from "../../assets/notification-icon.svg"

function Header() {
  return (
    <header>
      <div id="header-container">
        <a href="/">
          <img src={logo} alt="tem carga logo" />
        </a>

        <label htmlFor="search-input">
          <img src={searchIcon} alt="search-icon" />
          <input type="search" id="search-input" placeholder="Pesquisar" />
        </label>

        <div>
          <a href="/">
            <img src={notificationIcon} alt="notification-icon" />
          </a>

          <div id="vertical-line"></div>

          <div id="user-place">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzTWQoCUbRNdiyorem5Qp1zYYhpliR9q0Bw&s"
              alt="Aginaldo Rossi"
            />
            <div>
              <h2>Aginaldo Rossi</h2>
              <p>Cliente</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
