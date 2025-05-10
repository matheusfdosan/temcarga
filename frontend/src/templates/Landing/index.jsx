// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper/modules"

import { useState } from "react"
import logo from "../../assets/logo.svg"
import arrowRight from "../../assets/arrow-right.svg"
import heroIllustration from "../../assets/hero-illustration.png"
import whatsappIllustration from "../../assets/whatsapp-illustration.png"
import truckImg from "../../assets/truck-img.png"
import trucksLine from "../../assets/trucks-line.png"
import "./styles.css"
import LandingCard from "../../components/LandingCard"
import faqTitle from "../../assets/faq-title.png"

// cards img
import card1 from "../../assets/LandingCardsImgs/card1.png"
import card2 from "../../assets/LandingCardsImgs/card2.png"
import card3 from "../../assets/LandingCardsImgs/card3.png"
import DisclasureWidget from "../../components/DisclasureWidget"
import Footer from "../../components/Footer"

function Landing() {
  const [hovered, setHovered] = useState("")
  const [showPlayer, setShowPlayer] = useState(false)

  const handleHoverBall = ({ target }) => {
    const value = target.innerText
    setHovered(value)
  }

  const handleHoverBallLeave = () => {
    setHovered("")
  }

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

      <main>
        <div className="container">
          <section id="hero">
            <div>
              <h2>Contrate caminhoneiros para transportar sua carga</h2>
              <p>
                Os clientes podem contratar um caminhoneiro para movimentar sua
                carga de forma rápida e prática pelo nosso site, enquanto os
                motoristas autônomos podem encontrar oportunidades de frete
                diretamente pelo WhatsApp, onde um assistente virtual com
                inteligência artificial facilita toda a comunicação, envio de
                dados, negociação e confirmação do serviço.
              </p>
              <button>Solicitar um Frete</button>
              <a href="/solicitar-frete">
                Veja como Trabalhamos{" "}
                <img src={arrowRight} alt="seta para direita" />
              </a>
            </div>
            <div>
              <img src={heroIllustration} alt="" />
            </div>
          </section>

          <section id="im-truck-driver">
            <div>
              <h3>Sou Caminhoneiro</h3>
              <p>
                Se você é um caminhoneiro e procura serviços no TemCarga, basta
                adicionar o número de telefone ao seu Whatsapp, fazer seu
                registro e iniciar a procura.
              </p>
              <button>Adicione ao WhatsApp</button>
            </div>
            <img src={whatsappIllustration} alt="whatsapp-illustration" />
          </section>

          <section id="benefits">
            <div>
              <img src={truckImg} alt="truck-img" />
            </div>
            <div>
              <span>
                Fretes mais lucrativos para caminhoneiros, mais justos para
                clientes
              </span>
              <span>
                Conexão instantânea com cargas ou motoristas em poucos cliques
              </span>
              <span>Tudo resolvido pelo WhatsApp, sem nenhuma complicação</span>
            </div>
          </section>

          <section id="hows-it-works">
            <img src={trucksLine} alt="trucks-line" />

            <div className="container">
              <h2>Como a TemCarga funciona?</h2>
              <p>
                Da solicitação do cliente à entrega da carga: entenda como a
                TemCarga conecta demandas de transporte com caminhoneiros
                disponíveis de forma rápida, segura e inteligente.
              </p>
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                }}
              >
                <div id="video-border">
                  {!showPlayer ? (
                    <div onClick={() => setShowPlayer(true)} id="video-ref">
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          borderRadius: "50%",
                          padding: "12px 16px",
                          fontSize: "24px",
                          fontWeight: "bold",
                          color: "#000",
                          border: ".3rem solid var(--primary-color-clearer)",
                          color: "var(--primary-color-clearer)",
                        }}
                      >
                        ▶
                      </div>
                    </div>
                  ) : (
                    <div
                      style={{
                        padding: "56.25% 0 0 0",
                        position: "relative",
                        boxShadow: "var(--shadow-clearer)",
                      }}
                    >
                      <iframe
                        src="https://player.vimeo.com/video/48431562?badge=0&autopause=0&player_id=0&app_id=58479"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "100%",
                          height: "100%",
                          borderRadius: ".5rem",
                        }}
                        title="Como funciona o TemCarga?"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section id="why-the-temcarga">
            <div className="container">
              <h2>Por que o TemCarga?</h2>
              <h3>
                Quais são os benefícios de utilizar o tem carga como
                intermediário entre suas cargas?
              </h3>
            </div>
            <div id="cards-container">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <LandingCard
                    img={card1}
                    miniTitle="Envio Rápido e Prático"
                    text="Solicitar um frete leva menos de 2 minutos. Basta preencher os dados da carga ou falar diretamente com nossa IA no WhatsApp sem ligações, sem complicações."
                    bgColor="EFEFEF"
                    bgTextColor="FFFFFF"
                    textColor={"232323"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <LandingCard
                    img={card2}
                    miniTitle="Preço transparente e justo"
                    text="O cálculo do valor do frete é automático, com base na distância, tipo de carga e urgência. Você sabe exatamente quanto vai pagar antes de confirmar."
                    bgColor="CBE7E6"
                    bgTextColor="232323"
                    textColor={"FFFFFF"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <LandingCard
                    img={card3}
                    miniTitle="Documentação fiscal automatizada"
                    text="Emissão automática de NF-e, CT-e e MDF-e, evitando dores de cabeça com burocracia. O TemCarga cuida da parte fiscal para você."
                    bgColor="9494D9"
                    bgTextColor="FFFFFF"
                    textColor={"232323"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <LandingCard
                    img={card3}
                    miniTitle="Documentação fiscal automatizada"
                    text="Emissão automática de NF-e, CT-e e MDF-e, evitando dores de cabeça com burocracia. O TemCarga cuida da parte fiscal para você."
                    bgColor="9494D9"
                    bgTextColor="FFFFFF"
                    textColor={"232323"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <LandingCard
                    img={card3}
                    miniTitle="Documentação fiscal automatizada"
                    text="Emissão automática de NF-e, CT-e e MDF-e, evitando dores de cabeça com burocracia. O TemCarga cuida da parte fiscal para você."
                    bgColor="9494D9"
                    bgTextColor="FFFFFF"
                    textColor={"232323"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <LandingCard
                    img={card3}
                    miniTitle="Documentação fiscal automatizada"
                    text="Emissão automática de NF-e, CT-e e MDF-e, evitando dores de cabeça com burocracia. O TemCarga cuida da parte fiscal para você."
                    bgColor="9494D9"
                    bgTextColor="FFFFFF"
                    textColor={"232323"}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </section>

          <section id="faq">
            <img src={faqTitle} alt="faq titulo" />

            <div className="faqs-container">
              <DisclasureWidget title={"Como é feito o pagamento?"} text={"a"} />
              <DisclasureWidget title={"Preciso emitir nota?"} text={"a"} />
              <DisclasureWidget title={"Como o caminhoneiro é selecionado?"} text={"a"} />
              <DisclasureWidget title={"Como funciona o suporte?"} text={"a"} />
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Landing
