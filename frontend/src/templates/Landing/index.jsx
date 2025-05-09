import { useState } from "react";
import logo from "../../assets/logo.svg";
import "./styles.css";

function Landing() {
  const [hovered, setHovered] = useState("");

  const handleHoverBall = ({ target }) => {
    const value = target.innerText;
    setHovered(value);
  };

  const handleHoverBallLeave = () => {
    setHovered("");
  };

  const handleClickLoginBtn = () => {
    document.location.href = "/login"
  }
 
  return (
    <div id="landing-page">
      <header>
        <div className="container">
          <img src={logo} alt="logo do temcarga" />

          <nav>
            <ul>
              <li
                onMouseEnter={handleHoverBall}
                onMouseLeave={handleHoverBallLeave}
              >
                <a href="/">Início</a>
                {hovered == "Início" && <div className="ball"></div>}
              </li>
              <li
                onMouseEnter={handleHoverBall}
                onMouseLeave={handleHoverBallLeave}
              >
                <a href="#como-trabalhamos">Como Trabalhamos</a>
                {hovered == "Como Trabalhamos" && <div className="ball"></div>}
              </li>
              <li
                onMouseEnter={handleHoverBall}
                onMouseLeave={handleHoverBallLeave}
              >
                <a href="#sobre">Sobre</a>
                {hovered == "Sobre" && <div className="ball"></div>}
              </li>
              <li
                onMouseEnter={handleHoverBall}
                onMouseLeave={handleHoverBallLeave}
              >
                <a href="#faq">F.A.Q</a>
                {hovered == "F.A.Q" && <div className="ball"></div>}
              </li>
            </ul>
          </nav>

          <button onClick={handleClickLoginBtn}>Entrar</button>
        </div>
      </header>
    </div>
  );
}

export default Landing;
