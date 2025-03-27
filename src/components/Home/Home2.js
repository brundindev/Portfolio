/*=================================================================================================
                                    Alejandro Jimenez Brundin 
                                    brundindev@gmail.com
                                    https://brundindev-portfolio.vercel.app
=================================================================================================*/
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTEME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Me he enamorado de la programación y he aprendido bastante,
              creo... 🤷‍♂️
              <br />
              <br />Tengo fluidez en lenguajes clásicos como
              <i>
                <b className="purple"> Vue, Javascript, React, Flutter y Go. </b>
              </i>
              <br />
              <br />
              Mis campos de interés son construir nuevas &nbsp;
              <i>
                <b className="purple">Tecnologías y Páginas Web </b> y
                también en áreas relacionadas con{" "}
                <b className="purple">
                  backend.
                </b>
              </i>
              <br />
              <br />
              Siempre que es posible, aplico mi pasión por desarrollar productos
              con <b className="purple">Vue.js</b> y
              <i>
                <b className="purple">
                  {" "}
                  Bibliotecas y Frameworks Modernos de Javascript
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            <p>
              Siéntete libre de <span className="purple">conectar </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/brundindev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/brundindev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alejandrojimenezb/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/brundindev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
/*=================================================================================================
                                    Alejandro Jimenez Brundin
                                    brundindev@gmail.com
                                    https://brundindev-portfolio.vercel.app
=================================================================================================*/
