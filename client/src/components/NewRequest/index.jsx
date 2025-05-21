import React from "react";
import "./styles.css";
import Input from "../Input";

function NewRequest() {
  return (
    <div id="new-request">
      <h2>Faça uma nova solicitação</h2>
      <p>Preencha os dados abaixo para solicitar um novo transporte de carga</p>

      <form>
        <section id="origin-local">
          <Input label={"CEP"} />
          <Input label={"Cidade"} text="text" />
          <Input label={""} text="text" />
        </section>
        
        <section id="destination-local"></section>
        
        <section id="description"></section>
        
        <section id="deadlines"></section>
        
        <section id="tax-docs"></section>
        
        <div id="estimated-value"></div>

        <div>
          <button></button>
          <button></button>
        </div>
      </form>
    </div>
  );
}

export default NewRequest;
