import React, { useRef, useState } from "react";
import "./styles.css";
import uploadIcon from "../../assets/upload-icon.svg";

function FileUploader() {
  const [file, setFile] = useState(null);
  const fileInput = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files.lenght > 0) {
      handleFiles(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleFiles = (selectedFile) => {
    setFile(selectedFile);
  };

  return (
    <div
      id="file-input-container"
      onDrop={handleDrop}
      onDragOver={handleDrag}
      onClick={() => fileInput.current.click()}
      style={{ borderColor: file ? "var(--green)" : "var(--border-clearer)" }}
    >
      <img src={uploadIcon} alt="upload-icon" />
      <p>
        Escolha o arquivo XML da <strong>Nota Fiscal</strong> aqui
      </p>
      <p>ou</p>
      <input
        type="file"
        className="hidden"
        multiple={false}
        ref={fileInput}
        onChange={(e) => handleFiles(e.target.files[0])}
      />

      <button>{file ? file.name : "Selecionar arquivo"}</button>
      <p>Tamanho máximo 10MB</p>
    </div>
  );
}

export default FileUploader;
