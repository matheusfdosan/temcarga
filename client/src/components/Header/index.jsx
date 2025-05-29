import React, { useEffect, useState } from "react"
import "./styles.css"

import logo from "../../assets/temcarga.svg"
import searchIcon from "../../assets/search-icon.svg"
import notificationIcon from "../../assets/notification-icon.svg"

import { useNavigation } from "../../contexts/NavigationContext"
import Notifications from "../Notifications"
import getRequests from "../../utils/getRequests"

function Header() {
  const { setActive } = useNavigation()

  const [requests, setRequests] = useState([])
  const [name, setName] = useState("")
  const [showNotificationList, setShowNotificationList] = useState(false)

  useEffect(() => {
    const acess = JSON.parse(localStorage.getItem("login"))
    setName(acess.auth.name)

    const fetchRequests = async () => {
      const result = await getRequests(acess.auth.id)

      setRequests(
        result.filter(
          (req) =>
            req.status === "in-progress" ||
            req.status === "completed" ||
            req.status === "canceled"
        )
      )
    }

    fetchRequests()
  }, [])

  const handleOpenNotifications = () => {
    setShowNotificationList(!showNotificationList)
  }

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
          <a onClick={handleOpenNotifications}>
            {requests.length > 0 && <div id="point">{requests.length}</div>}
            <img src={notificationIcon} alt="notification-icon" />
          </a>
          {showNotificationList && <Notifications requests={requests} />}

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
