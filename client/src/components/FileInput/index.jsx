import React from "react"
import "./styles.css"
import uploadIcon from "../../assets/upload-icon.svg"

function FileInput() {
  return <div id="file-input-container">
    <img src={uploadIcon} alt="" />
    <p>Arraste e solte o arquivo XML aqui</p>
    <p>ou</p>
    <input type="file" className="hidden" />
    <button>Selecionar arquivo</button>  
    <p>Tamanho máximo 10MB</p>
  </div>
}

export default FileInput