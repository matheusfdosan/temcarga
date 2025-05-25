import "./style.css"
import eyeOffImg from "../../assets/eye-off.svg"
import eyeOnImg from "../../assets/eye-on.svg"
import { useState } from "react"
import { IMaskInput } from "react-imask"

function Input({ type = "text", label, selectList = [], value, onChange, name }) {
  const [showPassword, setShowPassword] = useState(false)
  const inputId = label.replace(/\s+/g, "-").toLowerCase()
  const inputName = name || inputId

  const handleMaskedChange = (val) => {
    onChange({ target: { name: inputName, value: val } })
  }

  return (
    <>
      {type === "password" ? (
        <label className="form-input" htmlFor={inputId}>
          <span>{label}</span>
          <div className="input-wrapper">
            <input
              id={inputId}
              name={inputName}
              className="input-password"
              minLength={8}
              required
              type={showPassword ? "text" : "password"}
              value={value}
              onChange={onChange}
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
        <label className="form-input" htmlFor={inputId}>
          <span>{label}</span>
          <input
            type="date"
            id={inputId}
            name={inputName}
            value={value}
            onChange={onChange}
          />
        </label>
      ) : type === "cep" ? (
        <label className="form-input" htmlFor={inputId}>
          <span>{label}</span>
          <IMaskInput
            mask="00.000-00"
            id={inputId}
            required
            name={inputName}
            placeholder="00.000-00"
            value={value}
            onAccept={handleMaskedChange}
          />
        </label>
      ) : type === "textbox" ? (
        <label id="input-textbox-label" htmlFor={inputId}>
          <span>{label}</span>
          <textarea
            id={inputId}
            name={inputName}
            value={value}
            onChange={onChange}
          />
        </label>
      ) : type === "checkbox" ? (
        <label id="input-checkbox-label" htmlFor={inputId}>
          <input
            type="checkbox"
            id={inputId}
            name={inputName}
            checked={value}
            onChange={(e) =>
              onChange({
                target: { name: inputName, value: e.target.checked },
              })
            }
          />
          <span>{label}</span>
        </label>
      ) : type === "measure" ? (
        <label className="form-input" htmlFor={inputId}>
          <span>{label}</span>
          <IMaskInput
            mask={Number}
            scale={2}
            signed={false}
            thousandsSeparator="."
            radix=","
            mapToRadix={["."]}
            id={inputId}
            name={inputName}
            value={value}
            required
            onAccept={handleMaskedChange}
          />
        </label>
      ) : type === "email" ? (
        <label htmlFor={inputId} className="form-input">
          <span>{label}</span>
          <input
            type="email"
            id={inputId}
            name={inputName}
            placeholder="Digite seu email"
            value={value}
            onChange={onChange}
          />
        </label>
      ) : type === "select" ? (
        <label htmlFor={inputId} className="form-input">
          <span>{label}</span>
          <select
            id={inputId}
            name={inputName}
            value={value}
            onChange={onChange}
          >
            {selectList.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      ) : type === "tel" ? (
        <label className="form-input" htmlFor={inputId}>
          <span>{label}</span>
          <IMaskInput
            mask="(00) 00000-0000"
            id={inputId}
            name={inputName}
            placeholder="(00) 00000-0000"
            required
            value={value}
            onAccept={handleMaskedChange}
          />
        </label>
      ) : label === "CPF ou CNPJ*" ? (
        <label className="form-input" htmlFor={inputId}>
          <span>{label}</span>
          <IMaskInput
            mask={[
              { mask: "000.000.000-00" },
              { mask: "00.000.000/0000-00" },
            ]}
            id={inputId}
            name={inputName}
            placeholder="Digite seu CPF ou CNPJ"
            required
            value={value}
            onAccept={handleMaskedChange}
          />
        </label>
      ) : (
        <label className="form-input" htmlFor={inputId}>
          <span>{label}</span>
          <input
            type={type}
            id={inputId}
            name={inputName}
            className="input"
            required
            value={value}
            onChange={onChange}
          />
        </label>
      )}
    </>
  )
}

export default Input
