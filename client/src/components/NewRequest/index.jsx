import React, { useEffect, useState } from "react"
import "./styles.css"

import calculateMinFreight from "../../utils/calculateMinFreight.js"
import editRequestService from "../../utils/editRequestService.js"
import getRequests from "../../utils/getRequests.js"
import newRequestService from "../../utils/newRequestService.js"
import { supabase } from "../../utils/supabase.js"

import blueBoxIcon from "../../assets/blue-box-icon.svg"
import blueMarker from "../../assets/blue-marker.svg"
import SucessIcon from "../../assets/check-circle.gif"
import confirmIcon from "../../assets/confirm-icon.svg"
import dateIcon from "../../assets/date-icon.svg"
import editIcon from "../../assets/edit-icon.svg"
import FailIcon from "../../assets/error.gif"
import insuranceIcon from "../../assets/insurance-icon.svg"
import taxDocsIcon from "../../assets/tax-docs-icon.svg"

import FileUploader from "../FileUploader"
import Input from "../Input"
import Loading from "../Loading"
import ModalConfirmPayment from "../ModalConfirmPayment/index.jsx"
import ModalConfirm from "../ModalConfirm/index.jsx"

function NewRequest() {
  const [modalConfirm, setModalConfirm] = useState(false)
  const [modalConfirmPayment, setModalConfirmPayment] = useState(false)
  const [phase, setPhase] = useState(0)

  const [understandTerms, setUnderstandTerms] = useState(false)
  const [insurance, setInsurance] = useState(null)
  const [msg, setMsg] = useState("")
  const [isAllRight, setIsAllRight] = useState(false)
  const [formData, setFormData] = useState({
    id: null,
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
      truckType: "",
      features: {
        perishable: false,
        fragile: false,
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
    insurance_document: null,
    insurance_document_name: "",
    estimated_shipping_cost: "",
    distance: "",
  })
  const [modal, setModal] = useState([false, false])
  const [loading, setLoading] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isRepiting, setIsRepiting] = useState(false)

  const normalizeFileName = (name) => {
    return name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
      .replace(".pdf", "")
      .replace(/[^a-zA-Z0-9.\-_]/g, "")
  }

  const getRequestsFunc = async (clientId, requestId) => {
    const result = await getRequests(clientId)
    return result.filter((r) => r.id === requestId)[0]
  }

  useEffect(() => {
    const loadData = async () => {
      let parsedData
      let isItReallyRepeating = false

      const repeatRequest = JSON.parse(localStorage.getItem("repeatRequest"))
      const editingNow = JSON.parse(localStorage.getItem("editingNow"))

      if (editingNow) {
        setIsEditing(true)
        parsedData = editingNow
      }

      if (repeatRequest) {
        const clientId = JSON.parse(localStorage.getItem("login")).auth.id
        parsedData = await getRequestsFunc(clientId, repeatRequest)
        isItReallyRepeating = true
        setIsRepiting(true)
      }

      if (parsedData) {
        setFormData({
          id: parsedData.id,
          location: {
            origin: {
              cep: parsedData.origin_cep || "",
              city: parsedData.origin_city || "",
              state: parsedData.origin_state || "",
              complete_address: parsedData.origin_complete_address || "",
            },
            destination: {
              cep: parsedData.destination_cep || "",
              city: parsedData.destination_city || "",
              state: parsedData.destination_state || "",
              complete_address: parsedData.destination_complete_address || "",
            },
          },
          load_description: {
            type: parsedData.type || "",
            weight: parsedData.weight || "",
            numAxles: parsedData.numaxles || "",
            truckType: parsedData.trucktype || "",
            features: {
              perishable: parsedData.perishable || false,
              fragile: parsedData.fragile || false,
            },
            goods_value: parsedData.goods_value || "",
            additional_observations: parsedData.additional_observations || "",
          },
          dates: {
            collect_date: isItReallyRepeating
              ? ""
              : parsedData.collect_date?.replace("T00:00:00.000Z", "") || "",
            estimated_delivery_date: isItReallyRepeating
              ? ""
              : parsedData.estimated_delivery_date?.replace(
                  "T00:00:00.000Z",
                  ""
                ) || "",
          },
          invoice_document: !isItReallyRepeating
            ? parsedData.invoice_document
            : "",
          invoice_document_name: !isItReallyRepeating
            ? parsedData.invoice_document_name
            : "",
          insurance_document: parsedData.insurance_document || null,
          insurance_document_name: parsedData.insurance_document_name || "",
          estimated_shipping_cost: isItReallyRepeating
            ? ""
            : parsedData.estimated_shipping_cost || "",
          distance: parsedData.distance || "",
        })
      }
    }

    loadData()
  }, [])

  useEffect(() => {
    if (isEditing && formData.insurance_document_name) {
      setInsurance(true)
    }
  }, [formData.insurance_document_name])

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

  const handleSaveInsurance = async () => {
    try {
      if (
        !formData.insurance_document ||
        !(formData.insurance_document instanceof File)
      ) {
        console.error("Nenhum arquivo de seguro válido encontrado")
        return null
      }

      const nowDate = Date.now()
      const fileName = `${normalizeFileName(
        formData.insurance_document_name
      )}-${nowDate}.pdf`

      const { error } = await supabase.storage
        .from("notas-fiscais-seguros")
        .upload(`pdfs/${fileName}`, formData.insurance_document)

      if (error) throw error

      const {
        data: { publicUrl },
      } = supabase.storage
        .from("notas-fiscais-seguros")
        .getPublicUrl(`pdfs/${fileName}`)

      return publicUrl
    } catch (err) {
      console.error("Erro ao salvar seguro:", err)
      return null
    }
  }

  const handleCalculateFreight = async () => {
    try {
      const numAxles = Number(formData.load_description.numAxles) || 2
      const calculate = await calculateMinFreight(formData, numAxles)
      setFormData((prev) => ({
        ...prev,
        estimated_shipping_cost: String(calculate.totalCost),
        distance: String(calculate.distance),
      }))
      setIsAllRight(true)
      setMsg("")
      return true
    } catch (error) {
      setLoading(false)
      console.error("Erro ao calcular o frete:", error.message)
      setFormData((prev) => ({
        ...prev,
        estimated_shipping_cost: "Erro ao calcular",
      }))
      setMsg("Preencha todas as informações acima!")
      setIsAllRight(false)
      return false
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (Object.keys(formData.invoice_document).length === 0) {
      setMsg("Você precisa adicionar um arquivo XML da nota fiscal.")
      setIsAllRight(false)
      setLoading(false)
      return
    }

    if (insurance) {
      if (!formData.insurance_document_name) {
        setMsg("Você precisa adicionar o arquivo PDF do seguro.")
        setIsAllRight(false)
        setLoading(false)
        return
      }
    } else {
      if (!understandTerms) {
        setMsg("É necessário marcar que você entendeu os Termos de Seguro!")
        setIsAllRight(false)
        setLoading(false)
        return
      }

      setFormData((prev) => ({
        ...prev,
        insurance_document: "",
        insurance_document_name: "",
      }))
    }

    handleCalculateFreight()
  }

  const thisTimeItWill = async () => {
    try {
      setLoading(true)

      function isValidURL(str) {
        try {
          new URL(str)
          return true
        } catch (_) {
          return false
        }
      }

      const isInsuranceURL = isValidURL(formData.insurance_document)

      let insuranceUrl = formData.insurance_document

      if (!isInsuranceURL && insurance) {
        insuranceUrl = await handleSaveInsurance()
        if (!insuranceUrl) {
          setMsg("Falha ao enviar o arquivo de seguro.")
          setModal([true, false])
          setTimeout(() => setModal([false, false]), 3000)
          return
        }
      }

      const requestData = {
        ...formData,
        insurance_document: insurance ? insuranceUrl : "",
        insurance_document_name:
          insurance && insuranceUrl ? formData.insurance_document_name : "",
      }

      const response = isEditing
        ? await editRequestService(requestData)
        : await newRequestService(requestData)

      if (!response) {
        setModal([true, false])
        setTimeout(() => setModal([false, false]), 3000)
        return
      }

      setModal([true, true])
      setTimeout(() => {
        setModal([false, true])
        localStorage.setItem("currentSection", "your-requests")
        localStorage.removeItem("editingNow")
        location.reload()
      }, 3000)
    } catch (error) {
      setTimeout(() => {
        setModal([true, false])
      }, 3000)
      console.error("Erro ao enviar:", error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSendForm = async () => {
    setPhase(1)
  }

  useEffect(() => {
    if (phase === 1) {
      setModalConfirm(true)
    }
    if (phase === 2) {
      setModalConfirm(false)
      setModalConfirmPayment(true)
    }
    if (phase === 3) {
      setModalConfirmPayment(false)
      thisTimeItWill()
    }
  }, [phase])

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
              label={"CEP"}
              type="cep"
            />
            <Input
              name="location.destination.city"
              value={formData.location.destination.city}
              onChange={handleChange}
              label={"Cidade"}
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
              label={"Endereço Completo"}
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

              <Input
                name="load_description.truckType"
                value={formData.load_description.truckType}
                onChange={handleChange}
                label={"Escolha o tipo do caminhão"}
                type="select"
                selectList={["Caçamba", "Baú", "Carroceria Aberta"]}
              />

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
                </div>
              </div>
            </div>
            <div id="right-side">
              <Input
                name="load_description.goods_value"
                value={formData.load_description.goods_value}
                onChange={handleChange}
                label={"Valor da Mercadoria (R$)"}
                placeholder={"2500"}
                type="money"
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
              onChange={({ xmlString, fileName }) => {
                setIsAllRight(false)
                setFormData((prev) => ({
                  ...prev,
                  invoice_document: xmlString,
                  invoice_document_name: fileName,
                }))
              }}
              value={formData.invoice_document}
              docName={formData.invoice_document_name}
              fileType={"xml"}
            />
          </section>
        </div>

        <section id="insurance-sec">
          <h3>
            <img src={insuranceIcon} alt="insuranceIcon" />
            Adiconar Seguro
          </h3>

          <p>Você quer adicionar um seguro?</p>
          <div id="decision">
            <label htmlFor="yes">
              <input
                type="radio"
                name="choose"
                required
                checked={isEditing ? (insurance ? true : false) : null}
                id="yes"
                onChange={() => {
                  setIsAllRight(false)
                  setUnderstandTerms(false)
                  setFormData((prev) => ({
                    ...prev,
                    insurance_document: null,
                    insurance_document_name: "",
                  }))
                  setInsurance(true)
                }}
              />
              SIM
            </label>
            <label htmlFor="no">
              <input
                type="radio"
                name="choose"
                checked={isEditing ? (!insurance ? true : false) : null}
                required
                id="no"
                onChange={() => {
                  setIsAllRight(false)
                  setUnderstandTerms(false)
                  setFormData((prev) => ({
                    ...prev,
                    insurance_document: null,
                    insurance_document_name: "",
                  }))
                  setInsurance(false)
                }}
              />
              NÃO
            </label>
          </div>

          {insurance ? (
            <FileUploader
              name="insurance_document"
              onChange={({ pdfFile, fileName }) => {
                setIsAllRight(false)
                setFormData((prev) => ({
                  ...prev,
                  insurance_document: pdfFile,
                  insurance_document_name: fileName,
                }))
              }}
              value={formData.insurance_document}
              docName={formData.insurance_document_name}
              fileType={"pdf"}
            />
          ) : isEditing || insurance === false ? (
            <Input
              name="understandTerms"
              isRequired={true}
              value={understandTerms}
              onChange={() => {
                setIsAllRight(false)
                setUnderstandTerms(!understandTerms)
              }}
              type="checkbox"
              label={
                "Estou ciente de que o TemCarga não oferece seguro e assumo total responsabilidade por eventuais perdas, danos, roubo ou extravios durante o transporte. Autorizo o transporte sem cobertura adicional."
              }
              desc="O proprietário já tem a garantia de que estará protegido desde o momento da aquisição."
            />
          ) : (
            <></>
          )}
        </section>

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
                  <img
                    src={
                      isEditing
                        ? editIcon
                        : isRepiting
                        ? confirmIcon
                        : confirmIcon
                    }
                    alt="confirm icon"
                  />
                  {isEditing
                    ? "Confirmar Alterações"
                    : isRepiting
                    ? "Confirmar Solicitação"
                    : "Confirmar Solicitação"}
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

            <p>{isEditing ? "Alteração" : "Solicitação"} feita com sucesso</p>
          </div>
        </div>
      ) : modal[0] && modal[1] === false ? (
        <div id="modal">
          <img src={FailIcon} alt="fail" />

          <p>Erro ao fazer a solicitação</p>
        </div>
      ) : (
        <></>
      )}

      {loading && <Loading />}
      {modalConfirm && (
        <ModalConfirm
          title={"Deseja proceguir com a solicitação?"}
          desc={
            "Lembrando que quando o caminhoneiro começar o serviço, não será mais possível cancelar!"
          }
          continueRequest={(res) => {
            if (
              formData.estimated_shipping_cost ===
              JSON.parse(localStorage?.getItem("editingNow"))
                ?.estimated_shipping_cost
            ) {
              setPhase(3)
              setModalConfirm(false)
            } else if (res) {
              setPhase(2)
            }
          }}
          close={(res) => !res && setPhase(0)}
        />
      )}
      {modalConfirmPayment && (
        <ModalConfirmPayment
          amount={formData.estimated_shipping_cost}
          continuePayment={(res) => res && setPhase(3)}
          cancel={(res) => !res && setPhase(0)}
        />
      )}
    </div>
  )
}

export default NewRequest
