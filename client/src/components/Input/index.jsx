import "./style.css"
import eyeOffImg from "../../assets/eye-off.svg"
import eyeOnImg from "../../assets/eye-on.svg"
import { useState } from "react"
import { IMaskInput } from "react-imask"

function Input({ type, label }) {
  const [showPassword, setShowPassword] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const inputId = label.replace(/\s+/g, "-").toLowerCase()

  const handleAccept = (value, mask) => {
    setCpfCnpj(value)
  }

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
              minLength={8}
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
      ) : label == "CPF ou CNPJ*" ? (
        <>
          <label className="form-input" htmlFor={inputId}>
            <span>{label}</span>
            <IMaskInput
              mask={[
                { mask: "000.000.000-00" },
                { mask: "00.000.000/0000-00" },
              ]}
              onAccept={handleAccept}
              overwrite={true}
              required
            />
          </label>
        </>
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
