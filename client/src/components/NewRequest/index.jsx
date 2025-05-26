import React, { useState } from "react"
import "./styles.css"

import calculateMinFreight from "../../utils/calculateMinFreight.js"
import newRequestService from "../../utils/newRequestService.js"

import Input from "../Input"

import blueBoxIcon from "../../assets/blue-box-icon.svg"
import blueMarker from "../../assets/blue-marker.svg"
import confirmIcon from "../../assets/confirm-icon.svg"
import dateIcon from "../../assets/date-icon.svg"
import taxDocsIcon from "../../assets/tax-docs-icon.svg"
import SucessIcon from "../../assets/check-circle.gif"
import FailIcon from "../../assets/error.gif"

import FileUploader from "../FileUploader"

function NewRequest() {
  const [msg, setMsg] = useState("")
  const [isAllRight, setIsAllRight] = useState(false)
  const [formData, setFormData] = useState({
    location: {
      origin: {
        cep: "",
        city: "",
        state: "",
        complete_address: "",
      },
      destination: {
        cep: "",
        city: "",
        state: "",
        complete_address: "",
      },
    },
    load_description: {
      type: "",
      weight: "",
      numAxles: "",
      size: {
        length: "",
        width: "",
        height: "",
      },
      features: {
        perishable: false,
        fragile: false,
        insurance_included: false,
      },
      goods_value: "",
      additional_observations: "",
    },
    dates: {
      collect_date: "",
      estimated_delivery_date: "",
    },
    invoice_document: "",
    invoice_document_name: "",
    estimated_shipping_cost: "",
  })
  const [modal, setModal] = useState([false, false])

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target
    const keys = name.split(".")
    setIsAllRight(false)

    setFormData((prevData) => {
      const newData = { ...prevData }
      let current = newData

      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] }
        current = current[keys[i]]
      }

      current[keys[keys.length - 1]] = type === "checkbox" ? checked : value
      return newData
    })
  }

  const handleCalculateFreight = async () => {
    try {
      const numAxles = Number(formData.load_description.numAxles) || 2
      const totalCost = await calculateMinFreight(formData, numAxles)
      setFormData((prev) => ({
        ...prev,
        estimated_shipping_cost: String(totalCost),
      }))
      setIsAllRight(true)
      setMsg("")
    } catch (error) {
      console.error("Erro ao calcular o frete:", error.message)
      setFormData((prev) => ({
        ...prev,
        estimated_shipping_cost: "Erro ao calcular",
      }))
      setMsg("Preencha todas as informações acima!")
      setIsAllRight(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (Object.keys(formData.invoice_document).length === 0) {
      setMsg("Você precisa adicionar um arquivo XML da nota fiscal.")
      setIsAllRight(false)
      return
    }

    handleCalculateFreight()
  }

  const handleSendForm = async () => {
    const response = await newRequestService(formData)
    if (response) {
      setModal([true, true])
      setTimeout(() => {
        setModal([false, true])
        localStorage.setItem("currentSection", "your-requests")
        location.reload()
      }, 3000)
    } else {
      setModal([true, false])
      setTimeout(() => {
        setModal([false, false])
      }, 3000)
    }
  }

  return (
    <div id="new-request">
      <h2>Faça um novo orçamento</h2>
      <p>Preencha os dados abaixo para solicitar um novo transporte de carga</p>

      <form method="post" onSubmit={handleSubmit}>
        <div id="localization">
          <section id="origin-local">
            <h3>
              <img src={blueMarker} alt="blue-marker" />
              Endereço de Origem
            </h3>
            <Input
              name="location.origin.cep"
              value={formData.location.origin.cep}
              onChange={handleChange}
              label={"CEP"}
              type="cep"
            />
            <Input
              name="location.origin.city"
              value={formData.location.origin.city}
              onChange={handleChange}
              label={"Cidade"}
              type="text"
            />
            <Input
              name="location.origin.state"
              value={formData.location.origin.state}
              onChange={handleChange}
              label={"Estado"}
              type="select"
              selectList={[
                "Acre",
                "Alagoas",
                "Amapá",
                "Amazonas",
                "Bahia",
                "Ceará",
                "Distrito Federal",
                "Espírito Santo",
                "Goiás",
                "Maranhão",
                "Mato Grosso",
                "Mato Grosso do Sul",
                "Minas Gerais",
                "Pará",
                "Paraíba",
                "Paraná",
                "Pernambuco",
                "Piauí",
                "Rio de Janeiro",
                "Rio Grande do Norte",
                "Rio Grande do Sul",
                "Rondônia",
                "Roraima",
                "Santa Catarina",
                "São Paulo",
                "Sergipe",
                "Tocantins",
              ]}
            />
            <Input
              name="location.origin.complete_address"
              value={formData.location.origin.complete_address}
              onChange={handleChange}
              label={"Endereço Completo"}
              type="text"
            />
          </section>

          <section id="destination-local">
            <h3>
              <img src={blueMarker} alt="blue-marker" />
              Endereço de Destino
            </h3>
            <Input
              name="location.destination.cep"
              value={formData.location.destination.cep}
              onChange={handleChange}
              label={"CEP (do destino)"}
              type="cep"
            />
            <Input
              name="location.destination.city"
              value={formData.location.destination.city}
              onChange={handleChange}
              label={"Cidade (do destino)"}
              type="text"
            />
            <Input
              name="location.destination.state"
              value={formData.location.destination.state}
              onChange={handleChange}
              label={"Estado"}
              type="select"
              selectList={[
                "Acre",
                "Alagoas",
                "Amapá",
                "Amazonas",
                "Bahia",
                "Ceará",
                "Distrito Federal",
                "Espírito Santo",
                "Goiás",
                "Maranhão",
                "Mato Grosso",
                "Mato Grosso do Sul",
                "Minas Gerais",
                "Pará",
                "Paraíba",
                "Paraná",
                "Pernambuco",
                "Piauí",
                "Rio de Janeiro",
                "Rio Grande do Norte",
                "Rio Grande do Sul",
                "Rondônia",
                "Roraima",
                "Santa Catarina",
                "São Paulo",
                "Sergipe",
                "Tocantins",
              ]}
            />
            <Input
              name="location.destination.complete_address"
              value={formData.location.destination.complete_address}
              onChange={handleChange}
              label={"Endereço Completo (do destino)"}
              type="text"
            />
          </section>
        </div>

        <section id="description">
          <h3>
            <img src={blueBoxIcon} alt="blue box icon" />
            Descrição da Carga
          </h3>

          <div id="two-sides">
            <div id="left-side">
              <Input
                name="load_description.type"
                value={formData.load_description.type}
                onChange={handleChange}
                label={"Tipo de Carga"}
                type="select"
                selectList={[
                  "Carga Geral",
                  "Alimentos Perecíveis",
                  "Alimentos Não Perecíveis",
                  "Carga Frigorificada",
                  "Produtos Farmacêuticos",
                  "Químicos Perigosos",
                  "Inflamáveis",
                  "Construção Civil",
                  "Madeira",
                  "Metal/Minerais",
                  "Eletrodomésticos",
                  "Móveis",
                  "Veículos",
                  "Carga Viva",
                  "Cargas a Granel (seca)",
                  "Cargas a Granel (líquida)",
                  "Produtos de Limpeza",
                  "Tecidos e Roupas",
                  "Papel e Celulose",
                  "Embalagens",
                  "Eletrônicos",
                  "Carga Frágil",
                  "Encomenda Expressa",
                  "Mudança Residencial",
                  "Carga Oversize (grande porte)",
                ]}
              />
              <Input
                name="load_description.weight"
                value={formData.load_description.weight}
                onChange={handleChange}
                label={"Peso da Carga (kg)"}
                type="measure"
              />

              <div id="load-size">
                <Input
                  name="load_description.size.length"
                  value={formData.load_description.size.length}
                  onChange={handleChange}
                  label={"Comprimento (cm)"}
                  type="measure"
                />
                <Input
                  name="load_description.size.width"
                  value={formData.load_description.size.width}
                  onChange={handleChange}
                  label={"Largura (cm)"}
                  type="measure"
                />
                <Input
                  name="load_description.size.height"
                  value={formData.load_description.size.height}
                  onChange={handleChange}
                  label={"Altura (cm)"}
                  type="measure"
                />
              </div>

              <Input
                name="load_description.numAxles"
                value={formData.load_description.numAxles}
                onChange={handleChange}
                label="Número de Eixos"
                type="select"
                selectList={["2", "3", "4", "5", "6", "7", "9"]}
                desc="Selecione o número de eixos do caminhão que transportará sua carga. Mais eixos suportam cargas mais pesadas."
              />

              <div id="load-characteristics">
                <h4>Caracteristicas da Carga</h4>

                <div id="all-checkboxes">
                  <Input
                    name="load_description.features.perishable"
                    value={formData.load_description.features.perishable}
                    onChange={handleChange}
                    type="checkbox"
                    label={"Perecível"}
                    desc="Que está sujeito a deteriorar-se."
                  />
                  <Input
                    name="load_description.features.fragile"
                    value={formData.load_description.features.fragile}
                    onChange={handleChange}
                    type="checkbox"
                    label={"Frágil"}
                    desc="Que quebra fácil, delicado."
                  />
                  <Input
                    name="load_description.features.insurance_included"
                    value={
                      formData.load_description.features.insurance_included
                    }
                    onChange={handleChange}
                    type="checkbox"
                    label={"Seguros Inclusos"}
                    desc="O proprietário já tem a garantia de que estará protegido desde o momento da aquisição."
                  />
                </div>
              </div>
            </div>
            <div id="right-side">
              <Input
                name="load_description.goods_value"
                value={formData.load_description.goods_value}
                onChange={handleChange}
                label={"Valor da Mercadoria (R$)"}
                type="measure"
              />
              <Input
                name="load_description.additional_observations"
                value={formData.load_description.additional_observations}
                onChange={handleChange}
                type="textbox"
                label="Observações Adicionais"
              />
            </div>
          </div>
        </section>

        <div id="deadlines-tax">
          <section id="deadlines">
            <h3>
              <img src={dateIcon} alt="date icon" />
              Datas
            </h3>

            <Input
              name="dates.collect_date"
              value={formData.dates.collect_date}
              onChange={handleChange}
              type="date"
              label="Data de Coleta"
            />
            <Input
              name="dates.estimated_delivery_date"
              value={formData.dates.estimated_delivery_date}
              onChange={handleChange}
              type="date"
              label="Data Estimada de Entrega"
            />
          </section>

          <section id="tax-docs">
            <h3>
              <img src={taxDocsIcon} alt="tax-doc-icon" />
              Documentos Obrigratórios
            </h3>

            <FileUploader
              name="invoice_document"
              onChange={({ xmlString, fileName }) =>
                {
                  // console.log(xmlString, fileName);
                  setFormData((prev) => ({
                  ...prev,
                  invoice_document: xmlString,
                  invoice_document_name: fileName,
                }))}
              }
              value={formData.invoice_document}
            />
          </section>
        </div>

        <section id="estimated-value">
          <div>
            <h3>Valor Estimado do Frete Automatico</h3>
            <p>Com base nos dados fornecidos</p>
            <p>
              Frete:{" "}
              {formData.estimated_shipping_cost === "" ||
              formData.estimated_shipping_cost === "Erro ao calcular"
                ? "R$ 0,00"
                : parseFloat(formData.estimated_shipping_cost).toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                      currencyDisplay: "symbol",
                    }
                  )}
            </p>
          </div>
          <div>
            <button type="submit" id="calc-freight">
              Calcular Orçamento
            </button>
            {msg && <p id="form-error">{msg}</p>}
            {isAllRight && (
              <div id="last-button">
                <button id="confirm-form" onClick={handleSendForm}>
                  <img src={confirmIcon} alt="confirm icon" /> Confirmar
                  Solicitação
                </button>
              </div>
            )}
          </div>
        </section>
      </form>
      {modal[0] && modal[1] ? (
        <div id="modal">
          <div id="modal-container">
            <img src={SucessIcon} alt="" />

            <p>Solicitação feita com sucesso</p>
          </div>
        </div>
      ) : modal[0] && modal[1] === false ? (
        <div id="modal">
          <img src={FailIcon} alt="" />

          <p>Erro ao fazer a solicitação</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default NewRequest
