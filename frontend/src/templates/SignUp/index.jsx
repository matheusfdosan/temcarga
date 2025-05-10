import "./style.css"

import Input from "../../components/Input"
import Button from "../../components/Button"
import ImgContent from "../../components/ImgComponent"
import ListofLinks from "../../components/ListofLinks"

function SignUp () {
    return(
      <div id="SignUpContainer">
        <div id="SignUpContent">
         <h2>Adicione seus dados para começar</h2>
         <Input Type="text" Label="Digite seu nome*"/>
         <Input Type="e-mail" Label="E-mail*"/>
         <Input Type="text" Label="CPF ou CNPJ*"/>
         <Input Type="text" Label="Telefone*"/>
         <Input Type="password" Label="Senha (no mínimo 8 digitos)"/>
         <Input Type="password" Label="Confirme a sua senha*"/>
         <Button Text="Entrar"/>
         <p>Você já possui uma conta? <a href="login">Faça Login</a></p>
        <div id="FooterSignUp">
        <ListofLinks/>
        </div>
        </div>
        <div id="ImgComponent"> <ImgContent/></div>

      </div>
    )
}

export default SignUp