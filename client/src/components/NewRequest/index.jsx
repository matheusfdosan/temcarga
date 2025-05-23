import React, { useState } from "react";
import "./styles.css";

import Input from "../Input";

import blueMarker from "../../assets/blue-marker.svg";
import blueBoxIcon from "../../assets/blue-box-icon.svg";
import dateIcon from "../../assets/date-icon.svg";
import taxDocsIcon from "../../assets/tax-docs-icon.svg";
import confirmIcon from "../../assets/confirm-icon.svg";
import FileUploader from "../FileUploader";

function NewRequest() {
  return (
    <div id="new-request">
      <h2>Faça uma novo orçamento</h2>
      <p>Preencha os dados abaixo para solicitar um novo transporte de carga</p>

      <form>
        <div id="localization">
          <section id="origin-local">
            <h3>
              <img src={blueMarker} alt="blue-marker" />
              Endereço de Origem
            </h3>
            <Input label={"CEP"} type="cep" />
            <Input label={"Cidade"} type="text" />
            <Input
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
            <Input label={"Endereço Completo"} type="text" />
          </section>

          <section id="destination-local">
            <h3>
              <img src={blueMarker} alt="blue-marker" />
              Endereço de Destino
            </h3>
            <Input label={"CEP (do destino)"} type="cep" />
            <Input label={"Cidade (do destino)"} type="text" />
            <Input
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
            <Input label={"Endereço Completo (do destino)"} type="text" />
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
              <Input label={"Peso da Carga (kg)"} type="measure" />

              <div id="load-size">
                <Input label={"Comprimento (cm)"} type="measure" />
                <Input label={"Largura (cm)"} type="measure" />
                <Input label={"Altura (cm)"} type="measure" />
              </div>

              <div id="load-characteristics">
                <h4>Caracteristicas da Carga</h4>

                <div id="all-checkboxes">
                  <Input
                    type="checkbox"
                    label={"Perecível"}
                    desc="Que está sujeito a deteriorar-se."
                  />
                  <Input
                    type="checkbox"
                    label={"Frágil"}
                    desc="Que quebra fácil, delicado."
                  />
                  <Input
                    type="checkbox"
                    label={"Seguros Inclusos"}
                    desc="O proprietário já tem a garantia de que estará protegido desde o momento da aquisição."
                  />
                </div>
              </div>
            </div>
            <div id="right-side">
              <Input label={"Valor da Mercadoria (R$)"} type="measure" />
              <Input type="textbox" label="Observações Adicionais" />
            </div>
          </div>
        </section>

        <div id="deadlines-tax">
          <section id="deadlines">
            <h3>
              <img src={dateIcon} alt="date icon" />
              Datas
            </h3>

            <Input type="date" label="Data de Coleta" />
            <Input type="date" label="Data Estimada de Entrega" />
          </section>

          <section id="tax-docs">
            <h3>
              <img src={taxDocsIcon} alt="tax-doc-icon" />
              Documentos Obrigratórios
            </h3>

            <FileUploader />
          </section>
        </div>

        <section id="estimated-value">
          <div>
            <h3>Valor Estimado do Frete Automatico</h3>
            <p>Com base nos dados fornecidos</p>
          </div>
          <button>Calcular Orçamento</button>
        </section>

        <div id="last-button">
          <button id="confirm-form" type="submit">
            <img src={confirmIcon} alt="confirm icon" /> Confirmar Solicitação
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewRequest;
