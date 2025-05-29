import React, { useRef, useState } from "react"
import "./styles.css"
import uploadIcon from "../../assets/upload-icon.svg"

function FileUploader({ name, value, docName, onChange, error, fileType }) {
  const fileInput = useRef()
  const [fileName, setFileName] = useState("")
  const [analyzing, setAnalyzing] = useState(false)

  const simulateAnalysis = (callback) => {
    setAnalyzing(true)
    const delay = Math.floor(Math.random() * 2000) + 2000 // 2000–4000ms
    setTimeout(() => {
      setAnalyzing(false)
      callback()
    }, delay)
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (!selectedFile) return

    simulateAnalysis(() => {
      if (selectedFile.type === "text/xml") {
        const reader = new FileReader()
        reader.onload = (event) => {
          setFileName(selectedFile.name)
          const xmlString = event.target.result
          onChange({ xmlString, fileName: selectedFile.name })
        }
        reader.readAsText(selectedFile)
      } else if (selectedFile.type === "application/pdf") {
        setFileName(selectedFile.name)
        onChange({ pdfFile: selectedFile, fileName: selectedFile.name })
      }
    })
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const droppedFile = e.dataTransfer.files[0]
    if (!droppedFile) return

    simulateAnalysis(() => {
      if (droppedFile.type === "text/xml") {
        const reader = new FileReader()
        reader.onload = (event) => {
          setFileName(droppedFile.name)
          const xmlString = event.target.result
          onChange({ xmlString, fileName: droppedFile.name })
        }
        reader.readAsText(droppedFile)
      } else if (droppedFile.type === "application/pdf") {
        setFileName(droppedFile.name)
        onChange({ pdfFile: droppedFile, fileName: droppedFile.name })
      }
    })

    e.dataTransfer.clearData()
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
          {fileType === "xml" ? (
            <>
              Escolha o arquivo XML da <strong>Nota Fiscal</strong> aqui
            </>
          ) : (
            <>
              Escolha o arquivo PDF do seu <strong>Seguro</strong> aqui
            </>
          )}
        </p>
        <p>ou</p>

        <input
          type="file"
          name={name}
          className="hidden"
          accept={fileType === "xml" ? ".xml" : ".pdf"}
          multiple={false}
          ref={fileInput}
          onChange={handleFileChange}
        />

        

        <button type="button">
          {value ? fileName || docName : "Selecionar arquivo"}
        </button>
        {analyzing && (
          <div id="validating">
            <p>Verificando {fileType === "xml" ? "Nota Fiscal" : "Seguro"}</p>
          </div>
        )}
        <p>Tamanho máximo 10MB</p>

        
      </div>

      {error && <span className="file-error-msg">{error}</span>}
    </div>
  )
}

export default FileUploader
