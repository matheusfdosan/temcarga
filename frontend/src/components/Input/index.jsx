import "./style.css"
import eyeOffImg from "../../assets/eye-off.svg"
import eyeOnImg from "../../assets/eye-on.svg"
import { useState } from "react"

function Input({ type, label }) {
  const [showPassword, setShowPassword] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const inputId = label.replace(/\s+/g, "-").toLowerCase()

  return (
    <>
      {type === "password" ? (
        <label className="form-input" htmlFor={inputId}>
          <span>{label}</span>
          <div className="input-wrapper">
            <input
              onChange={handleInputChange}
              name="input"
              id={inputId}
              className="input-password"
              required
              type={showPassword ? "text" : "password"}
              value={inputValue}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="toggle-password"
            >
              <img
                src={showPassword ? eyeOffImg : eyeOnImg}
                alt="Toggle Password Visibility"
              />
            </button>
          </div>
        </label>
      ) : (
        <label className="form-input" htmlFor={inputId}>
          <span>{label}</span>
          <input
            name="input"
            id={inputId}
            className="input"
            required
            type={type}
          />
        </label>
      )}
    </>
  )
}

export default Input
