import "./style.css"
import LogoWhite from "../../assets/LogoWhite.svg"
import Truck from "../../assets/TrucksImages/TruckSignUp.png"

function ImgContent () {
    return(
     <div className="ImgContainer">
       <img src={LogoWhite} alt="" className="Img1" />
       <img src={Truck} alt="" className="Img2" />
     </div> 
    )
}

export default ImgContent