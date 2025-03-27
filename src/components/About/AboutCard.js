/*=================================================================================================
                                    Alejandro Jimenez Brundin
                                    brundindev@gmail.com
                                    https://brundindev.vercel.app
=================================================================================================*/
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">brundindev </span>
            de <span className="purple"> Alicante, España.</span>
            <br />
            Actualmente trabajo como desarrollador de aplicaciones multiplataforma.
            <br />
            Soy desarrollador full stack con experiencia en tecnologías modernas.
            <br />
            <br />
            Además de programar, ¡estas son otras actividades que me encanta hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar Videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Estar con mis amigos
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "¡Esfuérzate por construir cosas que marquen la diferencia!"{" "}
          </p>
          <footer className="blockquote-footer">brundindev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
/*=================================================================================================
                                    Alejandro Jimenez Brundin
                                    brundindev@gmail.com
                                    https://brundindev.vercel.app
=================================================================================================*/
