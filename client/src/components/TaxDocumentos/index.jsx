import "./styles.css"
import { useEffect, useState } from "react"
import taxDocsIcon from "../../assets/tax-docs-icon.svg"
import downloadIcon from "../../assets/download-icon.svg"
import getDocuments from "../../utils/getDocuments.js"

function TaxDocuments() {
  const [documents, setDocuments] = useState([])

  const getDocumentsFunc = async () => {
    return await getDocuments(JSON.parse(localStorage.getItem("login")).auth.id)
  }

  useEffect(() => {
    const fetchDocuments = async () => {
      const result = await getDocumentsFunc()
      setDocuments(result)
    }

    fetchDocuments()
  }, [])

  const downloadXml = (
    xmlString,
    filename = `nota-fiscal-eletrônica-${id}.xml`
  ) => {
    const blob = new Blob([xmlString], {
      type: "application/xml;charset=utf-8",
    })
    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

    URL.revokeObjectURL(url)
  }

  const handleDownload = (invoice_document, invoice_document_name) => {
    downloadXml(invoice_document, invoice_document_name)
  }

  return (
    <div id="tax-documents">
      <h2>Documentos Fiscais Utilizados</h2>
      <p>
        Confira as Notas Fiscais que você utilizou e verifique se estão
        disponíveis para uso.
      </p>

      <ul>
        {documents.length !== 0 ? documents.map((doc, index) => {
          return (
            <li key={index}>
              <div>
                <img src={taxDocsIcon} alt="tax Document Icon" />
                <span>{doc.invoice_document_name}</span>
              </div>
              <div id="status" className="valid">
                Válido
              </div>
              <button
                onClick={() =>
                  handleDownload(
                    doc.invoice_document,
                    doc.invoice_document_name
                  )
                }
              >
                <img src={downloadIcon} alt="download-icon" />
              </button>
            </li>
          )
        }): <li>Nenhum documento foi usado!</li>}
      </ul>
    </div>
  )
}

export default TaxDocuments
