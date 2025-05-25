import React, { useEffect, useState } from "react"

import Landing from "../Landing"
import HomePage from "../HomePage"

function ChooseRoot() {
  const [isLoggedIn, setIsLoggedIn] = useState()

  useEffect(() => {
    const acess = JSON.parse(localStorage.getItem("login"))

    if (!acess?.token) {
      setIsLoggedIn(false)
      return
    }

    setIsLoggedIn(true)
  })

  return <>{isLoggedIn ? <HomePage /> : <Landing />}</>
}

export default ChooseRoot
