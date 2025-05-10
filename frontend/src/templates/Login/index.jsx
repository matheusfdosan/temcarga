import "./style.css";
import TruckLogin from "../../assets/TrucksImages/TruckLogin.png";
import Logo from "../../assets/Logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ImgComponent from "../../components/ImgComponent"
import ListofLinks from "../../components/ListofLinks";

function Login() {
  return (
    <div className="LoginContainer">
      <div className="ImgComponent"><ImgComponent/></div>
      <div className="LoginContent">
        <h2>Entre para continuar</h2>
        <Input Label="E-mail*" Type="e-mail" />
        <Input Label="Senha*" Type="password" />
        <Button Text="Entrar" />
        <p>Você ainda não tem conta? <a href="/signup">Cadastre-se</a></p>
        <div className="FooterLogin">
          <ListofLinks />
        </div>
      </div>
    </div>
  );
}

export default Login;
