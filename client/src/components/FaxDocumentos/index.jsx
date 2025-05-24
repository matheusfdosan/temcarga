import "./styles.css"
import taxDocsIcon from "../../assets/tax-docs-icon.svg"
import downloadIcon from "../../assets/download-icon.svg"

function TaxDocuments() {
  return (
    <div id="tax-documents">
      <h2>Documentos Fiscais Utilizados</h2>
      <p>
        Confira as Notas Fiscais que você utilizou e verifique se estão
        disponíveis para uso.
      </p>

      <ul>
        <li>
          <div>
            <img src={taxDocsIcon} alt="tax Document Icon" />
            <span>{"NF-e Distribuidora ABC Ltda."}</span>
          </div>
          <div id="status" className="valid">
            Válido
          </div>
          <button>
            <img src={downloadIcon} alt="download-icon" />
          </button>
        </li>
        <li>
          <div>
            <img src={taxDocsIcon} alt="tax Document Icon" />
            <span>{"NF-e Distribuidora ABC Ltda."}</span>
          </div>
          <div id="status" className="deprived">
            Cancelado
          </div>
          <button>
            <img src={downloadIcon} alt="download-icon" />
          </button>
        </li>
        <li>
          <div>
            <img src={taxDocsIcon} alt="tax Document Icon" />
            <span>{"NF-e Distribuidora ABC Ltda."}</span>
          </div>
          <div id="status" className="valid">
            Válido
          </div>
          <button>
            <img src={downloadIcon} alt="download-icon" />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default TaxDocuments
