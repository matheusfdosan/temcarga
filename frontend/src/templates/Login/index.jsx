import "./style.css";
import TruckLogin from "../../assets/TrucksImages/TruckLogin.png";
import Logo from "../../assets/Logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ImgComponent from "../../components/ImgComponent"

function Login() {
  return (
    <div className="LoginContainer">
      <div className="ComponentImg"><ImgComponent/></div>
      <div className="LoginContent">
        <h2>Entre para continuar</h2>
        <Input Label="E-mail*" Type="e-mail" />
        <Input Label="Senha*" Type="password" />
        <Button Text="Entrar" />
      </div>
    </div>
  );
}

export default Login;
