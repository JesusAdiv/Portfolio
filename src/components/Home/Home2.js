import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

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
              ¡Hola! Soy <b className="purple">Jesús</b>, desarrollador{" "}
              <i>
                <b className="purple">Full-Stack</b>
              </i>{" "}
              y recién egresado de{" "}
              <i>
                <b className="purple">
                  Ingeniería en Ciencias de la Computación por la BUAP
                </b>
              </i>
              .
              <br />
              <br />
              Me apasiona transformar ideas complejas en soluciones de software
              funcionales, escalables y con una gran experiencia de usuario,
              disfrutando tanto del diseño de arquitecturas sólidas en el{" "}
              <i>
                <b className="purple">backend</b>
              </i>{" "}
              como de interfaces dinámicas e interactivas en el{" "}
              <i>
                <b className="purple">frontend</b>
              </i>
              .
              <br />
              <br />
              Tengo experiencia construyendo proyectos con tecnologías como
              <i>
                <b className="purple">
                  {" "}
                  JavaScript (ES6+), TypeScript, React, Angular, Node.js,
                  Express y PHP (Laravel)
                </b>
              </i>
              , trabajando con bases de datos relacionales y NoSQL como{" "}
              <i>
                <b className="purple">MySQL y MongoDB</b>
              </i>
              .
              <br />
              <br />
              Mis principales áreas de interés abarcan el desarrollo{" "}
              <i>
                <b className="purple">Web Full-Stack & Móvil (Flutter / Dart)</b>
              </i>
              , el diseño de arquitecturas de{" "}
              <i>
                <b className="purple">APIs escalables</b>
              </i>{" "}
              y la integración de asistentes y modelos de{" "}
              <i>
                <b className="purple">Inteligencia Artificial</b>
              </i>{" "}
              en los flujos de desarrollo.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
