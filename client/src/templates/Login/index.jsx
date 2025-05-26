import "./style.css"
import Input from "../../components/Input"
import Button from "../../components/Button"
import ListofLinks from "../../components/ListofLinks"
import LogoWhite from "../../assets/LogoWhite.svg"
import { useState } from "react"
import loginService from "../../utils/loginService"

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleClickLoginButton = async (e) => {
    e.preventDefault()
    await doLogin(formData)
    location.href = "/"
    localStorage.setItem("currentSection", "home")
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

  const handleChange = ({ target }) => {
    const { name, value } = target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="LoginContainer">
      <div className="ImgComponent">
        <img
          src={LogoWhite}
          alt="logo"
          onClick={() => {
            document.location.href = "/"
          }}
        />
      </div>

      <div className="LoginContent">
        <form method="post" onSubmit={handleClickLoginButton}>
          <h2>Entre para continuar</h2>

          <Input
            label="E-mail*"
            type="e-mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            label="Senha*"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <Button text="ENTRAR" />

          <p id="register-link">
            Você ainda não tem conta? <a href="/cadastro">Cadastre-se</a>
          </p>
        </form>
        <ListofLinks />
      </div>
    </div>
  )
}

export default Login
