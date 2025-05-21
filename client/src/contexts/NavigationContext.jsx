import { createContext, useContext, useState } from "react"

const NavigationContext = createContext()

export function NavigationProvider({ children }) {
  const [active, setActive] = useState("home")

  return (
    <NavigationContext.Provider value={{ active, setActive }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  return useContext(NavigationContext)
}
