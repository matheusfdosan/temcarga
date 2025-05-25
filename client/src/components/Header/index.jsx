import React, { useEffect, useState } from "react"
import "./styles.css"

import logo from "../../assets/temcarga.svg"
import searchIcon from "../../assets/search-icon.svg"
import notificationIcon from "../../assets/notification-icon.svg"

import { useNavigation } from "../../contexts/NavigationContext"

function Header() {
  const { active, setActive } = useNavigation()

  const [name, setName] = useState("")

  useEffect(() => {
    const acess = JSON.parse(localStorage.getItem("login"))
    setName(acess.auth.name)
  })

  return (
    <header id="homepage-header">
      <div id="header-container">
        <a
          onClick={() => {
            setActive("home")
          }}
        >
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
            <div>
              <h2>{name}</h2>
              <p>Cliente</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
