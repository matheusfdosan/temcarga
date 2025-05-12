import React from "react"
import "./styles.css"

function LandingCard({
  img,
  miniTitle,
  text,
  bgColor,
  textColor,
  bgTextColor,
}) {
  return (
    <div className="landing-card" style={{ backgroundColor: `#${bgColor}` }}>
      <img src={img} alt={`${miniTitle} illustration`} />

      <span
        style={{ backgroundColor: `#${bgTextColor}`, color: `#${textColor}` }}
      >
        {miniTitle}
      </span>

      <p>{text}</p>
    </div>
  )
}

export default LandingCard
