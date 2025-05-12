import React from "react"
import "./styles.css"

function DisclasureWidget({ title, text }) {
  return (
    <details className="faq-item">
      <summary>{title}</summary>
      <p>{text}</p>
    </details>
  )
}

export default DisclasureWidget
