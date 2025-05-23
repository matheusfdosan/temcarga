import "./styles.css";
import taxDocsIcon from "../../assets/tax-docs-icon.svg";
import downloadIcon from "../../assets/download-icon.svg";

function TaxDocuments() {
  return (
    <div id="tax-documents">
      <h2>Documentos Fiscais Utilizados</h2>
      <p>Veja as Notas Fiscais que você utilizou. E se elas estão  </p>

      <ul>
        <li>
          <div>
            <img src={taxDocsIcon} alt="tax Document Icon" />{" "}
            <span>{"Nota fiscal da minha transportadora!"}</span>
          </div>
          <div id="status">
            Válido
          </div>
          <button>
            <img src={downloadIcon} alt="download-icon" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default TaxDocuments;
