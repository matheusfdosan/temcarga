import { useState } from "react"
import { IMaskInput } from "react-imask"
import eyeOffImg from "../../assets/eye-off.svg"
import eyeOnImg from "../../assets/eye-on.svg"
import "./style.css"

function Input({
  type = "text",
  label,
  selectList = [],
  value,
  inputRef,
  onChange,
  name,
  desc,
}) {
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
              ref={inputRef}
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
            ref={inputRef}
            required
            onChange={onChange}
            min="2025-01-01"
            max="2030-12-31"
          />
        </label>
      ) : type === "cep" ? (
        <label className="form-input" htmlFor={inputId}>
          <span>{label}</span>
          <IMaskInput
            mask="00000-000"
            id={inputId}
            ref={inputRef}
            required
            minLength={9}
            name={inputName}
            placeholder="00000-000"
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
            ref={inputRef}
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
            ref={inputRef}
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
            thousandsSeparator="."
            ref={inputRef}
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
            ref={inputRef}
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
            ref={inputRef}
            value={value}
            onChange={onChange}
            required
            title={desc}
          >
            <option value="" disabled>
              Selecione...
            </option>
            {selectList.map((item, index) => (
              <option key={index} value={item}>
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
            ref={inputRef}
            value={value}
            onAccept={handleMaskedChange}
          />
        </label>
      ) : label === "CPF ou CNPJ*" ? (
        <label className="form-input" htmlFor={inputId}>
          <span>{label}</span>
          <IMaskInput
            mask={[{ mask: "000.000.000-00" }, { mask: "00.000.000/0000-00" }]}
            id={inputId}
            name={inputName}
            placeholder="Digite seu CPF ou CNPJ"
            ref={inputRef}
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
            ref={inputRef}
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
