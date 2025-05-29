import "./style.css"

import Input from "../../components/Input"
import Button from "../../components/Button"
import ListofLinks from "../../components/ListofLinks"
import LogoWhite from "../../assets/LogoWhite.svg"
import { useState } from "react"
import signUpService from "../../utils/signUpService"
import loginService from "../../utils/loginService"
import Contract from "../../components/Contract"

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf_cnpj: "",
    password: "",
    confirmPassword: "",
  })
  const [msg, setMsg] = useState("")
  const [showContractModal, setShowContractModal] = useState("")

  const handleChange = ({ target }) => {
    const { name, value } = target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCloseModal = (close) => {
    setShowContractModal(close)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const isAllFilled = Object.values(formData).every(
      (val) => val !== null && val !== undefined && String(val).trim() !== ""
    )

    const isPasswordsSame = formData.password === formData.confirmPassword

    const isPasswordgreaterThanEigth = formData.password.length >= 8

    if (!isAllFilled) {
      setMsg("Preencha todas as informações!")
      return
    }

    if (!isPasswordsSame) {
      setMsg("As senhas não se coincidem!")
      return
    }

    if (!isPasswordgreaterThanEigth) {
      setMsg("Crie uma senha com mais de 8 dígitos!")
      return
    }
    setMsg("")
    setShowContractModal(true)
  }

  const handleSigned = async (response) => {
    if (response) {
      await doSignUp(formData)
    }
  }

  const doLogin = async (userLogin) => {
    try {
      const loginRes = await loginService(userLogin)

      if (loginRes.acess) {
        localStorage.setItem(
          "login",
          JSON.stringify({
            token: loginRes.token,
            auth: {
              id: loginRes.user.id,
              name: loginRes.user.name,
              email: loginRes.user.email,
              cpf_cnpj: loginRes.user.cpf_cnpj,
              password: loginRes.user.password,
            },
          })
        )
      }
    } catch (err) {
      console.error("Erro no login:", err)
      setMsg("Erro ao fazer login. Tente novamente.")
    }
  }

  const doSignUp = async (form) => {
    try {
      const response = await signUpService(form)
      console.log("Cadastro feito com sucesso!")
      if (response.message == "Usuário registrado") {
        await doLogin({ email: form.email, password: form.password })
        location.href = "/"
      }
    } catch (err) {
      console.error("Erro no cadastro:", err)
      setMsg("Erro ao cadastrar. Tente novamente.")
    }
  }

  return (
    <div id="SignUpContainer">
      <div id="SignUpContent">
        <form method="post" onSubmit={handleSubmit}>
          <h2>Adicione seus dados para começar</h2>
          <Input
            type="text"
            label="Digite seu nome*"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            label="E-mail*"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type="text"
            label="CPF ou CNPJ*"
            name="cpf_cnpj"
            value={formData.cpf_cnpj}
            onChange={handleChange}
          />

          <div id="password-confirm">
            <Input
              type="password"
              name="password"
              label="Senha* (mínimo 8 digitos)"
              value={formData.password}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="confirmPassword"
              label="Confirme a sua senha*"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <span id="terms">
            Ao fazer o cadastro você concorda com os{" "}
            <a href="#">Termos de Privacidade</a>
          </span>

          <p id="error">{msg}</p>

          <Button text="CADASTRAR" />

          <p id="login-link">
            Você já possui uma conta? <a href="login">Faça Login</a>
          </p>
        </form>
        <ListofLinks />
      </div>
      <div className="ImgComponentSignUp">
        <img
          src={LogoWhite}
          alt="logo"
          onClick={() => {
            document.location.href = "/"
          }}
        />
      </div>

      {showContractModal && (
        <Contract wasItSigned={handleSigned} closeModal={handleCloseModal} />
      )}
    </div>
  )
}

export default SignUp
