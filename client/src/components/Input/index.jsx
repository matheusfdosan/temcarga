import "./style.css"
import eyeOffImg from "../../assets/eye-off.svg"
import eyeOnImg from "../../assets/eye-on.svg"
import { useState } from "react"
import { IMaskInput } from "react-imask"

function Input({ type = "text", label, selectList }) {
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
                alt="toggle password visibility"
              />
            </button>
          </div>
        </label>
      ) : type === "date" ? (
        <label className="form-input" htmlFor={label}>
          <span>{label}</span>
          <input type="date" id={label} name={label} />
        </label>
      ) : type === "cep" ? (
        <label className="form-input" htmlFor={label}>
          <span>{label}</span>
          <IMaskInput
            mask={[{ mask: "00.000-00" }]}
            overwrite={true}
            id={label}
            required
            placeholder="00.000-00"
          />
        </label>
      ) : type === "textbox" ? (
        <label id="input-textbox-label" htmlFor={label}>
          <span>{label}</span>
          <textarea name={label} id={label}></textarea>
        </label>
      ) : type === "checkbox" ? (
        <label id="input-checkbox-label" htmlFor={label}>
          <input type="checkbox" id={label} name={label} />
          <span>{label}</span>
        </label>
      ) : type === "measure" ? (
        <label className="form-input" htmlFor={inputId}>
          <span>{label}</span>
          <IMaskInput
            mask={Number}
            scale={2}
            id={inputId}
            signed={false}
            thousandsSeparator="."
            radix=","
            mapToRadix={["."]}
            onAccept={handleAccept}
            overwrite={true}
            required
          />
        </label>
      ) : type === "email" ? (
        <label htmlFor={label} className="form-input">
          <span>{label}</span>
          <input type="email" placeholder="Digite seu email" id={label} />
        </label>
      ) : type === "select" ? (
        <label htmlFor={label} className="form-input">
          <span>{label}</span>
          <select name={label} id={label}>
            {selectList.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </label>
      ) : type == "tel" ? (
        <label className="form-input" htmlFor={inputId}>
          <span>{label}</span>
          <IMaskInput
            mask={[{ mask: "(00) 00000-0000" }]}
            onAccept={handleAccept}
            id={inputId}
            placeholder="(00) 00000-0000"
            overwrite={true}
            required
          />
        </label>

      ) : label == "CPF ou CNPJ*" ? (
        <label className="form-input" htmlFor={inputId}>
          <span>{label}</span>
          <IMaskInput
            mask={[{ mask: "000.000.000-00" }, { mask: "00.000.000/0000-00" }]}
            onAccept={handleAccept}
            id={inputId}
            overwrite={true}
            placeholder="Digite seu CPF ou CNPJ"
            required
          />
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
