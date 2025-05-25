import React from "react"
import "./styles.css"
import Input from "../Input"

function Settings() {
  const handleLogOut = () => {
    localStorage.removeItem("login")
    location.href = "/"
  }

  return (
    <div id="settings">
      <h2>Configurações da Conta</h2>
      <p>Gerencie suas preferência e informações pessoais</p>

      <form id="account">
        <div>
          <h3>Informações Pessoais</h3>
          <button type="submit">Salvar Alterações</button>
        </div>
        <div>
          <Input type="text" label={"Nome Completo"} />
          <Input type="email" label={"E-mail"} />
        </div>
        <div>
          <Input type="tel" label={"Telefone"} />
          <Input type="cpfcnpj" label={"CPF ou CNPJ*"} />
        </div>
      </form>
      <button id="log-out" onClick={handleLogOut}>
        Sair da Conta
      </button>
    </div>
  )
}

export default Settings
