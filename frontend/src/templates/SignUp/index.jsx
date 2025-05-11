import "./style.css"

import Input from "../../components/Input"
import Button from "../../components/Button"
import ListofLinks from "../../components/ListofLinks"
import LogoWhite from "../../assets/LogoWhite.svg"

function SignUp() {
  return (
    <div id="SignUpContainer">
      <div id="SignUpContent">
        <form method="post">
          <h2>Adicione seus dados para começar</h2>
          <Input type="text" label="Digite seu nome*" />
          <Input type="email" label="E-mail*" />
          <Input type="text" label="CPF ou CNPJ*" />

          <div id="password-confirm">
            <Input type="password" label="Senha (no mínimo 8 digitos)" />
            <Input type="password" label="Confirme a sua senha*" />
          </div>
          
          <span id="terms">
            Ao fazer o cadastro você concorda com os{" "}
            <a href="">Termos de Privacidade</a>
          </span>

          <Button text="CADASTRAR" />

          <p id="login-link">
            Você já possui uma conta? <a href="login">Faça Login</a>
          </p>
        </form>
        <ListofLinks />
      </div>
      <div className="ImgComponentSignUp">
        <img src={LogoWhite} alt="logo" />
      </div>
    </div>
  )
}

export default SignUp
