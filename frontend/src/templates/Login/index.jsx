import "./style.css"
import Input from "../../components/Input"
import Button from "../../components/Button"
import ListofLinks from "../../components/ListofLinks"
import LogoWhite from "../../assets/LogoWhite.svg"

function Login() {
  const handleClickLoginButton = () => {
    console.log("login")
  }

  return (
    <div className="LoginContainer">
      <div className="ImgComponent">
        <img src={LogoWhite} alt="logo" />
      </div>

      <div className="LoginContent">
        <form method="post">
          <h2>Entre para continuar</h2>

          <Input label="E-mail*" type="e-mail" />

          <Input label="Senha*" type="password" />

          <Button text="ENTRAR" whenIClick={handleClickLoginButton} />

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
