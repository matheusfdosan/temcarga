import React from "react"
import "./style.css"

function Button({text, whenIClick}) {
  return <>
    <button className="button-component" onClick={whenIClick}>{text}</button>
  </>
}

export default Button