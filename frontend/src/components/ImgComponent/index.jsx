import "./style.css"
import Logo from "../../assets/logo.svg"
import Truck from "../../assets/TrucksImages/TruckLogin.png"

function ImgContent () {
    return(
     <div className="ImgContainer">
       <img src={Logo} alt="" />
       <img src={Truck} alt="" />
     </div> 
    )
}

export default ImgContent