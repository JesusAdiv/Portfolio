import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola a todos! Soy <span className="purple">Jesús Adiv Barroso</span>{" "}
            de <span className="purple">Puebla, México</span>.
            <br />
            Soy egresado de{" "}
            <span className="purple">
              Ingeniería en Ciencias de la Computación
            </span>{" "}
            por la{" "}
            <span className="purple">
              Benemérita Universidad Autónoma de Puebla (BUAP)
            </span>
            .
            <br />
            Me especializo en el desarrollo{" "}
            <span className="purple">Full-Stack</span>, la creación de
            aplicaciones web y móviles dinámicas y la arquitectura de APIs y
            microservicios eficientes.
            <br />
            <br />
            Además de programar, me apasiona:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Leer 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Los idiomas 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Entrenar y hacer ejercicio 🏋️‍♂️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Transformando ideas complejas en soluciones de software funcionales y escalables."
          </p>
          <footer className="blockquote-footer">Jesus Adiv Barroso</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
