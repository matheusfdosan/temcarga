import React, { useRef, useState } from "react"
import "./styles.css"
import uploadIcon from "../../assets/upload-icon.svg"

function FileUploader({ name, value, onChange, error }) {
  const fileInput = useRef()
  const [fileName, setFileName] = useState("")

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    setFileName(selectedFile.name)
    if (selectedFile) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const xmlString = event.target.result
        onChange(xmlString)
      }
      reader.readAsText(selectedFile)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const xmlString = event.target.result
        onChange(xmlString)
      }
      reader.readAsText(droppedFile)
      e.dataTransfer.clearData()
    }
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div className="file-uploader-wrapper">
      <div
        id="file-input-container"
        onDrop={handleDrop}
        onDragOver={handleDrag}
        onClick={() => fileInput.current.click()}
        style={{
          borderColor: value ? "var(--green)" : "var(--border-clearer)",
          backgroundColor: value ? "var(--green-clearer)" : "var(--white)",
        }}
        title="Adicione uma Nota Fiscal Eletrônica em XML aqui"
      >
        <img src={uploadIcon} alt="upload-icon" />
        <p>
          Escolha o arquivo XML da <strong>Nota Fiscal</strong> aqui
        </p>
        <p>ou</p>

        <input
          type="file"
          name={name}
          className="hidden"
          accept=".xml"
          multiple={false}
          ref={fileInput}
          onChange={handleFileChange}
        />

        <button type="button">{value ? fileName : "Selecionar arquivo"}</button>

        <p>Tamanho máximo 10MB</p>
      </div>

      {error && <span className="file-error-msg">{error}</span>}
    </div>
  )
}

export default FileUploader
